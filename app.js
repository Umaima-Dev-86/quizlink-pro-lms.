const subjectMetadata = [
    {
        id: "web-systems",
        name: "Fullstack Web Engineering",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
        desc: "Master layout pipelines, atomic components, async JavaScript paradigms, and DOM optimization."
    },
    {
        id: "ai-intelligence",
        name: "Artificial Intelligence",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
        desc: "Build neural network layers, cluster models, computer vision arrays, and predictive weights."
    },
    {
        id: "cyber-perimeter",
        name: "Cyber Security Systems",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
        desc: "Audit secure firewalls, network scanning protocols, authorization criteria, and pen-testing vectors."
    },
    {
        id: "cloud-ops",
        name: "Cloud Computing Node",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
        desc: "Manage cluster scalability protocols, load balancing arrays, serverless APIs, and virtual networks."
    },
    {
        id: "ui-design",
        name: "UI / UX Design Systems",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
        desc: "Craft high-fidelity wireframes, typography frameworks, heuristics patterns, and user journey flows."
    },
    {
        id: "database-engines",
        name: "Database Architecture",
        img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
        desc: "Optimize complex join evaluations, relational indexes structures, transactions isolation, and NoSQL engines."
    }
];

const backendMockDatabase = {
    "web-systems": [
        { query: "Which layout standard allows fully bidirectional multi-column alignments natively?", alternatives: ["Flexbox layout model", "CSS Grid Layout specification", "Absolute positioning parameters", "Inline-block element flowing"], correctIndex: 1, tip: "CSS Grid is perfectly multidimensional (columns and rows combined), whereas Flexbox is primarily unidirectional." },
        { query: "What occurs inside the Event Loop ecosystem when a microtask queue resolves?", alternatives: ["It runs immediately prior to any macrotask callback resolution", "It waits for requestAnimationFrame to terminate gracefully", "It transfers context variables directly to worker processes", "It pushes execution arrays into standard blocking loops"], correctIndex: 0, tip: "Microtasks (like Promise callbacks) are executed fully before the next macrotask in the loop cycle." },
        { query: "How can you completely isolate CSS component scopes inside native web modules?", alternatives: ["By overriding structural classes via inline markers", "By utilizing custom shadow roots in Shadow DOM", "By declaring deep absolute namespace definitions", "By forcing compile-time structural preprocessing directives"], correctIndex: 1, tip: "Shadow DOM encapsulates components natively, completely protecting styles from external leakages." }
    ],
    "ai-intelligence": [
        { query: "Which function acts as a primary standard to resolve vanishing gradients in neural nodes?", alternatives: ["Sigmoid mathematical scaling mapping", "Hyperbolic Tangent transformation curve", "Rectified Linear Unit (ReLU) parameter", "Linear scalar pass-through channel"], correctIndex: 2, tip: "ReLU outputs input directly if positive, maintaining consistent gradients over vast layers." },
        { query: "What fundamental issue occurs when model parameters map perfectly onto training arrays but fail on test sets?", alternatives: ["Underfitting performance constraint metrics", "Overfitting structural representation states", "Stochastic descent bias distribution errors", "High bias variance imbalance vector"], correctIndex: 1, tip: "Overfitting happens when a machine learning algorithm models the noise or variance of training data too closely." }
    ],
    "cyber-perimeter": [
        { query: "What strategic method defines validating encryption keys securely across open channels?", alternatives: ["Symmetric key substitution mapping algorithms", "Diffie-Hellman cryptographic key exchange protocol", "Advanced Encryption Standard block-cipher logic", "Secure Hash Algorithm signature verification arrays"], correctIndex: 1, tip: "Diffie-Hellman allows two parties to create a shared secret code safely over unencrypted lines." },
        { query: "Which component represents a software flaw exploited prior to security vendor patch distributions?", alternatives: ["Cross-Site Scripting session payload injection", "SQL Injection pattern parameters", "Zero-day vulnerability software flaw", "Buffer overflow hardware exception codes"], correctIndex: 2, tip: "Zero-day vulnerability defines a flaw completely unknown to developers until a live attack executes." }
    ],
    "cloud-ops": [
        { query: "What primary benefit describes using isolated microservices via Docker over Virtual Machines?", alternatives: ["Direct kernel sharing for highly lightweight isolated execution", "Full Guest Operating System isolation layers", "Hardware-level disk space pre-allocation blocks", "Hypervisor state replication engine pipelines"], correctIndex: 0, tip: "Containers share the host OS kernel instead of virtualizing a guest OS, reducing overhead dramatically." },
        { query: "Which metric establishes high-availability routing configurations across multiple global datacenters?", alternatives: ["Round-Robin database scaling instances", "Anycast DNS routing with latency health-check vectors", "Secure Sockets Layer processing optimization algorithms", "Local cluster state replication intervals"], correctIndex: 1, tip: "Anycast routes users to the nearest healthy datacenter node instantly, maintaining resilience." }
    ],
    "ui-design": [
        { query: "What does the aesthetic usability effect demonstrate in user heuristic assessments?", alternatives: ["Users ignore layout friction if interfaces look attractive", "Users choose flat monochrome palettes over variable patterns", "Typography rules directly control interface conversion metrics", "Wireframes establish absolute cognitive layout wireframes"], correctIndex: 0, tip: "Users perceive more aesthetic designs as vastly easier to navigate, overlooking minor flaws." },
        { query: "Which term clarifies the absolute visual spacing distance separating content blocks safely?", alternatives: ["Modular column grids alignment matrices", "Whitespace or negative breathing room layout areas", "Interactive target bounding dimensions parameters", "High-fidelity clickable blueprint structural boundaries"], correctIndex: 1, tip: "Whitespace allows user layouts to breathe, preventing cognitive fatigue and enhancing readability." }
    ],
    "database-engines": [
        { query: "What is the primary function of database normalization techniques up to 3NF?", alternatives: ["Maximizing transactional processing performance cycles", "Eliminating data redundancy and structural anomalies", "Enforcing complex column foreign key references manually", "Encrypting target tablespace arrays at execution rest"], correctIndex: 1, tip: "Third Normal Form ensures that all attributes rely strictly on the primary key, avoiding anomalies." },
        { query: "Which layer handles multi-transaction integrity when dirty read conflicts arise?", alternatives: ["ACID isolation level management matrix", "B-Tree index leaf structural splitting routines", "Write-ahead logging storage replication streams", "Relational foreign key cascade processing checks"], correctIndex: 0, tip: "Isolation settings determine how concurrent changes are visible to other operations, avoiding dirty reads." }
    ]
};

let activeView = "hero";
let selectedSubjectId = "web-systems";
let activeCardIndex = 0;
let scoreTracker = { correct: 0, incorrect: 0 };

function initApp() {
    renderSubjectsGrid();
    updateGlobalStatsUI();
}

function renderSubjectsGrid() {
    const container = document.getElementById("subjects-container");
    container.innerHTML = "";
    
    subjectMetadata.forEach(sub => {
        container.innerHTML += `
            <div class="subject-box" onclick="launchQuizArena('${sub.id}')">
                <div class="img-container">
                    <img src="${sub.img}" alt="${sub.name}">
                </div>
                <div class="box-body">
                    <h3>${sub.name}</h3>
                    <p>${sub.desc}</p>
                </div>
            </div>
        `;
    });
}

function showPage(id) {
    activeView = id;
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    
    document.getElementById(`${id}-page`).classList.add("active");
    const activeNav = document.getElementById(`nav-${id}`);
    if(activeNav) activeNav.classList.add("active");
    
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function launchQuizArena(subjectId) {
    selectedSubjectId = subjectId;
    activeCardIndex = 0;
    
    const meta = subjectMetadata.find(s => s.id === subjectId);
    document.getElementById("active-subject-title").textContent = meta.name;
    
    showPage("quiz");
    renderActiveQuestion();
}

function renderActiveQuestion() {
    const dataset = backendMockDatabase[selectedSubjectId];
    const targetCard = dataset[activeCardIndex];
    
    document.getElementById("current-card-num").textContent = activeCardIndex + 1;
    document.querySelector(".progress-stats").innerHTML = `Question <span id="current-card-num">${activeCardIndex + 1}</span> of ${dataset.length}`;
    document.getElementById("question-text").textContent = targetCard.query;
    document.getElementById("hint-box").style.display = "none";
    document.getElementById("hint-text").textContent = targetCard.tip;
    
    const optionsBox = document.getElementById("options-stack");
    optionsBox.innerHTML = "";
    
    targetCard.alternatives.forEach((altText, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-item opt-btn-element";
        btn.textContent = altText;
        btn.onclick = () => evaluateChoice(idx, btn);
        optionsBox.appendChild(btn);
    });
    
    document.getElementById("btn-prev").disabled = activeCardIndex === 0;
    document.getElementById("btn-next").disabled = activeCardIndex === dataset.length - 1;
}

function evaluateChoice(userChoice, btnRef) {
    const cardData = backendMockDatabase[selectedSubjectId][activeCardIndex];
    document.querySelectorAll(".opt-btn-element").forEach(b => b.disabled = true);
    
    if(userChoice === cardData.correctIndex) {
        btnRef.classList.add("correct");
        scoreTracker.correct++;
    } else {
        btnRef.classList.add("wrong");
        scoreTracker.incorrect++;
        const rows = document.getElementById("options-stack").children;
        if(rows[cardData.correctIndex]) {
            rows[cardData.correctIndex].classList.add("correct");
        }
    }
    updateGlobalStatsUI();
}

function toggleAnswer() {
    const view = document.getElementById("hint-box");
    view.style.display = (view.style.display === "none" || view.style.display === "") ? "block" : "none";
}

function nextQuestion() {
    const limit = backendMockDatabase[selectedSubjectId].length;
    if(activeCardIndex < limit - 1) {
        activeCardIndex++;
        renderActiveQuestion();
    }
}

function prevQuestion() {
    if(activeCardIndex > 0) {
        activeCardIndex--;
        renderActiveQuestion();
    }
}

function updateGlobalStatsUI() {
    document.getElementById("correct-lbl").textContent = scoreTracker.correct;
    document.getElementById("wrong-lbl").textContent = scoreTracker.incorrect;
    const combined = scoreTracker.correct + scoreTracker.incorrect;
    const computedAcc = combined > 0 ? Math.round((scoreTracker.correct / combined) * 100) : 0;
    document.getElementById("accuracy-lbl").textContent = `${computedAcc}%`;
}

window.onload = initApp;
