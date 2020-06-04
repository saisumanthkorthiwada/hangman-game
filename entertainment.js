var allWords = ["AWE",
"BAAHUBALI THE BEGINNING",
"RANGASTHALAM",
"BAAHUBALI THE CONCLUSION",
"ATHARINTIKI DAAREDI",
"SRIMANTHUDU",
"ARJUN REDDY",
"MAGADHEERA",
"BHARAT ANE NENU",
"DOOKUDU",
"POKIRI",
"MANAM",
"RACE GURRAM",
"EEGA",
"JANATHA GARAGE",
"MAHANATI",
"OOPIRI",
"GABBAR SINGH",
"FIDAA",
"MIRCHI",
"NANNAKU PREMATHO",
"PELLI CHOOPULU",
"BOMMARILLU",
"GOODACHARI",
"TEMPER",
"ARYA",
"VEDAM",
"MAYABAZAR",
"ATHADU",
"MAHARSHI",
"THOLIPREMA",
"YEVADU",
"HIT",
"MADHA",
"KSHANAM",
"KANCHE",
"SARILERU NEEKEVVARU",
"ALA VAIKUNTHAPURRAMLOO",
"AGENT SAI SRINIVASA ATHREYA",
"JERSEY",
"MATHU VADALARA",
"EVARU",
"BROCHEVAREVARURA",
"DRUSHYAM",
"PRASTHANAM",
"LEADER",
"HAPPY DAYS",
"KICK",
"MAMMADHUDU",
"KHUSHI",
"SHIVA",
"RAKSHASUDU",
"CHITRALAHARI",
"MAJILI",
"MALLESHAM",
"BHEESHMA",
"DISCO RAJA",
"JAANU",
"NOTA",
"PRESSURE COOKER",
"VENKY MAMA",
"GADDALAKONDA GANESH",
"DEAR COMRADE",
"ISMART SHANKAR",
"GEETHA GOVINDAM",
"TIK TIK TIK",
"SAAHO",
"SARRAINODU",
"AGNYAATHAVAASI",
"BUSINESS MAN",
"RUDHRAMADEVI",
"GAUTAMIPUTRA SATAKARNI",
"SATHAMANAM BHAVATI",
"SOGGADE CHINNI NAYANA",
"GENTLEMAN",
"WORLD FAMOUS LOVER",
"TAXIWALA",
"MEEKU MAATHRAME CHEPTHA",
"LIFE IS BEAUTIFUL",
"NENU LOCAL",
"NINNU KORI",
"KRISHNARJUNA YUDHAM",
"ALA MODALAINDI",
"YE MAAYA CHESAVE",
"TADAKHA",
"ARJUN SURAVARAM",
"KARTHIKEYA",
"SWAMY RA RA",
"EKKADIKI POTHAVU CHINNAVADA",
"ISHQ",
"HRUDAYA KALEYAM",
"RANARANGAM",
"MAHANUBHAVUDU",
"JULAYI",
"JAI LAVA KUSA",
"PRATI ROJU PANDAGE",
"BHAAGAMATHIE"
];

var easyWords = [1,3,9,11,13,20,29,30,34,36,39,46,47,49,51,55,57,58,62,64,65,66,75,79,80,86,92,93,95];
var mediumWords = [0,2,9,13,17,21,29,31,32,33,36,39,40,46,49,52,53,55,56,59,65,67,74,76,80,85,90,92,94];
var hardWords = [0,2,7,9,10,12,16,18,19,21,23,24,26,27,31,33,38,41,42,43,44,48,54,56,59,61,67,69,72,73,76,77,82,84,88,90,91];

var meanings = ["Out of box Psychology class",
"First Telugu film to gross highest collections in India",
"Hero with deficiency",
"Pan-India Film",
"Pawan Kalyan's Hit",
"Hero adopts a village",
"A massive impact film",
"Re-birth concept",
"A young people's leader",
"A cop to save his father",
"All time telugu industry hit",
"Three generations",
"A Surender Reddy's film",
"Man becomes creature in next birth",
"Ichata anni repair lu cheyabadunu!",
"A tribute to a vintage actress",
"Mutli starrer movie",
"Power packed hit as a cop",
"A memorable village love story which eventually enroutes to US",
"Movie of Koratala Shiva",
"Love and care towards Father",
" New and young talented crew made huge success",
"Strict Father",
"Spy thriller",
"Rowdy Poilce officer",
"Sukumar's benchmark love story",
"Five people whose destinies get entangled with each other",
"Ancient Glory of Indian Cinema",
"Trivikram and Mahesh babu combo",
"Successful CEO returns to help his friend",
"Remarkable Love story at recent times",
"Revenges on his lover's murderer",
"Nail biting Suspense thriller",
"Psychic Thriller of a Debut director",
"Investigating ex-girlfriend's daughter missing case",
"Situations based on World War-II",
"Never Beforu! Ever Afteru!",
"Allu Arjun, Pooja Hegde",
"A Nellore-based detective",
"Sport-based Emotional mark of Telugu industry",
"Delivery agents on money chase, lands in troubles",
"Remake of a Bollywood film which was already a remade film",
"Story of three friends leads to various problems",
"Family gets involved in a grave crime",
"Political based classic film",
"Rana, Shekhar Kammula's Mark film",
"Joyful life of BTech students",
"Ravi Teja's comedy entertainer",
"Beautiful love story, remarkable comedy",
"Siddhu..Siddhartha Roy",
"Creating a new era, considered before and after this film",
"Serial Killer suspense thriller",
"A failure person's Success story",
"Same combo after marriage",
"A Small film grabs National Awards",
"Single Forever",
"A dead man is revived by medical technologies",
"Remake of Tamil Classic hit",
"Rowdy CM",
"Struggles about US dreams",
"Multi-starrer, Uncle who takes care of his son-in-law",
"Mass Appearance of gangster",
"Fight for what you love",
"Double Sim card",
"Mass hero's classy hit",
"Movie related to space",
"High budget with huge expectations",
"Boyapati Srinu Film",
"Disappointed movie for awaited fans",
"Mumbai Local gangster",
"Glory of Telangana lady",
"100th film of an actor",
"Smooth family entertainer",
"Veteran actor's comeback movie",
"Two shaded suspense film",
"A Disastrous movie of young talented actor",
"Musical magic made movie hit",
"A director's debut as Hero",
"Depicting Rich and Poor",
"Attitude is everything",
"Pallavi and Uma",
"Look-alikes come together to solve their problems",
"Directed by Nandini Reddy",
"A pure ever-green classical love story",
"Multi Starrers as brothers",
"Journalist suspense thriller",
"Mystery of a dangerous temple",
"Pretty thieves stoles golden idol",
"Horror thriller",
"Young Actor's life-giving film",
"Unexpected lame hit",
"Kind hearted gangster story",
"Obsessive Compulsive Disorder-OCD",
"Smart hero - Intelligent villian, Trivikram's celluloid",
"Triple Action Combo",
"Grand father's wishes to enjoy his last days",
"Imprisoned in a haunted house"
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

