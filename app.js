// ===== IBM INTERVIEW PREP – APP LOGIC =====

// ===== SIDEBAR TOGGLE =====
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ===== ACTIVE NAV LINK =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => observer.observe(s));

// ===== PROGRESS TRACKER =====
let completedItems = 0;
const totalItems = 20;
function updateProgress(delta) {
  completedItems = Math.min(totalItems, Math.max(0, completedItems + delta));
  const pct = Math.round((completedItems / totalItems) * 100);
  document.getElementById('overallProgress').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '%';
}

// ===== RENDER ROADMAP =====
function renderRoadmap() {
  const container = document.getElementById('roadmapTimeline');
  container.innerHTML = ROADMAP.map(phase => `
    <div class="roadmap-phase">
      <div class="phase-header">
        <span class="phase-num">Phase ${phase.phase}</span>
        <span class="phase-title">${phase.title}</span>
        <span class="phase-duration">${phase.duration}</span>
      </div>
      <div class="phase-cards">
        ${phase.cards.map(c => `
          <div class="phase-card">
            <div class="phase-card-icon">${c.icon}</div>
            <div class="phase-card-title">${c.title}</div>
            <div class="phase-card-desc">${c.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== RENDER OA QUESTIONS =====
let currentOATab = 'aptitude';
function renderOA(tab) {
  currentOATab = tab;
  const questions = OA_QUESTIONS[tab];
  const container = document.getElementById('oaContent');
  container.innerHTML = `<div class="qa-list">${questions.map((item, i) => `
    <div class="qa-item" id="oa-${tab}-${i}">
      <div class="qa-question" onclick="toggleQA('oa-${tab}-${i}')">
        <span class="q-num">Q${i + 1}</span>
        <span class="q-text">${item.q}</span>
        <span class="qa-toggle">+</span>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-inner">💡 <strong>Answer:</strong> ${item.a}</div>
      </div>
    </div>
  `).join('')}</div>`;
}

// ===== RENDER TECHNICAL Q&A =====
let currentTechTab = 'ds';
function renderTech(tab) {
  currentTechTab = tab;
  const questions = TECH_QUESTIONS[tab];
  const container = document.getElementById('techContent');
  container.innerHTML = `<div class="qa-list">${questions.map((item, i) => `
    <div class="qa-item" id="tech-${tab}-${i}">
      <div class="qa-question" onclick="toggleQA('tech-${tab}-${i}')">
        <span class="q-num">Q${i + 1}</span>
        <span class="q-text">${item.q}</span>
        <span class="qa-toggle">+</span>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('')}</div>`;
}

// ===== TOGGLE Q&A =====
function toggleQA(id) {
  const item = document.getElementById(id);
  const wasOpen = item.classList.contains('open');
  // Close all in same list
  item.closest('.qa-list').querySelectorAll('.qa-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) {
    item.classList.add('open');
    updateProgress(1);
  }
}

// ===== RENDER CODING GRID =====
let currentDiff = 'all';
function renderCodingGrid(diff) {
  currentDiff = diff;
  const filtered = diff === 'all' ? CODING_PROBLEMS : CODING_PROBLEMS.filter(p => p.diff === diff);
  const container = document.getElementById('codingGrid');
  container.innerHTML = filtered.map(p => `
    <div class="coding-card" data-diff="${p.diff}" onclick="openCodingModal(${p.id})">
      <div class="card-top">
        <span class="card-num">#${String(p.id).padStart(2, '0')}</span>
        <span class="diff-badge ${p.diff}">${p.diff}</span>
      </div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ===== CODING MODAL =====
let _modalLang = 'python'; // active language tab in modal

function openCodingModal(id) {
  const p = CODING_PROBLEMS.find(x => x.id === id);
  if (!p) return;
  _modalLang = 'python';
  const modal = document.getElementById('codingModal');
  document.getElementById('modalContent').innerHTML = buildModalHTML(p);
  modal.classList.add('open');
  updateProgress(1);
}

function buildModalHTML(p) {
  const langLabels = { python: '🐍 Python', java: '☕ Java', cpp: '⚙️ C++', c: '🔵 C' };
  const hasSolutions = p.solutions && typeof p.solutions === 'object';
  const langs = hasSolutions ? Object.keys(p.solutions) : ['python'];

  const tabsHTML = langs.map(lang => `
    <button class="sol-lang-btn ${lang === _modalLang ? 'active' : ''}"
      onclick="switchSolLang(${p.id}, '${lang}')">${langLabels[lang] || lang}</button>
  `).join('');

  const codeToShow = hasSolutions
    ? (p.solutions[_modalLang] || p.solutions['python'] || '')
    : (p.solution || '');

  return `
    <div class="modal-problem-title">${p.title}</div>
    <div class="modal-meta">
      <span class="diff-badge ${p.diff}">${p.diff}</span>
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="modal-section-title">Problem Description</div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-section-title">Examples</div>
    ${p.examples.map((ex, i) => `
      <div class="test-case">
        <div class="test-case-label">Example ${i + 1}</div>
        <div class="test-case-row"><span class="test-case-key">Input:</span><span class="test-case-val">${ex.input}</span></div>
        <div class="test-case-row"><span class="test-case-key">Output:</span><span class="test-case-val">${ex.output}</span></div>
        <div class="test-case-row"><span class="test-case-key">Note:</span><span class="test-case-val">${ex.explanation}</span></div>
      </div>
    `).join('')}
    <div class="modal-section-title">Test Cases</div>
    <div class="test-cases">
      ${p.testCases.map((tc, i) => `
        <div class="test-case">
          <div class="test-case-label">Test Case ${i + 1}</div>
          <div class="test-case-row"><span class="test-case-key">Input:</span><span class="test-case-val">${tc.input}</span></div>
          <div class="test-case-row"><span class="test-case-key">Expected:</span><span class="test-case-val">${tc.output}</span></div>
        </div>
      `).join('')}
    </div>
    <div class="modal-section-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
      Solution
      <div class="sol-lang-tabs">${tabsHTML}</div>
    </div>
    <div class="code-block" id="solCodeBlock"><pre>${escapeHtml(codeToShow)}</pre></div>
    <div class="modal-section-title">Complexity Analysis</div>
    <div class="complexity-grid">
      <div class="complexity-item"><div class="c-label">Time Complexity</div><div class="c-val">${p.timeComplexity}</div></div>
      <div class="complexity-item"><div class="c-label">Space Complexity</div><div class="c-val">${p.spaceComplexity}</div></div>
    </div>
  `;
}

function switchSolLang(id, lang) {
  _modalLang = lang;
  const p = CODING_PROBLEMS.find(x => x.id === id);
  if (!p) return;
  // Update active tab button
  document.querySelectorAll('.sol-lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sol-lang-btn').forEach(b => {
    if (b.textContent.toLowerCase().includes(lang === 'cpp' ? 'c++' : lang)) b.classList.add('active');
  });
  // Update code block
  const code = p.solutions ? (p.solutions[lang] || '') : (p.solution || '');
  const block = document.getElementById('solCodeBlock');
  if (block) block.innerHTML = `<pre>${escapeHtml(code)}</pre>`;
}


function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('codingModal').classList.remove('open');
});
document.getElementById('codingModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// ===== RENDER MOCK TEST HUB =====
function renderMockHub() {
  const container = document.getElementById('mockTestHub');
  container.innerHTML = `<div class="mock-cards">${MOCK_TESTS.map(t => `
    <div class="mock-card">
      <div class="mock-card-icon">${t.icon}</div>
      <div class="mock-card-title">${t.title}</div>
      <div class="mock-card-desc">${t.desc}</div>
      <div class="mock-meta">
        <span class="mock-meta-item">❓ ${t.questions} Questions</span>
        <span class="mock-meta-item">⏱️ ${t.time} mins</span>
        <span class="mock-meta-item">📚 ${t.sections}</span>
      </div>
      <button class="btn-primary" onclick="startMockTest(${t.id})">▶ Start Test</button>
    </div>
  `).join('')}</div>`;
}

// ===== MOCK TEST ENGINE =====
let mockTimer = null;
let mockState = {};

function startMockTest(id) {
  const test = MOCK_TESTS.find(t => t.id === id);
  if (!test) return;
  mockState = {
    test,
    current: 0,
    answers: new Array(test.questions_data.length).fill(null),
    timeLeft: test.time * 60,
    submitted: false
  };
  renderMockEngine();
  document.getElementById('mockModal').classList.add('open');
  startTimer();
}

function startTimer() {
  clearInterval(mockTimer);
  mockTimer = setInterval(() => {
    mockState.timeLeft--;
    updateTimerDisplay();
    if (mockState.timeLeft <= 0) {
      clearInterval(mockTimer);
      submitMock();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.querySelector('.timer-display');
  if (!el) return;
  const m = Math.floor(mockState.timeLeft / 60);
  const s = mockState.timeLeft % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  if (mockState.timeLeft < 60) el.classList.add('warning');
}

function renderMockEngine() {
  const { test, current, answers } = mockState;
  const q = test.questions_data[current];
  const total = test.questions_data.length;
  const pct = ((current) / total) * 100;

  document.getElementById('mockModalContent').innerHTML = `
    <div class="mock-engine-header">
      <div class="mock-engine-title">${test.title}</div>
      <div class="timer-display">--:--</div>
    </div>
    <div class="mock-progress-bar"><div class="mock-progress-fill" style="width:${pct}%"></div></div>
    <div class="mock-question-card">
      <div class="mock-q-num">Question ${current + 1} of ${total}</div>
      <div class="mock-q-text">${q.q}</div>
      <div class="mock-options">
        ${q.options.map((opt, i) => `
          <div class="mock-option ${answers[current] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
            <span class="option-letter">${'ABCD'[i]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="mock-nav">
      <button class="btn-secondary" onclick="mockNav(-1)" ${current === 0 ? 'disabled style="opacity:0.4"' : ''}>← Previous</button>
      <span style="color:var(--text-muted);font-size:13px">${answers.filter(a => a !== null).length}/${total} answered</span>
      ${current < total - 1
      ? `<button class="btn-primary" style="width:auto" onclick="mockNav(1)">Next →</button>`
      : `<button class="btn-primary" style="width:auto" onclick="submitMock()">Submit Test ✓</button>`
    }
    </div>
    <div style="margin-top:16px;text-align:center">
      <button class="btn-danger" onclick="endMock()">✕ End Test</button>
    </div>
  `;
  updateTimerDisplay();
}

function selectAnswer(optIdx) {
  if (mockState.submitted) return;
  mockState.answers[mockState.current] = optIdx;
  renderMockEngine();
}

function mockNav(dir) {
  const total = mockState.test.questions_data.length;
  mockState.current = Math.max(0, Math.min(total - 1, mockState.current + dir));
  renderMockEngine();
}

function submitMock() {
  clearInterval(mockTimer);
  mockState.submitted = true;
  const { test, answers } = mockState;
  const qs = test.questions_data;
  let correct = 0;
  qs.forEach((q, i) => { if (answers[i] === q.ans) correct++; });
  const total = qs.length;
  const pct = Math.round((correct / total) * 100);
  const pctCss = `${pct * 3.6}deg`;

  document.getElementById('mockModalContent').innerHTML = `
    <div class="result-screen">
      <div class="result-score-circle" style="--pct: ${pctCss}">
        <div class="result-score-text">${pct}%</div>
      </div>
      <div class="result-title">${pct >= 70 ? '🎉 Great Job!' : pct >= 50 ? '👍 Good Effort!' : '📚 Keep Practicing!'}</div>
      <div class="result-subtitle">${test.title} — Completed</div>
      <div class="result-stats">
        <div class="result-stat"><div class="result-stat-num" style="color:var(--ibm-green)">${correct}</div><div class="result-stat-label">Correct</div></div>
        <div class="result-stat"><div class="result-stat-num" style="color:var(--ibm-red)">${total - correct}</div><div class="result-stat-label">Wrong</div></div>
        <div class="result-stat"><div class="result-stat-num" style="color:var(--ibm-yellow)">${answers.filter(a => a === null).length}</div><div class="result-stat-label">Skipped</div></div>
      </div>
      <div class="modal-section-title" style="text-align:left">Review Answers</div>
      <div class="qa-list">
        ${qs.map((q, i) => `
          <div class="qa-item" id="review-${i}">
            <div class="qa-question" onclick="toggleQA('review-${i}')">
              <span class="q-num" style="background:${answers[i] === q.ans ? 'rgba(36,161,72,0.2)' : 'rgba(218,30,40,0.2)'}; color:${answers[i] === q.ans ? 'var(--ibm-green)' : 'var(--ibm-red)'}">${answers[i] === q.ans ? '✓' : '✗'}</span>
              <span class="q-text">${q.q}</span>
              <span class="qa-toggle">+</span>
            </div>
            <div class="qa-answer">
              <div class="qa-answer-inner">
                <strong>Your answer:</strong> ${answers[i] !== null ? q.options[answers[i]] : 'Skipped'}<br>
                <strong>Correct answer:</strong> <span style="color:var(--ibm-green)">${q.options[q.ans]}</span><br>
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="btn-primary" style="margin-top:24px" onclick="endMock()">Close</button>
    </div>
  `;
  updateProgress(3);
}

function endMock() {
  clearInterval(mockTimer);
  document.getElementById('mockModal').classList.remove('open');
}

document.getElementById('mockModalClose').addEventListener('click', endMock);
document.getElementById('mockModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) endMock();
});

// ===== RENDER SOLUTIONS =====
function renderSolutions() {
  const container = document.getElementById('solutionsContent');
  container.innerHTML = `<div class="solutions-grid">${CODING_PROBLEMS.map(p => `
    <div class="solution-card" onclick="openCodingModal(${p.id})" style="cursor:pointer">
      <div class="card-top" style="margin-bottom:8px">
        <div class="solution-card-title">${p.title}</div>
        <span class="diff-badge ${p.diff}">${p.diff}</span>
      </div>
      <div class="solution-approach">Approach: ${p.approach}</div>
      <div class="solution-complexity">
        <span class="complexity-badge time">⏱ ${p.timeComplexity}</span>
        <span class="complexity-badge space">💾 ${p.spaceComplexity}</span>
      </div>
      <div class="solution-card-desc">${p.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</div>
    </div>
  `).join('')}</div>`;
}

// ===== TAB HANDLERS =====
document.querySelectorAll('#oa .tabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#oa .tabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderOA(btn.dataset.tab);
  });
});

document.querySelectorAll('#technical .tabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#technical .tabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTech(btn.dataset.tab);
  });
});

// ===== DIFFICULTY FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCodingGrid(btn.dataset.diff);
  });
});

// ===== INIT =====
renderRoadmap();
renderOA('aptitude');
renderTech('ds');
renderCodingGrid('all');
renderMockHub();
renderSolutions();
