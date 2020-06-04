var allWords = ["Venus",
"Sindhi",
"Sahara",
"Russia",
"Silver",
"Cuttack",
"Nepal",
"Peaty soil",
"Cotton",
"altimeter",
"Mumbai",
"H J Bhabha",
"Mosley",
"Mumbai",
"Hydrogen",
"Bauxite",
"Karnataka",
"Japan",
"Jaipur",
"Perambur",
"Anaemia",
"Rajasthan",
"Bangalore",
"Kolleru Lake",
"Lord William Bentinck",
"Trichloromethane",
"Ganga",
"vishakapatnam",
"Woolen textile",
"Tholkappiyam",
"Coimbatore",
"Maharashtra",
"Venus",
"Rahimulla Sayani",
"Hitler",
"Yamuna",
"Mulberry",
"Mahanadi",
"Carbon Dioxide",
"New York",
"Rice",
"London",
"Gujarat",
"Muslims",
"Lawn Tennis",
"Richard H Thaler",
"Kazuo Ishiguro",
"Films",
"Darjeeling",
"periscope",
"Uttar Pradesh",
"Calcutta",
"Mahabalipuram",
"Anaimudi",
"Chittaranjan Das",
"Dehradun",
"Jayadev",
"Pacific Ocean",
"Bihar",
"Arunachal Pradesh",
"Italy",
"Karnataka",
"Mumbai",
"Appa Sherpa",
"Arunachal Pradesh",
"Cuba",
"Sucheta Kripalani",
"Sahara Desert",
"Seoul",
"Jeff Bezos",
"Anemometer",
"Katherine Hepburn",
"USA",
"Christopher Columbus",
"Mount Everest",
"Mars",
"Tibetan Plateau",
"Tadpole",
"Camel",
"Chinese",
"Russia",
"Southampton",
"Austria",
"Australia",
"Russia",
"London",
"Holland",
"Italy",
"Paris",
"River Nile",
"Africa",
"Madrid"
];

var easyWords = [0,2,6,10,13,18,21,23,26,32,35,38,40,47,49,53,54,55,57,58,62,64,69,72,74,75,78,79,84,88,90,91];
var mediumWords = [1,5,8,9,14,16,17,22,27,28,30,31,34,37,39,42,48,50,51,59,61,65,67,70,73,76,77,80,82,86,87,89];
var hardWords = [3,4,7,11,12,15,19,20,24,25,29,33,36,41,43,44,45,46,52,56,60,63,66,68,71,81,83,85];

var meanings = ["Which planet is nearest to the Earth?",
"The language spoken by the people by Pakistan is ?",
"The World Largest desert is ?",
"Country that has the highest in Barley Production ?",
"The metal whose salts are sensitive to light is ?",
"The Central Rice Research Station is situated in ?",
"Mount Everest is located in ?",
"Which soil is suitable for agriculture ?",
"Black soils are best suited for the cultivation of ?",
"The device used for measuring altitudes is ?",
"The Gate way of India is in ?",
"The first chairman of the Atomic Energy Commission was ?",
"D.D.T. was invented by ?",
"Which is considered as the biggest port of India ?",
"The gas used for making vegetables is ?",
"The chief ore of Aluminium is ?",
"Sharavati projects is in ?",
"Country that was called as Land of Rising Sun ?",
"Pink city in India is ?",
"The famous Integral Coach Factory(ICF) for the manufacture of railway coaches are situated at ?",
"Deficiency of Iron leads to ?",
"The state which has more deserts in India is ?",
"The headquarters of the coffee board of India is ?",
"The largest fresh water lake in India is ?",
"Name the Governor General who abolished sati in 1829 ?",
"The chemical name of Chloroform is ?",
"The largest river in India is ?",
"The Hindustan Shipyard is located at ?",
"Punjab is famous for ?",
"The oldest literary work available in Tamil was ?",
"Which city is famous for Cotton Industry in TamilNadu ?",
"The state that has the largest number of Cotton textile mills ?",
"The hottest planet in the solar system ?",
"The first Muslim President of the Indian National Congress ?",
"'One People, One State, One leader' was the policy of ?",
"The river that flows through Delhi is ?",
"Name the plant important in sericulture ?",
"The most important river of Orissa is ?",
"Which gas is used for the preparation of Soda water ?",
"Headquarters of UNO are situated at",
"Which crop is sown on the largest area in India?",
"The value of Gold is determined in",
"Gir National Park is situated in",
"Madharasas are the schools of",
"Novak Djokovic is a famous player associated with the game of",
"Who has won the Nobel prize 2017 in economics?",
"Who has won the Nobel Prize 2017 in Literature?",
"'Oscar awards' given for excellent work in the field of",
"Where electricity supply was first introduced in India?",
"For seeing objects at the surface of water from a submarine under water, the instrument used is",
"The state which has the largest number of sugar mills in India is",
"First University in India was founded at",
"Shore temple is located at",
"The highest peak in South India is",
"The person who was also known as Deshbandhu",
"The capital of Uttarakhand is",
"Geet Govind is a famous creation of",
"Which is the largest and the deepest ocean of the world?",
"Which Indian state has the least literacy rate?",
"Which Indian state is inhabited by ‘Jaintiya tribes’?",
"Mount Etna is a famous volcano located in",
"Where is the Tungabhadra sanctuary located?",
"Reserve Bank of India is headquartered at",
"The person who has climbed Mount Everest the most(17 times) is",
"Which Indian state has its maximum area under the forest cover?",
"Which country is known as the ‘Sugar Bowl of the World’",
"The first woman Chief Minister of an Indian State is",
"Which is the third largest desert in the world",
"What is the capital of South Korea?",
"Who is the Chief Executive Officer of Amazon?",
"Which instrument is used for measuring wind speed?",
"Which actress has won the most Oscars?",
"Which country does volleyball originate from?",
"Which famous explorer discovered Cuba?",
"Which is the tallest mountain in the world?",
"Which planet is known as the Red Planet?",
"Which is the largest plateau in the world?",
"What is a baby frog called?",
"Which animal is known as the ‘Ship of the Desert?’",
"From which language is the word ‘ketchup’ derived?",
"Which is the country with the biggest population in Europe?",
"Which English city is often abbreviated to Soton?",
"In which country was Adolf Hitler born?",
"The Great Barrier Reef lies off the coast of which country?",
"What is the largest country in the world?",
"Where would you find the River Thames?",
"Which country is also known as the Netherlands?",
"In which country would you find the Leaning Tower of Pisa?",
"Where would you find the Eiffel Tower?",
"What is the longest river in the world?",
"What is the hottest continent on Earth?",
"What is the capital city of Spain?"
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
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => 
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
    // console.log(wordStatus);
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
