// ===== IBM INTERVIEW PREP – DATA =====

const ROADMAP = [
  {
    phase: "01", title: "Foundation (Week 1–2)", duration: "2 Weeks",
    cards: [
      { icon: "📐", title: "Data Structures", desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps" },
      { icon: "⚙️", title: "Algorithms", desc: "Sorting, Searching, Recursion, Dynamic Programming, Greedy" },
      { icon: "☕", title: "Java / Python", desc: "OOP concepts, Collections, Exception Handling, Generics" },
      { icon: "🗄️", title: "DBMS & SQL", desc: "Joins, Normalization, Indexing, Transactions, ACID" }
    ]
  },
  {
    phase: "02", title: "Online Assessment Prep (Week 3)", duration: "1 Week",
    cards: [
      { icon: "🔢", title: "Quantitative Aptitude", desc: "Number systems, Percentages, Profit/Loss, Time-Work, Ratios" },
      { icon: "🧠", title: "Logical Reasoning", desc: "Syllogisms, Blood relations, Seating arrangements, Puzzles" },
      { icon: "📖", title: "Verbal Ability", desc: "Reading comprehension, Grammar, Sentence correction, Vocabulary" },
      { icon: "⏱️", title: "Speed & Accuracy", desc: "Practice timed tests, eliminate wrong answers strategically" }
    ]
  },
  {
    phase: "03", title: "Coding Practice (Week 4–5)", duration: "2 Weeks",
    cards: [
      { icon: "💻", title: "LeetCode Easy/Medium", desc: "Arrays, Strings, Two Pointers, Sliding Window, HashMap" },
      { icon: "🔁", title: "Recursion & DP", desc: "Fibonacci, Knapsack, LCS, Matrix Chain, Coin Change" },
      { icon: "🌲", title: "Trees & Graphs", desc: "BFS, DFS, Dijkstra, Topological Sort, Union-Find" },
      { icon: "📝", title: "IBM Past Problems", desc: "Practice IBM-specific coding patterns from previous years" }
    ]
  },
  {
    phase: "04", title: "Technical Interview Prep (Week 6)", duration: "1 Week",
    cards: [
      { icon: "🖥️", title: "OS Concepts", desc: "Process, Threads, Deadlock, Memory Management, Scheduling" },
      { icon: "🌐", title: "Computer Networks", desc: "TCP/IP, HTTP, DNS, OSI Model, Sockets" },
      { icon: "🏗️", title: "System Design Basics", desc: "Scalability, Load Balancing, Caching, Microservices" },
      { icon: "🔐", title: "Security Basics", desc: "Encryption, Authentication, IBM Security products overview" }
    ]
  },
  {
    phase: "05", title: "Mock Tests & Review (Week 7)", duration: "1 Week",
    cards: [
      { icon: "🎯", title: "Full Mock Tests", desc: "Simulate complete IBM OA under timed conditions" },
      { icon: "🔍", title: "Weak Area Review", desc: "Identify gaps from mock tests and revise targeted topics" },
      { icon: "🗣️", title: "HR Interview Prep", desc: "Tell me about yourself, IBM values, behavioral questions" },
      { icon: "✅", title: "Final Revision", desc: "Quick revision of all key concepts, formulas, and patterns" }
    ]
  }
];

const OA_QUESTIONS = {
  aptitude: [
    { q: "A train 240m long passes a pole in 24 seconds. What is the speed of the train?", a: "Speed = Distance/Time = 240/24 = 10 m/s = 36 km/h. The train's speed is <strong>36 km/h</strong>." },
    { q: "If 20% of a number is 80, what is 35% of that number?", a: "Number = 80/0.20 = 400. 35% of 400 = <strong>140</strong>." },
    { q: "A can do a work in 15 days, B in 20 days. How long will they take together?", a: "Combined rate = 1/15 + 1/20 = 4/60 + 3/60 = 7/60. Time = 60/7 ≈ <strong>8.57 days</strong>." },
    { q: "The ratio of ages of A and B is 3:5. After 6 years, the ratio becomes 2:3. Find A's current age.", a: "3x+6 / 5x+6 = 2/3 → 9x+18 = 10x+12 → x=6. A's age = 3×6 = <strong>18 years</strong>." },
    { q: "A shopkeeper sells an item at 20% profit. If the cost price is ₹500, find the selling price.", a: "SP = CP × (1 + profit%) = 500 × 1.20 = <strong>₹600</strong>." },
    { q: "Find the compound interest on ₹10,000 at 10% per annum for 2 years.", a: "CI = P(1+r)^n - P = 10000(1.1)² - 10000 = 12100 - 10000 = <strong>₹2,100</strong>." },
    { q: "Two pipes fill a tank in 12 and 15 hours. A drain empties it in 20 hours. How long to fill when all open?", a: "Net rate = 1/12 + 1/15 - 1/20 = 5/60 + 4/60 - 3/60 = 6/60 = 1/10. Time = <strong>10 hours</strong>." },
    { q: "If x : y = 3 : 4 and y : z = 6 : 7, find x : y : z.", a: "x:y = 3:4, y:z = 6:7. Make y common: x:y = 9:12, y:z = 12:14. So x:y:z = <strong>9:12:14</strong>." }
  ],
  logical: [
    { q: "All dogs are animals. Some animals are cats. Conclusion: Some dogs are cats. Valid?", a: "<strong>Invalid.</strong> The premise only says some animals are cats, not that those animals are dogs. The conclusion doesn't follow logically." },
    { q: "A is B's sister. B is C's brother. C is D's father. How is A related to D?", a: "A is B's sister → A is female. B is C's brother → B is male. C is D's father. So A is C's aunt → A is D's <strong>Grand Aunt</strong> (or Aunt depending on interpretation: A is C's aunt, C is D's father, so A is D's <strong>Aunt</strong>)." },
    { q: "Find the next number: 2, 6, 12, 20, 30, ?", a: "Differences: 4, 6, 8, 10, 12. Pattern: n(n+1). Next = 6×7 = <strong>42</strong>." },
    { q: "In a row, A is 7th from left, B is 9th from right. If they swap, A is 11th from left. How many people?", a: "After swap, A is 11th from left (was B's position). B was 9th from right = (n-9+1)th from left = 11. So n = 11+9-1 = <strong>19</strong>." },
    { q: "If COMPUTER is coded as RFUVQNPC, what is the code for PRINTER?", a: "Each letter is shifted by -1 in reverse. PRINTER → <strong>QSJOUFQ</strong> (each letter +1 in ASCII)." },
    { q: "A clock shows 3:15. What is the angle between the hour and minute hands?", a: "Minute hand at 90°. Hour hand at 3×30 + 15×0.5 = 90 + 7.5 = 97.5°. Angle = 97.5 - 90 = <strong>7.5°</strong>." },
    { q: "5 people sit in a circle. In how many ways can they be arranged?", a: "Circular permutations = (n-1)! = (5-1)! = 4! = <strong>24 ways</strong>." },
    { q: "A is taller than B. C is shorter than D. D is shorter than B. Who is the shortest?", a: "Order: A > B > D > C. <strong>C is the shortest</strong>." }
  ],
  english: [
    { q: "Choose the correct sentence: (A) He don't know the answer. (B) He doesn't know the answer.", a: "<strong>(B) He doesn't know the answer.</strong> With third-person singular subjects, use 'doesn't' not 'don't'." },
    { q: "Fill in the blank: The committee ___ divided on the issue. (is/are)", a: "<strong>is</strong> — In American English, collective nouns like 'committee' take singular verbs." },
    { q: "Identify the error: 'One of the students have submitted their assignment.'", a: "Error: 'have' should be <strong>'has'</strong>. 'One of' takes a singular verb. Correct: 'One of the students has submitted their assignment.'" },
    { q: "Choose the synonym of 'Ephemeral': (A) Eternal (B) Transient (C) Permanent (D) Robust", a: "<strong>(B) Transient</strong> — Ephemeral means lasting for a very short time." },
    { q: "Choose the antonym of 'Verbose': (A) Wordy (B) Concise (C) Elaborate (D) Lengthy", a: "<strong>(B) Concise</strong> — Verbose means using too many words; concise is its opposite." },
    { q: "Rearrange: 'always / I / coffee / morning / drink / in / the' to form a correct sentence.", a: "<strong>I always drink coffee in the morning.</strong>" },
    { q: "Reading Comprehension: 'IBM was founded in 1911 as CTR. It was renamed IBM in 1924.' Q: When was IBM renamed?", a: "<strong>1924.</strong> IBM was renamed from Computing-Tabulating-Recording Company (CTR) to International Business Machines (IBM) in 1924." },
    { q: "Identify the figure of speech: 'The wind whispered through the trees.'", a: "<strong>Personification</strong> — The wind is given the human quality of whispering." }
  ]
};

const TECH_QUESTIONS = {
  ds: [
    { q: "What is the difference between Array and Linked List?", a: "Arrays store elements in contiguous memory with O(1) random access but O(n) insertion/deletion. Linked Lists use nodes with pointers, offering O(1) insertion/deletion at head but O(n) access. Arrays are cache-friendly; Linked Lists are not." },
    { q: "Explain the difference between Stack and Queue.", a: "Stack follows LIFO (Last In First Out) — push/pop from top. Queue follows FIFO (First In First Out) — enqueue at rear, dequeue from front. Stack is used in function calls, undo operations. Queue is used in BFS, task scheduling." },
    { q: "What is a Binary Search Tree (BST)? What are its properties?", a: "A BST is a binary tree where: left child < parent < right child. Operations: Search O(log n) avg, O(n) worst. Insert/Delete O(log n) avg. Inorder traversal gives sorted sequence. Balanced BSTs (AVL, Red-Black) guarantee O(log n)." },
    { q: "What is a Hash Table? How does collision resolution work?", a: "A Hash Table maps keys to values using a hash function. Collisions resolved by: <br><strong>Chaining</strong>: Each bucket holds a linked list. <br><strong>Open Addressing</strong>: Linear probing, quadratic probing, double hashing. Average O(1) for insert/search/delete." },
    { q: "Explain Heap data structure and its applications.", a: "A Heap is a complete binary tree satisfying heap property. Min-Heap: parent ≤ children. Max-Heap: parent ≥ children. Applications: Priority Queue, Heap Sort (O(n log n)), Dijkstra's algorithm, finding K largest/smallest elements." },
    { q: "What is the difference between BFS and DFS?", a: "BFS (Breadth-First Search): Uses queue, explores level by level, finds shortest path in unweighted graphs, O(V+E). DFS (Depth-First Search): Uses stack/recursion, explores depth-first, used for cycle detection, topological sort, O(V+E)." },
    { q: "What is Dynamic Programming? Give an example.", a: "DP solves problems by breaking them into overlapping subproblems and storing results (memoization/tabulation). Example: Fibonacci — instead of O(2^n) recursion, DP gives O(n). Knapsack, LCS, Coin Change are classic DP problems." },
    { q: "Explain AVL Tree and why it's better than a regular BST.", a: "AVL Tree is a self-balancing BST where height difference (balance factor) between left and right subtrees is at most 1. Rotations (LL, RR, LR, RL) maintain balance. Guarantees O(log n) for all operations unlike BST's O(n) worst case." }
  ],
  algo: [
    { q: "What is the time complexity of QuickSort? When does it degrade?", a: "QuickSort: Average O(n log n), Best O(n log n), Worst O(n²). Degrades to O(n²) when pivot is always the smallest/largest element (sorted/reverse-sorted array). Solution: Random pivot or median-of-three pivot selection." },
    { q: "Explain Merge Sort and why it's preferred for linked lists.", a: "Merge Sort: Divide array into halves, sort each, merge. Always O(n log n). Stable sort. Preferred for linked lists because merging doesn't require random access — only pointer manipulation needed, unlike arrays." },
    { q: "What is Binary Search? What are its prerequisites?", a: "Binary Search finds element in sorted array in O(log n) by repeatedly halving search space. Prerequisites: Array must be sorted. Works on any monotonic function. Variants: lower_bound, upper_bound, search in rotated array." },
    { q: "Explain Dijkstra's algorithm.", a: "Dijkstra finds shortest path from source to all vertices in weighted graph (non-negative weights). Uses Min-Heap (Priority Queue). Time: O((V+E) log V). Doesn't work with negative weights — use Bellman-Ford instead." },
    { q: "What is the difference between Greedy and Dynamic Programming?", a: "Greedy makes locally optimal choice at each step, doesn't reconsider. DP considers all possibilities and stores results. Greedy: O(n log n) typically, simpler. DP: More powerful, handles overlapping subproblems. Greedy works for MST, Huffman; DP for Knapsack, LCS." },
    { q: "Explain Two Pointer technique with an example.", a: "Two Pointers use two indices moving toward each other or in same direction. Example: Find pair with given sum in sorted array — left=0, right=n-1, if sum<target left++, if sum>target right--. O(n) vs O(n²) brute force." }
  ],
  os: [
    { q: "What is the difference between Process and Thread?", a: "Process: Independent program in execution with its own memory space. Thread: Lightweight unit within a process, shares memory. Process creation is expensive; threads are cheaper. Threads communicate via shared memory; processes via IPC (pipes, sockets)." },
    { q: "What is Deadlock? What are the four necessary conditions?", a: "Deadlock: Processes wait indefinitely for resources held by each other. Four conditions (Coffman): <br>1. Mutual Exclusion <br>2. Hold and Wait <br>3. No Preemption <br>4. Circular Wait. Prevention: Break any one condition." },
    { q: "Explain Virtual Memory and Paging.", a: "Virtual Memory allows processes to use more memory than physically available by using disk as extension. Paging divides memory into fixed-size pages. Page Table maps virtual to physical addresses. Page Fault occurs when page not in RAM — OS loads it from disk." },
    { q: "What is the difference between TCP and UDP?", a: "TCP: Connection-oriented, reliable, ordered delivery, flow control, congestion control. Slower. Used for HTTP, FTP, email. UDP: Connectionless, unreliable, no ordering, faster. Used for DNS, video streaming, gaming, VoIP." },
    { q: "Explain CPU Scheduling algorithms.", a: "FCFS: First Come First Served — simple, convoy effect. SJF: Shortest Job First — optimal avg wait, starvation. Round Robin: Time quantum, fair, good for time-sharing. Priority: Higher priority first, starvation possible. MLFQ: Multi-level feedback queue — adaptive." },
    { q: "What is a Semaphore? How does it differ from Mutex?", a: "Semaphore: Signaling mechanism, can be binary (0/1) or counting. Used for synchronization. Mutex: Mutual exclusion lock, only owner can release. Mutex is for mutual exclusion; Semaphore is for signaling. Mutex has ownership; Semaphore doesn't." }
  ],
  dbms: [
    { q: "What are ACID properties in DBMS?", a: "<strong>Atomicity</strong>: Transaction is all-or-nothing. <strong>Consistency</strong>: DB moves from one valid state to another. <strong>Isolation</strong>: Concurrent transactions don't interfere. <strong>Durability</strong>: Committed transactions persist even after failures." },
    { q: "Explain the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.", a: "INNER JOIN: Only matching rows from both tables. LEFT JOIN: All rows from left + matching from right (NULL if no match). RIGHT JOIN: All rows from right + matching from left. FULL JOIN: All rows from both tables (NULL where no match)." },
    { q: "What is Normalization? Explain 1NF, 2NF, 3NF.", a: "Normalization reduces redundancy. 1NF: Atomic values, no repeating groups. 2NF: 1NF + no partial dependency (non-key attributes depend on full PK). 3NF: 2NF + no transitive dependency (non-key attributes don't depend on other non-key attributes)." },
    { q: "What is an Index? What are its types?", a: "Index speeds up data retrieval. Types: Clustered (data physically ordered, one per table), Non-clustered (separate structure, multiple allowed), Composite (multiple columns), Unique, Full-text. Trade-off: Faster reads, slower writes, extra storage." },
    { q: "Write a SQL query to find the second highest salary.", a: "<pre>SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- OR using DENSE_RANK:\nSELECT salary FROM (\n  SELECT salary, DENSE_RANK() OVER\n  (ORDER BY salary DESC) AS rnk\n  FROM employees\n) t WHERE rnk = 2;</pre>" },
    { q: "What is a Transaction? Explain COMMIT and ROLLBACK.", a: "Transaction: Sequence of operations treated as a unit. COMMIT: Permanently saves changes. ROLLBACK: Undoes changes since last COMMIT. SAVEPOINT: Creates intermediate checkpoint. Transactions ensure ACID properties." }
  ],
  oops: [
    { q: "What are the four pillars of OOP?", a: "<strong>Encapsulation</strong>: Bundling data and methods, hiding internal state. <strong>Abstraction</strong>: Hiding complexity, showing only essentials. <strong>Inheritance</strong>: Child class inherits from parent. <strong>Polymorphism</strong>: Same interface, different implementations (overloading/overriding)." },
    { q: "What is the difference between Abstract Class and Interface in Java?", a: "Abstract Class: Can have concrete methods, constructors, instance variables. Single inheritance. Interface: All methods abstract (Java 8+ allows default/static). Multiple implementation. Use abstract class for 'is-a', interface for 'can-do' relationships." },
    { q: "Explain method Overloading vs Overriding.", a: "Overloading: Same method name, different parameters in same class. Compile-time polymorphism. Overriding: Child class redefines parent's method with same signature. Runtime polymorphism. @Override annotation used. Overriding requires inheritance." },
    { q: "What is the difference between == and .equals() in Java?", a: "== compares references (memory addresses) for objects, values for primitives. .equals() compares content/values. For String: 'abc' == 'abc' may be true (string pool) but new String('abc') == new String('abc') is false. Always use .equals() for object comparison." },
    { q: "What is a Singleton Design Pattern?", a: "Singleton ensures only one instance of a class exists. Implementation: private constructor, static instance, public getInstance() method. Thread-safe version uses synchronized or double-checked locking. Used for: Logger, Config, DB Connection pool." },
    { q: "Explain the concept of Generics in Java.", a: "Generics provide type safety at compile time. Example: List<String> only accepts Strings. Eliminates ClassCastException. Generic methods: <T> T method(T param). Wildcards: ? extends T (upper bound), ? super T (lower bound). Type erasure at runtime." }
  ]
};

const CODING_PROBLEMS = [
  {
    id: 1, title: "Two Sum", diff: "easy",
    desc: "Given an array of integers and a target, return indices of two numbers that add up to target.",
    tags: ["Array", "HashMap"],
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] = 2 + 7 = 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "nums[1] + nums[2] = 2 + 4 = 6" }
    ],
    testCases: [
      { input: "[2,7,11,15], target=9", output: "[0,1]" },
      { input: "[3,2,4], target=6", output: "[1,2]" },
      { input: "[3,3], target=6", output: "[0,1]" }
    ],
    approach: "HashMap Lookup",
    timeComplexity: "O(n)", spaceComplexity: "O(n)",
    solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`
  },
  {
    id: 2, title: "Reverse a Linked List", diff: "easy",
    desc: "Reverse a singly linked list iteratively and return the new head.",
    tags: ["Linked List", "Pointers"],
    examples: [
      { input: "1 -> 2 -> 3 -> 4 -> 5", output: "5 -> 4 -> 3 -> 2 -> 1", explanation: "Reverse all pointers" },
      { input: "1 -> 2", output: "2 -> 1", explanation: "Swap the two nodes" }
    ],
    testCases: [
      { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "[1,2]", output: "[2,1]" },
      { input: "[1]", output: "[1]" }
    ],
    approach: "Iterative with 3 pointers",
    timeComplexity: "O(n)", spaceComplexity: "O(1)",
    solution: `def reverse_list(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`
  },
  {
    id: 3, title: "Valid Parentheses", diff: "easy",
    desc: "Given a string containing '(', ')', '{', '}', '[', ']', determine if the input string is valid.",
    tags: ["Stack", "String"],
    examples: [
      { input: 's = "()"', output: "true", explanation: "Matching parentheses" },
      { input: 's = "()[]{}"', output: "true", explanation: "All pairs match" },
      { input: 's = "(]"', output: "false", explanation: "Mismatched brackets" }
    ],
    testCases: [
      { input: '"()"', output: "true" },
      { input: '"()[]{}"', output: "true" },
      { input: '"(]"', output: "false" },
      { input: '"([)]"', output: "false" }
    ],
    approach: "Stack-based matching",
    timeComplexity: "O(n)", spaceComplexity: "O(n)",
    solution: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`
  },
  {
    id: 4, title: "Maximum Subarray (Kadane's)", diff: "easy",
    desc: "Find the contiguous subarray with the largest sum.",
    tags: ["Array", "DP", "Kadane"],
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has sum 6" },
      { input: "[1]", output: "1", explanation: "Single element" }
    ],
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "[1]", output: "1" },
      { input: "[-1,-2,-3]", output: "-1" }
    ],
    approach: "Kadane's Algorithm",
    timeComplexity: "O(n)", spaceComplexity: "O(1)",
    solution: `def max_subarray(nums):
    max_sum = curr_sum = nums[0]
    for num in nums[1:]:
        curr_sum = max(num, curr_sum + num)
        max_sum = max(max_sum, curr_sum)
    return max_sum`
  },
  {
    id: 5, title: "Binary Search", diff: "easy",
    desc: "Given a sorted array and a target, return the index of target or -1 if not found.",
    tags: ["Array", "Binary Search"],
    examples: [
      { input: "nums=[1,3,5,7,9], target=7", output: "3", explanation: "7 is at index 3" },
      { input: "nums=[1,3,5,7,9], target=4", output: "-1", explanation: "4 not in array" }
    ],
    testCases: [
      { input: "[1,3,5,7,9], target=7", output: "3" },
      { input: "[1,3,5,7,9], target=4", output: "-1" },
      { input: "[-1,0,3,5,9,12], target=9", output: "4" }
    ],
    approach: "Iterative Binary Search",
    timeComplexity: "O(log n)", spaceComplexity: "O(1)",
    solution: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
  },
  {
    id: 6, title: "Longest Common Subsequence", diff: "medium",
    desc: "Given two strings, find the length of their longest common subsequence.",
    tags: ["DP", "String"],
    examples: [
      { input: 'text1="abcde", text2="ace"', output: "3", explanation: "LCS is 'ace'" },
      { input: 'text1="abc", text2="abc"', output: "3", explanation: "LCS is 'abc'" }
    ],
    testCases: [
      { input: '"abcde", "ace"', output: "3" },
      { input: '"abc", "abc"', output: "3" },
      { input: '"abc", "def"', output: "0" }
    ],
    approach: "2D Dynamic Programming",
    timeComplexity: "O(m×n)", spaceComplexity: "O(m×n)",
    solution: `def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`
  },
  {
    id: 7, title: "Number of Islands", diff: "medium",
    desc: "Given a 2D grid of '1's (land) and '0's (water), count the number of islands.",
    tags: ["Graph", "BFS", "DFS"],
    examples: [
      { input: 'grid=[["1","1","0"],["0","1","0"],["0","0","1"]]', output: "2", explanation: "Two separate islands" }
    ],
    testCases: [
      { input: '[["1","1","0"],["0","1","0"],["0","0","1"]]', output: "2" },
      { input: '[["1","1","1"],["0","1","0"],["1","1","1"]]', output: "1" },
      { input: '[["0","0"],["0","0"]]', output: "0" }
    ],
    approach: "DFS flood fill",
    timeComplexity: "O(m×n)", spaceComplexity: "O(m×n)",
    solution: `def num_islands(grid):
    if not grid: return 0
    count = 0
    def dfs(r, c):
        if r<0 or r>=len(grid) or c<0 or c>=len(grid[0]):
            return
        if grid[r][c] != '1': return
        grid[r][c] = '0'
        dfs(r+1,c); dfs(r-1,c)
        dfs(r,c+1); dfs(r,c-1)
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count`
  },
  {
    id: 8, title: "0/1 Knapsack Problem", diff: "medium",
    desc: "Given weights and values of n items, find max value in a knapsack of capacity W.",
    tags: ["DP", "Greedy"],
    examples: [
      { input: "weights=[1,3,4,5], values=[1,4,5,7], W=7", output: "9", explanation: "Items 2+3 (weight 3+4=7, value 4+5=9)" }
    ],
    testCases: [
      { input: "w=[1,3,4,5], v=[1,4,5,7], W=7", output: "9" },
      { input: "w=[2,3,4], v=[3,4,5], W=5", output: "7" },
      { input: "w=[1,2,3], v=[6,10,12], W=5", output: "22" }
    ],
    approach: "2D DP Table",
    timeComplexity: "O(n×W)", spaceComplexity: "O(n×W)",
    solution: `def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(W+1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w],
                    dp[i-1][w-weights[i-1]] + values[i-1])
    return dp[n][W]`
  },
  {
    id: 9, title: "Merge Intervals", diff: "medium",
    desc: "Given an array of intervals, merge all overlapping intervals.",
    tags: ["Array", "Sorting"],
    examples: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "[1,3] and [2,6] overlap" }
    ],
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
      { input: "[[1,4],[4,5]]", output: "[[1,5]]" },
      { input: "[[1,4],[2,3]]", output: "[[1,4]]" }
    ],
    approach: "Sort + Linear Scan",
    timeComplexity: "O(n log n)", spaceComplexity: "O(n)",
    solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`
  },
  {
    id: 10, title: "Trapping Rain Water", diff: "hard",
    desc: "Given an elevation map, compute how much water it can trap after raining.",
    tags: ["Array", "Two Pointer", "Stack"],
    examples: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of water trapped" }
    ],
    testCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "[4,2,0,3,2,5]", output: "9" },
      { input: "[3,0,2,0,4]", output: "7" }
    ],
    approach: "Two Pointer",
    timeComplexity: "O(n)", spaceComplexity: "O(1)",
    solution: `def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water`
  },
  {
    id: 11, title: "Word Break", diff: "hard",
    desc: "Given a string and a dictionary, determine if the string can be segmented into dictionary words.",
    tags: ["DP", "String", "BFS"],
    examples: [
      { input: 's="leetcode", wordDict=["leet","code"]', output: "true", explanation: '"leet" + "code"' },
      { input: 's="applepenapple", wordDict=["apple","pen"]', output: "true", explanation: '"apple"+"pen"+"apple"' }
    ],
    testCases: [
      { input: '"leetcode", ["leet","code"]', output: "true" },
      { input: '"applepenapple", ["apple","pen"]', output: "true" },
      { input: '"catsandog", ["cats","dog","sand","and","cat"]', output: "false" }
    ],
    approach: "1D DP with word set",
    timeComplexity: "O(n²)", spaceComplexity: "O(n)",
    solution: `def word_break(s, wordDict):
    word_set = set(wordDict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[n]`
  },
  {
    id: 12, title: "Median of Two Sorted Arrays", diff: "hard",
    desc: "Find the median of two sorted arrays in O(log(m+n)) time.",
    tags: ["Binary Search", "Array"],
    examples: [
      { input: "nums1=[1,3], nums2=[2]", output: "2.0", explanation: "Merged: [1,2,3], median=2" },
      { input: "nums1=[1,2], nums2=[3,4]", output: "2.5", explanation: "Merged: [1,2,3,4], median=2.5" }
    ],
    testCases: [
      { input: "[1,3], [2]", output: "2.0" },
      { input: "[1,2], [3,4]", output: "2.5" },
      { input: "[], [1]", output: "1.0" }
    ],
    approach: "Binary Search on smaller array",
    timeComplexity: "O(log(min(m,n)))", spaceComplexity: "O(1)",
    solution: `def find_median(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    lo, hi = 0, m
    while lo <= hi:
        px = (lo + hi) // 2
        py = (m + n + 1) // 2 - px
        maxX = nums1[px-1] if px > 0 else float('-inf')
        minX = nums1[px] if px < m else float('inf')
        maxY = nums2[py-1] if py > 0 else float('-inf')
        minY = nums2[py] if py < n else float('inf')
        if maxX <= minY and maxY <= minX:
            if (m + n) % 2 == 1:
                return max(maxX, maxY)
            return (max(maxX,maxY)+min(minX,minY))/2
        elif maxX > minY:
            hi = px - 1
        else:
            lo = px + 1`
  }
];

const MOCK_TESTS = [
  {
    id: 1, icon: "📝", title: "IBM OA – Full Mock 1",
    desc: "Complete simulation of IBM Online Assessment with Aptitude, Logical & English sections.",
    questions: 30, time: 60, sections: "Aptitude + Logical + English",
    questions_data: [
      { q: "If 15% of x = 20% of y, then x:y = ?", options: ["3:4","4:3","2:3","3:2"], ans: 1, explanation: "0.15x = 0.20y → x/y = 0.20/0.15 = 4/3" },
      { q: "A boat goes 12 km upstream in 4 hours and 18 km downstream in 3 hours. Find speed of stream.", options: ["1.5 km/h","2 km/h","1 km/h","2.5 km/h"], ans: 0, explanation: "Upstream=3km/h, Downstream=6km/h. Stream=(6-3)/2=1.5km/h" },
      { q: "Find the odd one out: 2, 5, 10, 17, 26, 37, 50, 64", options: ["37","50","64","26"], ans: 2, explanation: "Series: 1²+1, 2²+1, 3²+1... Next after 50 (7²+1) should be 8²+1=65, not 64" },
      { q: "If FRIEND is coded as HUMJTK, how is CANDLE coded?", options: ["EDRIRL","DCQHQK","EDRJQM","ECPFNG"], ans: 0, explanation: "Each letter shifted by +2,+3,+2,+3... pattern" },
      { q: "Choose correct: 'Neither the students nor the teacher ___ present.'", options: ["were","was","are","have been"], ans: 1, explanation: "With 'neither...nor', verb agrees with the subject closest to it (teacher - singular)" },
      { q: "A sum doubles in 5 years at SI. In how many years will it become 4 times?", options: ["10","15","20","25"], ans: 1, explanation: "Rate = 100/5 = 20%. For 4x: 300% interest needed. Time = 300/20 = 15 years" },
      { q: "In a class, 40% are girls. 75% of boys and 60% of girls passed. What % of class passed?", options: ["69%","66%","70%","68%"], ans: 0, explanation: "Boys=60%, Girls=40%. Passed=0.6×75+0.4×60=45+24=69%" },
      { q: "Pointing to a photo, Ram says 'She is the daughter of my grandfather's only son.' Relation?", options: ["Sister","Cousin","Niece","Daughter"], ans: 0, explanation: "Grandfather's only son = Ram's father. Father's daughter = Ram's sister" },
      { q: "Find next: 1, 4, 9, 16, 25, ?", options: ["30","36","49","35"], ans: 1, explanation: "Perfect squares: 1²,2²,3²,4²,5²,6²=36" },
      { q: "Synonym of 'Ameliorate':", options: ["Worsen","Improve","Maintain","Ignore"], ans: 1, explanation: "Ameliorate means to make something bad better = Improve" }
    ]
  },
  {
    id: 2, icon: "💡", title: "IBM Technical Mock",
    desc: "Technical interview simulation covering DS, Algorithms, OS, DBMS, and OOP.",
    questions: 20, time: 45, sections: "DS + Algo + OS + DBMS + OOP",
    questions_data: [
      { q: "What is the time complexity of inserting into a balanced BST?", options: ["O(1)","O(log n)","O(n)","O(n log n)"], ans: 1, explanation: "Balanced BST maintains height O(log n), so insert is O(log n)" },
      { q: "Which data structure is used in BFS?", options: ["Stack","Queue","Heap","Tree"], ans: 1, explanation: "BFS uses a Queue (FIFO) to explore nodes level by level" },
      { q: "What does ACID stand for in DBMS?", options: ["Atomicity, Consistency, Isolation, Durability","Accuracy, Consistency, Integrity, Durability","Atomicity, Concurrency, Isolation, Dependency","None"], ans: 0, explanation: "ACID = Atomicity, Consistency, Isolation, Durability" },
      { q: "Which sorting algorithm is stable?", options: ["QuickSort","HeapSort","Merge Sort","Selection Sort"], ans: 2, explanation: "Merge Sort is stable - equal elements maintain relative order" },
      { q: "What is a deadlock?", options: ["Process running forever","Two processes waiting for each other indefinitely","Memory overflow","CPU overload"], ans: 1, explanation: "Deadlock: circular wait where processes hold resources needed by others" },
      { q: "What is the output of: int x=5; System.out.println(x++ + ++x);", options: ["11","12","13","10"], ans: 1, explanation: "x++=5 (x becomes 6), ++x=7 (x becomes 7). 5+7=12" },
      { q: "Which JOIN returns all rows from both tables?", options: ["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN"], ans: 3, explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs where no match" },
      { q: "What is polymorphism?", options: ["Multiple inheritance","Same interface, different implementations","Data hiding","Code reuse"], ans: 1, explanation: "Polymorphism: one interface, multiple implementations (overloading/overriding)" },
      { q: "Virtual memory is managed by?", options: ["CPU","Compiler","OS","Hardware only"], ans: 2, explanation: "OS manages virtual memory through page tables and page fault handling" },
      { q: "What is the space complexity of recursive Fibonacci without memoization?", options: ["O(1)","O(n)","O(log n)","O(2^n)"], ans: 1, explanation: "Call stack depth is O(n) even though time is O(2^n)" }
    ]
  },
  {
    id: 3, icon: "💻", title: "Coding MCQ Mock",
    desc: "MCQ-based coding assessment testing algorithm knowledge and code output prediction.",
    questions: 15, time: 30, sections: "Coding + Algorithms",
    questions_data: [
      { q: "What does this return: [x*x for x in range(5) if x%2==0]?", options: ["[0,4,16]","[0,1,4,9,16]","[4,16]","[0,4]"], ans: 0, explanation: "Even numbers in range(5): 0,2,4. Squares: 0,4,16" },
      { q: "What is the output: print(type(1/2))?", options: ["<class 'int'>","<class 'float'>","<class 'double'>","Error"], ans: 1, explanation: "In Python 3, / always returns float. 1/2 = 0.5 (float)" },
      { q: "Which is NOT a valid way to reverse a list in Python?", options: ["list.reverse()","list[::-1]","reversed(list)","list.sort(reverse=True)"], ans: 3, explanation: "sort(reverse=True) sorts descending, doesn't reverse original order" },
      { q: "What is the output: print(bool('') or bool('IBM'))?", options: ["True","False","''","IBM"], ans: 0, explanation: "bool('')=False, bool('IBM')=True. False or True = True" },
      { q: "Time complexity of finding an element in a Python dict?", options: ["O(n)","O(log n)","O(1) average","O(n²)"], ans: 2, explanation: "Python dict uses hash table, average O(1) lookup" },
      { q: "What does 'pass' do in Python?", options: ["Exits function","Does nothing (placeholder)","Skips iteration","Returns None"], ans: 1, explanation: "pass is a null statement used as a placeholder" },
      { q: "Output of: print(3 * '=' + ' IBM ' + 3 * '=')?", options: ["=== IBM ===","3=IBM3=","Error","= = = IBM = = ="], ans: 0, explanation: "String multiplication: '===' + ' IBM ' + '===' = '=== IBM ===' " }
    ]
  }
];
