// =========================================================
//                  I. NGÂN HÀNG CÂU HỎI (17 CÂU)
// =========================================================

const questionBank = [
    // ------------------------------------------------------------------------------------------------
    // 12 CÂU CHỌN 1 ĐÁP ÁN (C1)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 1, 
        type: 'C1', 
        text: 'Khi làm nhà đồ chơi, em cần lưu ý những gì?', 
        options: [
            'Sử dụng vật liệu và dụng cụ đảm bảo an toàn, vệ sinh, tiết kiệm.', 
            'Chọn màu tùy thích để tiết kiệm chi phí, vệ sinh, tiết kiệm.', 
            'Sử dụng vật liệu tiết kiệm, an toàn, dùng tất cả màu sắc có sẵn.', 
            'Chỉ dùng một màu duy nhất cho toàn bộ sản phẩm cho tiết kiệm.'
        ], 
        correctAnswer: 'Sử dụng vật liệu và dụng cụ đảm bảo an toàn, vệ sinh, tiết kiệm.', 
        isCritical: true 
    },
    { 
        id: 2, 
        type: 'C1', 
        text: 'Khi trang trí sản phẩm đồ chơi, em cần lưu ý điều gì?', 
        options: [
            'Trang trí quá nhiều chi tiết khiến sản phẩm rối mắt.', 
            'Sử dụng màu sắc hài hòa, phù hợp và không lãng phí.', 
            'Dùng thật nhiều màu để sản phẩm nổi bật hơn.', 
            'Trang trí tùy ý, không cần quan tâm đến thẩm mỹ.'
        ], 
        correctAnswer: 'Sử dụng màu sắc hài hòa, phù hợp và không lãng phí.'
    },
    { 
        id: 3, 
        type: 'C1', 
        text: 'Em hãy cho biết vai trò của bóng đèn điện trong đời sống?', 
        options: ['Làm mát', 'Chiếu sáng', 'Giúp liên lạc', 'Giúp học tập'], 
        correctAnswer: 'Chiếu sáng'
    },
    { 
        id: 4, 
        type: 'C1', 
        text: 'Trong các sản phẩm công nghệ dưới đây, sản phẩm công nghệ nào có thể gây hại cho mắt?', 
        options: ['Ô tô', 'Xe máy', 'Quạt máy', 'Ti vi'], 
        correctAnswer: 'Ti vi'
    },
    { 
        id: 5, 
        type: 'C1', 
        text: 'Thiết bị nào giúp chúng ta học tập thuận tiện hơn vào buổi tối?', 
        options: ['Bóng đèn', 'Quạt máy', 'Tivi', 'Tủ lạnh'], 
        correctAnswer: 'Bóng đèn'
    },
    { 
        id: 6, 
        type: 'C1', 
        text: 'Trong các sản phẩm công nghệ dưới đây, sản phẩm công nghệ nào dùng để giặt quần áo?', 
        options: ['Nồi cơm điện', 'Tủ lạnh', 'Máy giặt', 'Máy quạt'], 
        correctAnswer: 'Máy giặt'
    },
    { 
        id: 7, 
        type: 'C1', 
        text: 'Để tạo ra một sản phẩm công nghệ, trước tiên cần phải làm gì?', 
        options: ['Mua vật liệu', 'Làm sản phẩm', 'Thiết kế', 'Mua dụng cụ'], 
        correctAnswer: 'Thiết kế'
    },
    { 
        id: 8, 
        type: 'C1', 
        text: 'Bước cuối cùng để sản phẩm công nghệ hoàn thành là?', 
        options: ['Chọn vật liệu', 'Thiết kế', 'Làm sản phẩm', 'Thử nghiệm, hoàn thiện'], 
        correctAnswer: 'Thử nghiệm, hoàn thiện'
    },
    { 
        id: 9, 
        type: 'C1', 
        text: 'Khi có ông, bà ở nhà đau ốm nguy cấp em sẽ gọi số điện thoại khẩn cấp nào?', 
        options: ['112', '113', '114', '115'], 
        correctAnswer: '115',
        isCritical: true 
    },
    { 
        id: 10, 
        type: 'C1', 
        text: 'Khi cần báo cháy khẩn cấp em sẽ gọi số điện thoại nào?', 
        options: ['112', '113', '114', '115'], 
        correctAnswer: '114'
    },
    { 
        id: 11, 
        type: 'C1', 
        text: 'Khi có trộm cướp hoặc mất an ninh, em nên gọi số nào?', 
        options: ['112', '113', '114', '115'], 
        correctAnswer: '113'
    },
    { 
        id: 12, 
        type: 'C1', 
        text: 'Để báo những tình huống cần cứu hộ, cứu nạn thiên tai, có thể gọi:', 
        options: ['112', '113', '114', '115'], 
        correctAnswer: '112'
    },

    // ------------------------------------------------------------------------------------------------
    // 2 CÂU CHỌN NHIỀU ĐÁP ÁN (CN)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 13, 
        type: 'CN', 
        text: 'Em hãy đánh dấu vào ô trống trước ý chỉ tác dụng của tủ lạnh (Chọn nhiều đáp án).', 
        options: [
            'Bảo quản đá viên, làm đá lạnh.', 
            'Giúp làm mát cho cả căn nhà.', 
            'Làm lạnh đồ uống các loại, bảo quản các loại thực phẩm chế biến sẵn.', 
            'Giúp bảo quản thực phẩm được tươi lâu và không bị ôi, thiu.'
        ], 
        correctAnswers: [
            'Bảo quản đá viên, làm đá lạnh.', 
            'Làm lạnh đồ uống các loại, bảo quản các loại thực phẩm chế biến sẵn.', 
            'Giúp bảo quản thực phẩm được tươi lâu và không bị ôi, thiu.'
        ],
        isCritical: true 
    },
    { 
        id: 14, 
        type: 'CN', 
        text: 'Em hãy đánh dấu vào ô trống trước ý chỉ tác dụng của ấm siêu tốc (Chọn nhiều đáp án).', 
        options: [
            'Đun nước sôi nhanh.', 
            'Pha trà, pha sữa tiện lợi.', 
            'Hạ nhiệt độ nước nhanh.', 
            'Tiết kiệm thời gian khi cần nước nóng.'
        ], 
        correctAnswers: [
            'Đun nước sôi nhanh.', 
            'Pha trà, pha sữa tiện lợi.', 
            'Tiết kiệm thời gian khi cần nước nóng.'
        ]
    },

    // ------------------------------------------------------------------------------------------------
    // 3 CÂU DẠNG NỐI (N)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 15, 
        type: 'N', 
        text: 'Em hãy nối nhà phát minh với sản phẩm của họ:', 
        pairs: [
            { left: 'Tô-mát Ê-đi-xơn', right: 'bóng đèn điện sợi đốt' }, 
            { left: 'Các Ben', right: 'ô tô' }, 
            { left: 'Giêm Oát', right: 'động cơ hơi nước' },
            { left: 'O-vơ Rai và Uy-bơ Rai', right: 'máy bay' },
            { left: 'A-lếch-xan-đơ Gra-ham Beo', right: 'điện thoại' }
        ]
    },
    { 
        id: 16, 
        type: 'N', 
        text: 'Em hãy nối định nghĩa với sản phẩm công nghệ tương ứng:', 
        pairs: [
            { left: 'Phát minh giúp ghi lại hình ảnh', right: 'máy ảnh' }, 
            { left: 'Ê-đi-xơn nổi tiếng với phát minh ra', right: 'bóng đèn điện' }, 
            { left: 'Phát minh dùng để nghe thông tin từ xa', right: 'radio' },
            { left: 'Thiết bị dùng để may vá nhanh hơn', right: 'máy khâu' },
            { left: 'Thiết bị vừa phát hình vừa phát tiếng', right: 'tivi' }
        ]
    },
    { 
        id: 17, 
        type: 'N', 
        text: 'Em hãy nối các bước chính của thiết kế sản phẩm với tên công việc sao cho phù hợp.', 
        pairs: [
            { left: 'Bước 1', right: 'Hình thành ý tưởng về sản phẩm' }, 
            { left: 'Bước 2', right: 'Đánh giá và hoàn thiện sản phẩm' }, 
            { left: 'Bước 3', right: 'Vẽ phác thảo sản phẩm và lựa chọn vật liệu dụng cụ' },
            { left: 'Bước 4', right: 'Làm sản phẩm mẫu' }
        ]
    },
];

// =========================================================
//                  II. CẤU HÌNH VÀ BIẾN TOÀN CỤC
// =========================================================

const EXAM_CONFIG = {
    C1: 5, 
    CN: 2, 
    N: 3,  
};
const TOTAL_QUESTIONS = 10;
let currentExam = []; 
let currentQuestionIndex = 0; 
let userAnswers = []; 
let isExamSubmitted = false; // Trạng thái mới: True khi nộp bài (chế độ review)
let currentExamId = 1; // ID của đề đang thi (1 đến 5)

// Lấy các phần tử DOM quan trọng
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionHeaderEl = document.getElementById('question-header');
const progressContainerEl = document.getElementById('progress-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-exam-btn');
const resultBoxEl = document.getElementById('result-box');
const currentQuestionInfoEl = document.getElementById('current-question-info');
const examTabsContainer = document.getElementById('exam-selection-tabs');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctAnswerTextEl = document.getElementById('correct-answer-text');


// =========================================================
//                  III. HÀM TIỆN ÍCH VÀ RÚT ĐỀ
// =========================================================

/** Hàm xáo trộn mảng (Fisher-Yates) */
function shuffleArray(array) {
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** HÀM RÚT ĐỀ THI 10 CÂU NGẪU NHIÊN THEO CẤU HÌNH */
function generateExam() {
    let exam = [];
    const config = { ...EXAM_CONFIG }; 
    let remainingQuestions = [...questionBank]; 
    
    const criticalQuestions = remainingQuestions.filter(q => q.isCritical);

    // 1. RÚT 1 CÂU ĐIỂM LIỆT BẮT BUỘC
    if (criticalQuestions.length > 0) {
        const criticalIndex = Math.floor(Math.random() * criticalQuestions.length);
        const selectedCritical = criticalQuestions[criticalIndex];
        
        exam.push(selectedCritical);
        config[selectedCritical.type] -= 1; 
        remainingQuestions = remainingQuestions.filter(q => q.id !== selectedCritical.id);
    }
    
    // 2. RÚT CÁC CÂU CÒN LẠI THEO CẤU HÌNH
    for (const type in config) {
        if (config[type] > 0) {
            const setByType = remainingQuestions.filter(q => q.type === type);
            
            const shuffledSet = shuffleArray(setByType);
            const selectedQuestions = shuffledSet.slice(0, config[type]);
            exam.push(...selectedQuestions);
        }
    }
    
    return shuffleArray(exam);
}

// =========================================================
//                  IV. HÀM HIỂN THỊ (RENDER)
// =========================================================

/** Tạo các nút 1-10 và gắn sự kiện */
function setupProgressBar() {
    progressContainerEl.innerHTML = ''; 
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const button = document.createElement('button');
        button.className = 'q-number';
        button.textContent = i + 1;
        button.dataset.index = i; 
        
        // Đảm bảo nút được BẬT (enabled) khi khởi tạo đề mới
        button.disabled = false; 
        
        button.addEventListener('click', () => {
            // Cho phép click xem lại ngay cả khi đã nộp bài (isExamSubmitted = true)
            if (!isExamSubmitted) { 
                saveUserAnswer(currentQuestionIndex);
            }
            renderQuestion(i);
        });
        
        progressContainerEl.appendChild(button);
    }
}

/** Cập nhật trạng thái và màu sắc của Progress Bar */
function updateProgressBar(index) {
    const progressButtons = document.querySelectorAll('.q-number');
    progressButtons.forEach((btn, i) => {
        btn.classList.remove('active');
        
        if (isExamSubmitted) {
             // Giữ lại màu correct/incorrect đã set trong checkExam()
        } else {
            btn.classList.remove('correct', 'incorrect');
            if (userAnswers[i] !== null) {
                btn.classList.add('answered');
            } else {
                btn.classList.remove('answered');
            }
        }
    });
    
    if(progressButtons[index]) {
        progressButtons[index].classList.add('active');
    }
    
    currentQuestionInfoEl.textContent = `Câu hỏi | Đề số: ${index + 1}/10`;
}

/** Hiển thị câu trả lời đã lưu khi chuyển lại câu cũ */
function loadUserAnswer(question) {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (savedAnswer === null) return;
    
    if (question.type === 'C1') {
        const radio = document.querySelector(`input[name="q${question.id}"][value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    } else if (question.type === 'CN') {
        savedAnswer.forEach(val => {
            const checkbox = document.querySelector(`input[name="q${question.id}"][value="${val}"]`);
            if (checkbox) checkbox.checked = true;
        });
    } else if (question.type === 'N') {
        for (const leftItem in savedAnswer) {
            const select = document.querySelector(`select[data-left-item="${leftItem}"]`);
            if (select) select.value = savedAnswer[leftItem];
        }
    }
}

/** HÀM QUAN TRỌNG: Hiển thị câu hỏi và các tùy chọn trả lời */
function renderQuestion(index) {
    if (index < 0 || index >= currentExam.length) return;

    const question = currentExam[index];
    currentQuestionIndex = index;
    const disabledAttr = isExamSubmitted ? 'disabled' : ''; // KHÔNG CHO SỬA KHI ĐÃ NỘP

    questionHeaderEl.textContent = `Câu hỏi ${index + 1}:`;
    questionTextEl.textContent = question.text;
    answerOptionsEl.innerHTML = ''; 
    correctAnswerDisplayEl.classList.add('hidden'); // Ẩn mặc định

    let htmlContent = '';

    switch (question.type) {
        case 'C1':
            question.options.forEach((option) => {
                htmlContent += `
                    <label class="option-item">
                        <input type="radio" name="q${question.id}" value="${option}" ${disabledAttr}>
                        ${option}
                    </label>
                `;
            });
            break;

        case 'CN':
            question.options.forEach((option) => {
                htmlContent += `
                    <label class="option-item">
                        <input type="checkbox" name="q${question.id}" value="${option}" ${disabledAttr}>
                        ${option}
                    </label>
                `;
            });
            break;

        case 'N':
            htmlContent += '<div class="matching-container">';
            const rightOptions = shuffleArray(question.pairs.map(p => p.right));
            
            question.pairs.forEach((pair) => {
                htmlContent += `
                    <div class="match-row">
                        <span class="left-item">${pair.left}</span>
                        <select class="match-select" data-left-item="${pair.left}" ${disabledAttr}>
                            <option value="">-- Chọn đáp án --</option>
                            ${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                        </select>
                    </div>
                `;
            });
            htmlContent += '</div>';
            break;
    }
    
    answerOptionsEl.innerHTML = htmlContent;
    loadUserAnswer(question);
    updateNavigationButtons();
    updateProgressBar(index);
    
    // HIỂN THỊ ĐÁP ÁN ĐÚNG KHI XEM LẠI
    if (isExamSubmitted) {
        showCorrectAnswer(question);
    }
}

/** Hiển thị đáp án đúng */
function showCorrectAnswer(question) {
    let answerText = '';
    if (question.type === 'C1') {
        answerText = question.correctAnswer;
    } else if (question.type === 'CN') {
        answerText = question.correctAnswers.join('; ');
    } else if (question.type === 'N') {
        answerText = question.pairs.map(p => `${p.left} -> ${p.right}`).join('; ');
    }
    correctAnswerTextEl.textContent = answerText;
    correctAnswerDisplayEl.classList.remove('hidden');
}


// =========================================================
//                  V. LOGIC LƯU VÀ ĐIỀU HƯỚNG
// =========================================================

/** Lưu câu trả lời hiện tại của người dùng vào mảng userAnswers */
function saveUserAnswer(index) {
    if (isExamSubmitted) return; // Không lưu nếu đang ở chế độ xem lại

    const question = currentExam[index];
    let answer = null;
    
    if (question.type === 'C1') {
        const selectedRadio = document.querySelector(`input[name="q${question.id}"]:checked`);
        if (selectedRadio) {
            answer = selectedRadio.value;
        }
    } else if (question.type === 'CN') {
        const selectedCheckboxes = Array.from(document.querySelectorAll(`input[name="q${question.id}"]:checked`)).map(cb => cb.value);
        if (selectedCheckboxes.length > 0) {
            answer = selectedCheckboxes; 
        }
    } else if (question.type === 'N') {
        const matchingPairs = {};
        const selects = document.querySelectorAll('.match-select');
        let allSelected = true;
        
        selects.forEach(select => {
            if (select.value) {
                matchingPairs[select.dataset.leftItem] = select.value;
            } else {
                allSelected = false;
            }
        });
        
        if (Object.keys(matchingPairs).length > 0 && allSelected) {
             answer = matchingPairs; 
        }
    }
    
    if (answer !== null) {
        userAnswers[index] = answer;
    } else if (userAnswers[index] !== undefined) {
        userAnswers[index] = null; 
    }
}

/** Cập nhật trạng thái enabled/disabled của nút điều hướng */
function updateNavigationButtons() {
    // Luôn disable nút điều hướng trong chế độ xem lại (chỉ cho click nút số)
    if (isExamSubmitted) {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        submitBtn.style.display = 'none'; // Ẩn nút Nộp bài
        return;
    }
    
    // Chế độ làm bài bình thường
    submitBtn.style.display = 'block';
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentExam.length - 1;
}

// =========================================================
//                  VI. LOGIC CHẤM ĐIỂM
// =========================================================

/** Kiểm tra đáp án của 1 câu hỏi */
function checkAnswer(question, userAnswer) {
    if (userAnswer === null) return false;

    if (question.type === 'C1') {
        return userAnswer === question.correctAnswer;
    }
    
    if (question.type === 'CN') {
        const correct = question.correctAnswers.sort();
        const user = userAnswer.sort();
        if (correct.length !== user.length) return false;
        return correct.every((val, index) => val === user[index]);
    }
    
    if (question.type === 'N') {
        let isCorrect = true;
        for (const userLeft in userAnswer) {
            const userRight = userAnswer[userLeft];
            const correctPair = question.pairs.find(p => p.left === userLeft);
            
            if (!correctPair || correctPair.right !== userRight) {
                isCorrect = false;
                break;
            }
        }
        return isCorrect;
    }
    
    return false;
}

/** HÀM CHẤM ĐIỂM TOÀN BỘ BÀI THI */
function checkExam() {
    let correctCount = 0;
    let criticalFail = false;
    const results = []; 
    
    // 1. Chuyển sang chế độ xem lại
    isExamSubmitted = true;
    submitBtn.disabled = true;
    
    for (let i = 0; i < currentExam.length; i++) {
        const question = currentExam[i];
        const userAnswer = userAnswers[i];
        
        const isCorrect = checkAnswer(question, userAnswer);
        results.push(isCorrect);
        
        if (isCorrect) {
            correctCount++;
        }
        
        if (question.isCritical && !isCorrect) {
            criticalFail = true;
        }
        
        // Cập nhật màu trên progress bar
        const progressButton = document.querySelector(`.q-number[data-index="${i}"]`);
        progressButton.classList.remove('answered', 'active');
        if (isCorrect) {
            progressButton.classList.add('correct'); 
        } else {
            progressButton.classList.add('incorrect'); 
        }
        // Giữ nút số enabled cho chế độ xem lại
        progressButton.disabled = false;
    }
    
    const totalScore = correctCount;
    const isPassed = !criticalFail && totalScore >= 8; 

    // 2. Cập nhật Hộp Kết Quả 
    document.getElementById('correct-count').textContent = totalScore;
    document.getElementById('incorrect-count').textContent = TOTAL_QUESTIONS - totalScore;
    resultBoxEl.classList.remove('hidden');

    let statusMessage = document.getElementById('exam-status');
    if (!statusMessage) {
        statusMessage = document.createElement('h4');
        statusMessage.id = 'exam-status';
        resultBoxEl.prepend(statusMessage);
    }
    
    if (criticalFail) {
        statusMessage.textContent = "KHÔNG ĐẠT (Sai câu Điểm Liệt!)";
        statusMessage.style.color = 'red';
    } else if (isPassed) {
        statusMessage.textContent = "CHÚC MỪNG, ĐẠT YÊU CẦU!";
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = "CHƯA ĐẠT (Cần ôn tập thêm)";
        statusMessage.style.color = 'orange';
    }
    
    // 3. Hiển thị lại câu hiện tại (để disable input và show đáp án đúng)
    renderQuestion(currentQuestionIndex);
}

// =========================================================
//                  VII. KHỞI TẠO VÀ SỰ KIỆN
// =========================================================

/** HÀM KHỞI TẠO BÀI THI */
function initExam(examId = 1) {
    currentExamId = examId;
    isExamSubmitted = false; // Rất quan trọng: Reset trạng thái review
    
    currentExam = generateExam(); 
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    
    // Reset giao diện và các nút
    resultBoxEl.classList.add('hidden');
    submitBtn.disabled = false;
    correctAnswerDisplayEl.classList.add('hidden');

    // Cập nhật tab active
    document.querySelectorAll('.exam-tab').forEach(tab => {
        if (parseInt(tab.dataset.examId) === examId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    setupProgressBar(); 
    renderQuestion(currentQuestionIndex); 
}

// 1. Gắn sự kiện cho nút điều hướng (Dùng khi chưa nộp bài)
nextBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex < currentExam.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
    }
});

prevBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
    }
});

// 2. Gắn sự kiện cho nút Nộp bài
submitBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    checkExam();
});

// 3. Gắn sự kiện cho nút Làm Đề Mới (trong Result Box)
document.getElementById('select-new-exam-btn').addEventListener('click', () => {
    // Bắt đầu đề mới, giữ nguyên ID đề đang chọn (hoặc có thể reset về Đề 1)
    initExam(currentExamId); 
});

// 4. Gắn sự kiện cho các Tab chọn đề
examTabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('exam-tab')) {
        const newExamId = parseInt(e.target.dataset.examId);
        // Bắt đầu đề mới với ID đã chọn
        initExam(newExamId);
    }
});


// KHỞI ĐỘNG ỨNG DỤNG LẦN ĐẦU
initExam(1);