// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "Q1/12: It's Valentine's Day, and you're walking home after a long day. What's on your mind?",
        
        answers: {
            F: {
                text: "Ugh, another Valentine's alone... Why does every year feel the same?",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Should I treat myself to chocolate or a fancy dinner? Maybe both!",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q2/12: You pass by a flower shop, and a mysterious stranger suddenly hands you a red rose!",
        
        answers: {
            J: {
                text: "Who are they? Is this a prank? Check surroundings and analyze the situation",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "Woah, is this fate? Should I say thank you or ask for their name?",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "Q3/12: Before you can react, the stranger smiles and disappears into the crowd.",
    
        answers: {
            S: {
                text: "Maybe they just liked spreading kindness? Shrug and keep walking",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Is this some kind of secret admirer? Maybe I should find out more!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q4/12: You get a text from a friend inviting you to a Valentine’s party tonight!",
      
        answers: {
            F: {
                text: "Sounds fun! Maybe I’ll meet someone interesting!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Hmm, should I go? I have work tomorrow, and crowds aren’t my thing.",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q5/12: 'You arrive at the party and see a couple slow dancing. How do you feel?",
        
        answers: {
            P: {
                text: "Aww, that’s cute! Maybe I should join in and enjoy the moment?",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "Dancing? Nope. I’ll just grab some snacks and observe from afar.",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q6/12: A friendly stranger approaches and starts a conversation.",
      
        answers: {
            I: {
                text: "Oh no, small talk... Nods and listens politely",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "Great! Time to make a new friend or maybe more!",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q7/12: The conversation is going well! They ask about your dream date.",
      
        answers: {
            S: {
                text: "Something simple, like a cozy dinner or movie night.",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "An adventure! Maybe stargazing or a spontaneous road trip.",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q8/12: They offer to grab a drink for you. What do you pick?",
      
        answers: {
            E: {
                text: "Something fancy—maybe a fun cocktail to keep things exciting!",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Just a simple drink, I don’t want anything too flashy.",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q9/12: The party is getting livelier. What do you do?",
      
        answers: {
            J: {
                text: "Stick to my plans—have fun but leave early to rest up.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Stay longer! Who knows what fun surprises might happen?",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q10/12: The night is almost over. Your new friend asks for your number!",
       
        answers: {
            F: {
                text: "Of course! It’s nice to stay in touch and see where this goes.",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Hmm, I’ll think about it. Maybe I should get to know them more first.",
                scores: { F: 0, T: +1 },
            },
        },

    },
    {
        question: "Q11/12: You leave the party feeling...",
       
        answers: {
            S: {
                text: "Content. It was a nice time, but I’m happy to be heading home.",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Excited! What if this turns into something special?",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q12/12: As you walk home, you get a text from the stranger you met earlier!",
        
        answers: {
            I: {
                text: "Smiles but waits a bit before replying—don’t want to seem too eager.",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Texts back immediately—let’s keep the conversation going!",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "As you walk home, your phone buzzes with an unknown number. You glance around, and for a moment, you think you see the stranger from earlier watching you from across the street...",
     
        answers: {
            K: {
                text: "Wait… was that them? Should I go talk to them?",
            },
            U: {
                text: "Oh no… is this some kind of mysterious love story, or am I overthinking it?",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "istj.png",
    },
    "ISFJ": {
        image: "isfj.png"
    },
    "INFJ": {
        image: "infj.png"
    },
    "INTJ": {
        image: "intj.png"
    },
    "ISTP": {
        image: "istp.png"
    },
    "ISFP": {
        image: "isfp.png"
    },
    "INFP": {
        image: "infp.png"
    },
    "INTP": {
        image: "intp.png"
    },
    "ESTP": {
        image: "estp.png"
    },
    "ESFP": {
        image: "esfp.png"
    },
    "ENFP": {
        image: "enfp.png"
    },
    "ENTP": {
        image: "entp.png"
    },
    "ESTJ": {
        image: "estj.png"
    },
    "ESFJ": {
        image: "esfj.png"
    },
    "ENFJ": {
        image: "enfj.png"
    },
    "ENTJ": {
        image: "entj.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


