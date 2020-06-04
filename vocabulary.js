var allWords = ["adversary",
"aplomb",
"apprehensive",
"aptitude",
"attentive",
"banish",
"barricade",
"bluff",
"brackish",
"brandish",
"circumference",
"commotion",
"concoction",
"conspicuous",
"contortion",
"counter",
"cunning",
"debris",
"defiance",
"deft",
"destination",
"diminish",
"disdain",
"dismal",
"dispel",
"eavesdrop",
"egregious",
"ember",
"emerge",
"engross",
"exasperation",
"exhilarate",
"falter",
"foresight",
"fragrance",
"furtive",
"grueling",
"gusto",
"habitation",
"hasten",
"headway",
"ignite",
"illuminate",
"impending",
"imperious",
"jabber",
"jargon",
"jostle",
"jut",
"kindle",
"knoll",
"luminous",
"malleable",
"materialize",
"meander",
"meticulous",
"misgiving",
"momentum",
"monotonous",
"multitude",
"muster",
"narrate",
"obscure",
"ominous",
"outlandish",
"persistent",
"pertinent",
"plenteous",
"potential",
"precipice",
"pristine",
"quell",
"recluse",
"recuperate",
"replenish",
"repugnant",
"restitution",
"sabotage",
"scarcity",
"scurry",
"serenity",
"sociable",
"somber",
"specimen",
"stamina",
"subside",
"swagger",
"swarm",
"tactic",
"terse",
"translucent",
"uncanny",
"unsightly",
"versatile",
"vigilant",
"vulnerable",
"waft",
"waver",
"weather",
"zeal"];

var easyWords = [3,4,6,7,10,15,16,20,28,34,38,41,42,51,57,61,69,78,81,83,84,88,93,95,98,99];
var mediumWords = [0,2,9,13,17,21,29,31,32,33,36,39,40,46,49,52,53,55,56,59,65,67,74,76,80,85,90,92,94];
var hardWords = [1,5,8,11,12,14,18,19,22,23,24,25,26,27,30,35,37,43,44,45,47,48,50,54,58,60,62,63,64,66,69,70,71,72,73,75,77,79,82,86,87,89,91,96,97];

var meanings = ["someone who offers opposition",
"great coolness and composure under strain",
"in fear or dread of possible evil or harm",
"inherent ability",
"taking heed",
"send away from a place of residence, as for punishment",
"block off with barriers",
"deceive someone about your strength or intentions",
"slightly salty",
"move or swing back and forth",
"the size of something as given by the distance around it",
"confused movement",
"any foodstuff made by combining different ingredients",
"obvious to the eye or mind",
"a tortuous and twisted shape or position",
"speak in response",
"shrewdness as demonstrated by being skilled in deception",
"the remains of something that has been destroyed",
"a hostile challenge",
"skillful in physical movements; especially of the hands",
"the place designated as the end, as of a race or journey",
"decrease in size, extent, or range",
"lack of respect accompanied by a feeling of intense dislike",
"causing dejection",
"force to go away",
"listen without the speaker's knowledge",
"conspicuously and outrageously bad or reprehensible",
"a hot, smoldering fragment of wood left from a fire",
"come out into view, as from concealment",
"consume all of one's attention or time",
"a feeling of annoyance",
"fill with sublime emotion",
"move hesitatingly, as if about to give way",
"seeing ahead; knowing in advance; foreseeing",
"a distinctive odor that is pleasant",
"secret and sly or sordid",
"characterized by effort to the point of exhaustion",
"vigorous and enthusiastic enjoyment",
"the act of dwelling in or living permanently in a place",
"speed up the progress of or facilitate",
"forward movement",
"cause to start burning",
"make free from confusion or ambiguity",
"close in time; about to occur",
"having or showing arrogant superiority",
"talk in a noisy, excited, or declamatory manner",
"technical terminology characteristic of a particular subject",
"make one's way by pushing or shoving",
"extend out or project in space",
"call forth, as an emotion, feeling, or response",
"a small natural hill",
"softly bright or radiant",
"easily influenced",
"come into being; become reality",
"move or cause to move in a winding or curving course",
"marked by extreme care in treatment of details",
"uneasiness about the fitness of an action",
"an impelling force or strength",
"sounded or spoken in a tone unvarying in pitch",
"a large indefinite number",
"gather or bring together",
"give a detailed account of",
"not clearly understood or expressed",
"threatening or foreshadowing evil or tragic developments",
"noticeably or extremely unconventional or unusual",
"stubbornly unyielding",
"having precise or logical relevance to the matter at hand",
"affording an abundant supply",
"existing in possibility",
"a very steep cliff",
"completely free from dirt or contamination",
"overcome or allay",
"one who lives in solitude",
"restore to good health or strength",
"fill something that had previously been emptied",
"offensive to the mind",
"a sum of money paid in compensation for loss or injury",
"destroy property or hinder normal operations",
"a small and inadequate amount",
"move about or proceed hurriedly",
"the absence of mental stress or anxiety",
"friendly and pleasant",
"grave or even gloomy in character",
"an example regarded as typical of its class",
"enduring strength and energy",
"wear off or die down",
"a proud stiff pompous gait",
"move in large numbers",
"a plan for attaining a particular goal",
"brief and to the point",
"allowing light to pass through diffusely",
"surpassing the ordinary or normal",
"unpleasant to look at",
"able to move freely in all directions",
"carefully observant or attentive",
"capable of being wounded or hurt",
"be driven or carried along, as by the air",
"pause or hold back in uncertainty or unwillingness",
"face and withstand with courage",
"a feeling of strong eagerness"
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
    // if(letter === ' '){
    //     return ' ';        
    // }
    if(guessed.indexOf(letter) >= 0){
        return letter;
    }
    else{
        return " _ ";
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




