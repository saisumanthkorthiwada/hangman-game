var meanings = [ "Who is the first Indian woman to win an Asian Games gold in 400m run?",
"Sultan Azlan Shah Cup is related to which among the following Sports?",
"Which Indian umpire has been recently promoted as umpire for International Hockey Federation (FIH)?",
"Which was the 1st non Test playing country to beat India in an international match?",
"Which is the national sport of Canada?",
"The National Game of India is",
"Famous Tennis player Stefan Edberg belongs to",
"How long are professional Golf Tour players allotted per short?(in sec)",
"2010 Commonwealth Games held in?",
"Indonesia National game is?",
"Aparna Popat is a famous Indian",
"Who was the 1st president of BCCI ( Board of Control for Cricket in India )?",
"Which of the following countries won the final of the triangular cricket series held in Durban in February 1997?",
"Total number of gold medal won by Indian Hockey Team in Olympics",
"Sergey Bubka is associated with?",
"The term “Slam” is associated with",
"Geet Sethi is related to the game of",
"World cup of hockey is held after the gap of __ years",
"2014 FIFA World Cup will be held in",
"When was the first Common Wealth Games held?",
"Which Indian cricketer has bagged a deal with ESPN?",
"Who is the first Indian to take a hat trick in an international test?",
"Westchester Cup belongs to",
"Who is the world's greatest goal scorer?",
"How many players are there on each side in a baseball match?",
"Indian first took part in the Olympic Games in the year?",
"Holkar Trophy is associated with which sport?",
"Who is the first Indian woman to win an Asian Games gold in 400m run",
"With which game does Davis Cup is associated",
"The first Indian to cross seven important seas by swimming ____ ?",
"The name Kunjarani Devi is associated with",
"The 2017 Indian Premier League (IPL 2017) first match on 5 April, 2017 was held in ?",
"With which game does Santosh Trophy is associated",
"Wellington Trophy is related to which game ?",
"Against which team did Virender Sehwag make his one day international debut",
"Term Chinaman is related to which sports ?",
"The Indian football team made its first appearance at Olympics in",
"Dizzy is the nickname of what Australian player",
"Which one of the following Cricketers has been declared by the ICC as 'Cricketer of the Twentieth Century '",
"How many times did Geet Sethi win the IBSF World Billiards title?",
"The term ' Gambit ' is associated with",
"The National Game of Japan is",
"Which batsman started his international cricketing career at the age of 16",
"Where did MS Dhoni make his ODI debut ?",
"Pravin Amre and Vinod Kambli played for which province in south Africa",
"Who was first president of BCCI",
"Oval stadium in England is associated with",
"Nehru trophy is related to which game?",
"The 9th South Asian Federation Games were held in which of the following cities",
"' Queen's berry rules ' is the name given to the rules in",
"Who has scored the most Test hundreds ever",
"Who is appointed as ambassador for ICC Women's world cup 2017 by the ICC ?",
"Which Indian cricketer has bagged a deal with ESPN?",
"' Hopman cup ''  is related to which sports  ? ",
"How long are professional Golf Tour Players allotted per shot?(in sec)",
"Who is the only cricketer to score two successive centuries in a world cup?",
"Where did Yuvaraj Singh make his ODI debut",
"Monica Seles is associated with which of the following games",
"India won its first Olympic hockey gold in",
"What is the middle name of the world class batsman Sachin Tendulkar",
"Boat race is a famous festival game of",
"Who received the Wisden Award for the 'Indian Cricketer of the 20th Century?",
"Which team won the 10th Indian Premier League trophy 2017  ?",
"Ezra cup is associated with which sports?",
"Which country sent the most number of athletes to the 2018 Asian Games?"
];

var easyWords = [3,4,5,15,17,18,20,21,24,27,31,34,35,42,43,46,50,59,60];
var mediumWords = [8,9,10,13,16,19,23,28,30,32,36,38,40,41,47,49,51,52,55,56,58,61,62,63];
var hardWords = [0,1,2,6,7,11,12,14,22,25,26,29,33,37,39,44,45,48,53,54,57,64];

var allWords = ["Kamaljit Sandhu",
"Hockey",
"Durga Thakur",
"Sri Lanka",
"Ice hockey",
"Hockey",
"Sweden",
"45",
"India",
"Badminton",
"Badminton Player",
"R E Grant Govan",
"South Africa",
"8",
"Pole Vault",
"Tennis",
"Billiards",
"4",
"London",
"1930",
"Sachin Tendulkar",
"Harbhajan Singh",
"Polo",
"Pele",
"5",
"1920",
"Bridge",
"P T Usha",
"Lawn Tennis",
"Bula Chaudhury",
"Weight Lifting",
"Hyderabad",
"National Football",
"Rowing",
"Pakistan",
"Cricket",
"1948",
"Jason Gillespie",
"Kapil Dev",
"3",
"Chess",
"Sumo wrestling",
"Sachin Tendulkar",
"Chiittagong",
"Boland",
"R E Grant Govan",
"Cricket",
"Football",
"Islamabad",
"Boxing",
"Sachin Tendulkar",
"Sachin Tendulkar",
"Sachin Tendulkar",
"Lawn Tennis",
"45",
"Rahul Dravid",
"Nairobi",
"Tennis",
"1928",
"Ramesh",
"Kerala",
"Kapil Dev",
"Mumbai Indians",
"Polo",
"Indonesia",
"Sri Lanka"
];

let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
var levelNo = 0;

function randomWord() {
    let i=0;
    switch(levelNo){
        case 0: i = Math.floor(Math.random() * (easyWords.length));
        k = easyWords[i];
        break;
        case 1: i = Math.floor(Math.random() * (mediumWords.length));
        k = mediumWords[i];
        break;
        case 2: i = Math.floor(Math.random() * (hardWords.length));
        k = hardWords[i];
        break;
    }
    document.getElementById('wordMeaning').innerHTML = 'HINT: '+ meanings[k];
    answer = allWords[k].toUpperCase();
}

function generateButtons() {
    // let numbuttonsHTML = '0123456789'.split('').map(letter => 
    //     `
    //         <button
    //         id ='` + letter + `'
    //         onClick = "handleGuess('` + letter + `')">
    //          ` + letter + `
    //         </button>
    //     `).join('');
    // document.getElementById('numkeyboard').innerHTML = numbuttonsHTML;
    let buttonsHTML = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => 
        `
            <button
            id ='` + letter + `'
            onClick = "handleGuess('` + letter + `')">
             ` + letter + `
            </button>
        `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
    
}

function guessedWord() {
    wordStatus = answer.split('').map( letter => making(letter) ).join('');

    document.getElementById('wordSpotLight').innerText = wordStatus;
    console.log(wordStatus);
}

function making(letter) {
    if(letter === ' '){
        return ' ';        
    }
    if(guessed.indexOf(letter) >= 0){
        return letter;
    }
    else{
        return "*";
    }
}

function handleGuess(choosenLetter) {
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    document.getElementById(choosenLetter).setAttribute('disabled',true);

    if(answer.indexOf(choosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    }
    else if(answer.indexOf(choosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
    }
}

function checkIfGameWon() {
    if(wordStatus === answer ){
    document.getElementById('display').innerHTML = '<h1> You WON!! </h1>';
    document.getElementById('keyboard').innerHTML = '';
    document.getElementById('rstbtn').innerHTML = 'Play Again';
    }
}

function checkIfGameLost() {
    if(mistakes === maxWrong ){
    document.getElementById('wordSpotLight').innerHTML = 'The Correct Word is "' + answer + '"';
    document.getElementById('display').innerHTML = '<h1> You Lost!! </h1>';
    document.getElementById('keyboard').innerHTML = '';
    document.getElementById('rstbtn').innerHTML = 'Play Again'; 
    }
}


function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
    document.getElementById('hangmanPic').src = "hg"+mistakes+".png";
}



function reset() {
    document.getElementById('hangmanPic').src = "hangman0.png";
    mistakes = 0;
    guessed = [];
    
    document.getElementById('rstbtn').innerHTML = 'Quit';
    document.getElementById('display').innerHTML = '';


    randomWord();
    guessedWord();
    generateButtons();
    updateMistakes();
}

function easyLevel() {
    levelNo = 0;
    reset();
    document.getElementById('easy').style.backgroundColor = 'white';
    document.getElementById('medium').style.backgroundColor = 'rgb(121, 186, 189)';
    document.getElementById('hard').style.backgroundColor = 'rgb(121, 186, 189)';
}
function mediumLevel() {
    levelNo = 1;
    reset();
    document.getElementById('easy').style.backgroundColor = 'rgb(121, 186, 189)';
    document.getElementById('medium').style.backgroundColor = 'white';
    document.getElementById('hard').style.backgroundColor = 'rgb(121, 186, 189)';
}
function hardLevel() {
    levelNo = 2;
    reset();
    document.getElementById('easy').style.backgroundColor = 'rgb(121, 186, 189)';
    document.getElementById('medium').style.backgroundColor = 'rgb(121, 186, 189)';
    document.getElementById('hard').style.backgroundColor = 'white';
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();





