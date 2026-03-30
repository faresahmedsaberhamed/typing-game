// Social Studies Logic (Using Mock Data until PDF is available)

const lessonsData = [
    {
        title: "Lesson 1: Geography of Germany",
        content: "Germany is a country in Central Europe. It has a varied geography that includes the low-lying plains of the north, the central uplands, and the Bavarian Alps in the south. The Rhine, Elbe, and Danube are its major rivers.",
        stats: [ {label: "North Plains", val: 30}, {label: "Central Uplands", val: 50}, {label: "Alps", val: 20} ],
        questions: [
            { q: "Which of the following is a major river in Germany?", options: ["Thames", "Seine", "Rhine", "Amazon"], correct: "Rhine" },
            { q: "Where are the Alps located in Germany?", options: ["North", "South", "East", "West"], correct: "South" }
        ]
    },
    {
        title: "Lesson 2: Modern History",
        content: "After World War II, Germany was divided into East and West. The Berlin Wall was constructed in 1961 and fell in 1989. The country was officially reunified on October 3, 1990, which is now celebrated as German Unity Day.",
        stats: [ {label: "1945-1990", val: 45}, {label: "1990-Present", val: 55} ],
        questions: [
            { q: "What year did the Berlin Wall fall?", options: ["1945", "1961", "1989", "1990"], correct: "1989" },
            { q: "When is German Unity Day?", options: ["October 3", "November 9", "May 8", "July 4"], correct: "October 3" }
        ]
    }
];

let currentLessonIndex = 0;
let currentMode = 'hub'; // hub, study, practice
let currentQuestionIndex = 0;
let score = 0;

const interactiveBoard = document.querySelector('.interactive-board');
const lessonTitle = document.querySelector('.lesson-title');
const lessonContent = document.querySelector('.lesson-content');
const btnGroup = document.querySelector('.btn-group');

function renderHub() {
    currentMode = 'hub';
    lessonTitle.textContent = "Social Studies Hub";
    lessonContent.innerHTML = "Welcome! Since the PDF hasn't been uploaded yet, we are using placeholder lessons about Germany.<br><br>Choose a mode below to begin learning.";
    lessonContent.style.textAlign = 'center';
    
    interactiveBoard.innerHTML = `
        <div class="map-box">🗺 Select a mode below!</div>
    `;

    btnGroup.innerHTML = `
        <button class="start-btn learn-btn" id="study-mode-btn">📖 Start Study Mode</button>
        <button class="start-btn" id="practice-mode-btn">🎯 Start Practice Mode</button>
    `;

    document.getElementById('study-mode-btn').addEventListener('click', startStudyMode);
    document.getElementById('practice-mode-btn').addEventListener('click', startPracticeMode);
}

function startStudyMode() {
    currentMode = 'study';
    currentLessonIndex = 0;
    renderStudyLesson();
}

function renderStudyLesson() {
    const lesson = lessonsData[currentLessonIndex];
    lessonTitle.textContent = lesson.title;
    lessonContent.innerHTML = lesson.content;
    lessonContent.style.textAlign = 'left';

    // Render a simple CSS chart
    let chartHtml = '<div style="display:flex; height:100%; width:100%; align-items:flex-end; gap:10px; padding:20px;">';
    lesson.stats.forEach(stat => {
        chartHtml += `
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%;">
                <div style="height:${stat.val}%; width:100%; background:var(--primary); transition: height 1s; border-radius:5px 5px 0 0; box-shadow: 0 0 10px var(--primary);"></div>
                <span style="color:#fff; font-size:14px; margin-top:10px; text-align:center;">${stat.label}</span>
            </div>
        `;
    });
    chartHtml += '</div>';

    interactiveBoard.innerHTML = `
        <div class="chart-box" style="flex:1; display:flex; flex-direction:column; background:var(--panel);">
            <h3 style="color:var(--secondary); text-align:center; padding-top:10px; margin:0;">Data Overview</h3>
            ${chartHtml}
        </div>
    `;

    btnGroup.innerHTML = '';
    if (currentLessonIndex < lessonsData.length - 1) {
        btnGroup.innerHTML += `<button class="start-btn learn-btn" onclick="currentLessonIndex++; renderStudyLesson()">Next Lesson ➡️</button>`;
    } else {
        btnGroup.innerHTML += `<button class="start-btn" onclick="startPracticeMode()">Ready to Test! 🎯</button>`;
    }
    btnGroup.innerHTML += `<button class="start-btn icon-btn" onclick="renderHub()" style="background:transparent;">Back to Hub</button>`;
}

function startPracticeMode() {
    currentMode = 'practice';
    currentLessonIndex = 0;
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
}

function renderQuestion() {
    // Gather all questions
    const allQuestions = lessonsData.flatMap(l => l.questions);
    
    if (currentQuestionIndex >= allQuestions.length) {
        // Test Done
        lessonTitle.textContent = "Test Complete!";
        lessonContent.innerHTML = `You scored <b>${score} / ${allQuestions.length}</b>!<br><br>Keep practicing to master all topics.`;
        lessonContent.style.textAlign = 'center';
        interactiveBoard.innerHTML = '';
        btnGroup.innerHTML = `
            <button class="start-btn" onclick="startPracticeMode()">Retry Test 🔄</button>
            <button class="start-btn icon-btn" onclick="renderHub()" style="background:transparent;">Back to Hub</button>
        `;
        return;
    }

    const qItem = allQuestions[currentQuestionIndex];
    lessonTitle.textContent = `Question ${currentQuestionIndex + 1} of ${allQuestions.length}`;
    lessonContent.innerHTML = `<div style="font-size:28px; color:var(--text); text-align:center; margin-bottom: 20px;">${qItem.q}</div>`;
    
    let optionsHtml = '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; width:100%;" id="mcq-grid">';
    qItem.options.forEach((opt, idx) => {
        optionsHtml += `<button class="start-btn" style="font-size:20px; padding:15px; background:var(--panel); border:2px solid var(--primary);" onclick="handleAnswer('${opt}', '${qItem.correct}')">${opt}</button>`;
    });
    optionsHtml += '</div>';
    
    interactiveBoard.innerHTML = optionsHtml;
    btnGroup.innerHTML = `<button class="start-btn icon-btn" onclick="renderHub()" style="background:transparent;">End Test & Back to Hub</button>`;
}

function handleAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        // Visual feedback
        document.body.style.boxShadow = "inset 0 0 50px var(--correct)";
    } else {
        document.body.style.boxShadow = "inset 0 0 50px var(--wrong)";
    }
    setTimeout(() => {
        document.body.style.boxShadow = "none";
        currentQuestionIndex++;
        renderQuestion();
    }, 500);
}

// Init
renderHub();
