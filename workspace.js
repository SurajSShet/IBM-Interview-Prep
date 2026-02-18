// ===== CODE WORKSPACE – ONLINE IDE =====
// Uses CodeMirror for syntax highlighting + Piston API for code execution

const LANG_CONFIG = {
    python: {
        cm: 'python', ext: 'py', label: 'Python 3',
        pistonLang: 'python', pistonVersion: '3.10.0',
        template: `# IBM Coding Assessment – Python 3
# Problem: {title}

def solution():
    # Write your solution here
    pass

# Read input
import sys
input_data = sys.stdin.read().split()

# Call your solution
print(solution())
`
    },
    java: {
        cm: 'text/x-java', ext: 'java', label: 'Java',
        pistonLang: 'java', pistonVersion: '15.0.2',
        template: `// IBM Coding Assessment – Java
// Problem: {title}

import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Read input and solve
        System.out.println("Output here");
    }
}
`
    },
    cpp: {
        cm: 'text/x-c++src', ext: 'cpp', label: 'C++',
        pistonLang: 'c++', pistonVersion: '10.2.0',
        template: `// IBM Coding Assessment – C++
// Problem: {title}

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Read input and solve
    
    return 0;
}
`
    },
    javascript: {
        cm: 'javascript', ext: 'js', label: 'JavaScript',
        pistonLang: 'javascript', pistonVersion: '18.15.0',
        template: `// IBM Coding Assessment – JavaScript
// Problem: {title}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', l => lines.push(l.trim()));
rl.on('close', () => {
    // Parse input from lines[] and solve
    console.log("Output here");
});
`
    }
};

// ===== STATE =====
let wsEditor = null;
let wsCurrentProblem = null;
let wsCurrentLang = 'python';
let wsRunning = false;
let wsProblemCollapsed = false;

// ===== INIT =====
function initWorkspace() {
    // Populate problem dropdown
    const sel = document.getElementById('wsProblemSelect');
    CODING_PROBLEMS.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `#${String(p.id).padStart(2, '0')} ${p.title} [${p.diff}]`;
        sel.appendChild(opt);
    });

    // Init CodeMirror
    wsEditor = CodeMirror(document.getElementById('wsEditor'), {
        mode: 'python',
        theme: 'dracula',
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: false,
        extraKeys: {
            'Tab': cm => cm.execCommand('insertSoftTab'),
            'Ctrl-/': cm => cm.execCommand('toggleComment'),
            'Ctrl-Enter': () => runCode()
        }
    });

    // Load first problem
    loadProblem(CODING_PROBLEMS[0]);

    // Events
    sel.addEventListener('change', () => {
        const p = CODING_PROBLEMS.find(x => x.id === parseInt(sel.value));
        if (p) loadProblem(p);
    });

    document.getElementById('wsLangSelect').addEventListener('change', e => {
        wsCurrentLang = e.target.value;
        switchLanguage();
    });

    document.getElementById('wsThemeSelect').addEventListener('change', e => {
        wsEditor.setOption('theme', e.target.value);
    });

    document.getElementById('wsRunBtn').addEventListener('click', runCode);
    document.getElementById('wsResetBtn').addEventListener('click', resetCode);
    document.getElementById('wsCopyBtn').addEventListener('click', copyCode);
    document.getElementById('wsFullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('wsProblemToggle').addEventListener('click', toggleProblemPanel);

    // Output tabs
    document.querySelectorAll('.ws-out-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ws-out-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.out;
            document.getElementById('wsOutputPane').style.display = tab === 'output' ? '' : 'none';
            document.getElementById('wsTestPane').style.display = tab === 'testcases' ? '' : 'none';
        });
    });

    // Escape fullscreen
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const ide = document.querySelector('.ws-ide');
            if (ide && ide.classList.contains('fullscreen')) toggleFullscreen();
        }
    });
}

// ===== LOAD PROBLEM =====
function loadProblem(problem) {
    wsCurrentProblem = problem;

    // Render problem statement
    const body = document.getElementById('wsProblemBody');
    body.innerHTML = `
    <div class="ws-prob-title">${problem.title}</div>
    <div class="ws-prob-diff"><span class="diff-badge ${problem.diff}">${problem.diff}</span></div>
    <div class="ws-prob-desc">${problem.desc}</div>
    <div style="font-size:12px;font-weight:600;color:var(--ibm-blue-light);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Examples</div>
    ${problem.examples.map((ex, i) => `
      <div class="ws-prob-example">
        <div class="ws-prob-example-label">Example ${i + 1}</div>
        <div><span style="color:var(--text-muted)">Input: </span>${ex.input}</div>
        <div><span style="color:var(--text-muted)">Output: </span>${ex.output}</div>
        <div style="color:var(--text-muted);font-size:11px;margin-top:4px">${ex.explanation}</div>
      </div>
    `).join('')}
    <div class="ws-prob-constraints">
      <div class="ws-prob-constraints-title">📌 Tags</div>
      ${problem.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}
    </div>
  `;

    // Set editor template
    switchLanguage();

    // Reset output
    resetOutput();
}

// ===== SWITCH LANGUAGE =====
function switchLanguage() {
    const cfg = LANG_CONFIG[wsCurrentLang];
    wsEditor.setOption('mode', cfg.cm);
    const template = cfg.template.replace('{title}', wsCurrentProblem?.title || 'Problem');
    wsEditor.setValue(template);
    document.getElementById('wsFilename').textContent = `solution.${cfg.ext}`;
}

// ===== RUN CODE =====
async function runCode() {
    if (wsRunning) return;
    wsRunning = true;

    const runBtn = document.getElementById('wsRunBtn');
    runBtn.textContent = '⏳ Running...';
    runBtn.classList.add('running');

    const code = wsEditor.getValue();
    const stdin = document.getElementById('wsStdin').value;
    const cfg = LANG_CONFIG[wsCurrentLang];

    // Show output tab
    document.querySelectorAll('.ws-out-tab').forEach(b => b.classList.remove('active'));
    document.querySelector('.ws-out-tab[data-out="output"]').classList.add('active');
    document.getElementById('wsOutputPane').style.display = '';
    document.getElementById('wsTestPane').style.display = 'none';

    const placeholder = document.getElementById('wsOutputPlaceholder');
    const result = document.getElementById('wsOutputResult');
    placeholder.style.display = 'flex';
    placeholder.innerHTML = '<div style="font-size:1.5rem;margin-bottom:8px">⏳</div><div>Executing code...</div>';
    result.style.display = 'none';

    const startTime = Date.now();

    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: cfg.pistonLang,
                version: cfg.pistonVersion,
                files: [{ name: `solution.${cfg.ext}`, content: code }],
                stdin: stdin,
                run_timeout: 10000
            })
        });

        const data = await response.json();
        const elapsed = Date.now() - startTime;

        placeholder.style.display = 'none';
        result.style.display = '';

        const stdout = data.run?.stdout || '';
        const stderr = data.run?.stderr || '';
        const exitCode = data.run?.code ?? 0;
        const hasError = exitCode !== 0 || stderr;

        result.innerHTML = `
      <div class="ws-output-result">
        <div class="ws-output-status ${hasError ? 'error' : 'success'}">
          ${hasError ? '✗ Runtime Error' : '✓ Execution Successful'}
        </div>
        ${stdout ? `
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:1px">Output</div>
          <div class="ws-output-pre">${escapeHtmlWs(stdout)}</div>
        ` : ''}
        ${stderr ? `
          <div style="font-size:12px;color:var(--ibm-red);margin:10px 0 6px;text-transform:uppercase;letter-spacing:1px">Error</div>
          <div class="ws-output-pre" style="border-color:rgba(218,30,40,0.3);color:#ff8080">${escapeHtmlWs(stderr)}</div>
        ` : ''}
        ${!stdout && !stderr ? '<div class="ws-output-pre" style="color:var(--text-muted)">(No output)</div>' : ''}
        <div class="ws-output-meta">
          <span>⏱ ${elapsed}ms</span>
          <span>🔢 Exit code: ${exitCode}</span>
          <span>🌐 ${cfg.label}</span>
        </div>
      </div>
    `;

        // Also run test cases if Python (we can simulate)
        if (wsCurrentLang === 'python') {
            runTestCases(code, cfg, elapsed);
        }

    } catch (err) {
        placeholder.style.display = 'none';
        result.style.display = '';
        result.innerHTML = `
      <div class="ws-output-result">
        <div class="ws-output-status warning">⚠ Network Error</div>
        <div class="ws-output-pre" style="color:var(--ibm-yellow)">Could not connect to execution server.\n\nMake sure you are online.\n\nError: ${err.message}</div>
        <div class="ws-output-meta"><span>💡 Tip: The Piston API requires internet access</span></div>
      </div>
    `;
    } finally {
        wsRunning = false;
        runBtn.textContent = '▶ Run Code';
        runBtn.classList.remove('running');
    }
}

// ===== RUN TEST CASES =====
async function runTestCases(code, cfg, baseElapsed) {
    const problem = wsCurrentProblem;
    if (!problem || !problem.testCases) return;

    const container = document.getElementById('wsTestResults');
    container.innerHTML = '<div style="color:var(--text-muted);font-size:13px;margin-bottom:12px">Running test cases...</div>';

    const results = [];

    for (let i = 0; i < problem.testCases.length; i++) {
        const tc = problem.testCases[i];
        try {
            const resp = await fetch('https://emkc.org/api/v2/piston/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language: cfg.pistonLang,
                    version: cfg.pistonVersion,
                    files: [{ name: `solution.${cfg.ext}`, content: code }],
                    stdin: tc.input,
                    run_timeout: 5000
                })
            });
            const data = await resp.json();
            const actual = (data.run?.stdout || '').trim();
            const expected = tc.output.trim();
            results.push({ tc, actual, expected, passed: actual === expected, error: data.run?.stderr });
        } catch (e) {
            results.push({ tc, actual: 'Error', expected: tc.output, passed: false, error: e.message });
        }
    }

    const passCount = results.filter(r => r.passed).length;
    container.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;padding:10px 14px;border-radius:8px;background:${passCount === results.length ? 'rgba(36,161,72,0.1)' : 'rgba(218,30,40,0.1)'};border:1px solid ${passCount === results.length ? 'rgba(36,161,72,0.3)' : 'rgba(218,30,40,0.3)'}">
      <span style="font-size:1.2rem">${passCount === results.length ? '🎉' : '❌'}</span>
      <span style="font-weight:700;color:${passCount === results.length ? 'var(--ibm-green)' : 'var(--ibm-red)'}">${passCount}/${results.length} Test Cases Passed</span>
    </div>
    ${results.map((r, i) => `
      <div class="ws-tc-item">
        <div class="ws-tc-header ${r.passed ? 'ws-tc-pass' : 'ws-tc-fail'}">
          ${r.passed ? '✓' : '✗'} Test Case ${i + 1}
        </div>
        <div class="ws-tc-row"><span class="ws-tc-key">Input:</span><span class="ws-tc-val">${escapeHtmlWs(r.tc.input)}</span></div>
        <div class="ws-tc-row"><span class="ws-tc-key">Expected:</span><span class="ws-tc-val" style="color:var(--ibm-green)">${escapeHtmlWs(r.expected)}</span></div>
        <div class="ws-tc-row"><span class="ws-tc-key">Got:</span><span class="ws-tc-val" style="color:${r.passed ? 'var(--ibm-green)' : 'var(--ibm-red)'}">${escapeHtmlWs(r.actual || r.error || 'No output')}</span></div>
      </div>
    `).join('')}
  `;

    // Switch to test cases tab
    document.querySelectorAll('.ws-out-tab').forEach(b => b.classList.remove('active'));
    document.querySelector('.ws-out-tab[data-out="testcases"]').classList.add('active');
    document.getElementById('wsOutputPane').style.display = 'none';
    document.getElementById('wsTestPane').style.display = '';
}

// ===== HELPERS =====
function escapeHtmlWs(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function resetOutput() {
    const placeholder = document.getElementById('wsOutputPlaceholder');
    const result = document.getElementById('wsOutputResult');
    placeholder.style.display = 'flex';
    placeholder.innerHTML = '<div style="font-size:2rem;margin-bottom:12px">▶</div><div>Click <strong>Run Code</strong> to see output</div>';
    result.style.display = 'none';
    document.getElementById('wsTestResults').innerHTML = '';
}

function resetCode() {
    if (confirm('Reset code to template? Your changes will be lost.')) {
        switchLanguage();
        resetOutput();
    }
}

function copyCode() {
    const code = wsEditor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('wsCopyBtn');
        btn.textContent = '✓';
        btn.style.color = 'var(--ibm-green)';
        setTimeout(() => { btn.textContent = '📋'; btn.style.color = ''; }, 1500);
    });
}

function toggleFullscreen() {
    const ide = document.querySelector('.ws-ide');
    const btn = document.getElementById('wsFullscreenBtn');
    ide.classList.toggle('fullscreen');
    btn.textContent = ide.classList.contains('fullscreen') ? '✕' : '⛶';
    // Refresh editor layout
    setTimeout(() => wsEditor.refresh(), 100);
}

function toggleProblemPanel() {
    const panel = document.getElementById('wsProblemPanel');
    const btn = document.getElementById('wsProblemToggle');
    const ide = document.querySelector('.ws-ide');
    wsProblemCollapsed = !wsProblemCollapsed;
    panel.classList.toggle('collapsed', wsProblemCollapsed);
    ide.classList.toggle('problem-collapsed', wsProblemCollapsed);
    btn.textContent = wsProblemCollapsed ? '▶' : '◀';
    setTimeout(() => wsEditor.refresh(), 300);
}

// ===== OPEN PROBLEM IN WORKSPACE FROM CODING CARDS =====
function openInWorkspace(problemId) {
    const p = CODING_PROBLEMS.find(x => x.id === problemId);
    if (!p) return;
    // Update dropdown
    document.getElementById('wsProblemSelect').value = p.id;
    loadProblem(p);
    // Scroll to workspace
    document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });
}

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    // Wait for CodeMirror to load
    if (typeof CodeMirror !== 'undefined') {
        initWorkspace();
    } else {
        // Retry after scripts load
        window.addEventListener('load', initWorkspace);
    }
});
