

let underscores = [];
let usersGuess = '';
let word = ['MARLEY', 'PEANUT', 'BUGZY']
let currentWord;
let list;
let characterCount;
let winsCount = 0;


// set const variables for html elements that need updating on browser
const winsElement = document.getElementById('wins')
const currentWordElement = document.getElementById('currentWord')
const remainingLettersElement = document.getElementById('remainingLetters')
const lettersGuessedElement = document.getElementById('lettersGuessed')


// on page start up, we set the wins element to 0, program picks a random word (set to currentWord), updates remaining letter count
  function setup() {
    winsElement.textContent = winsCount;
    let randomIndex = Math.floor(Math.random() * word.length);
    currentWord = word[randomIndex];

    console.log(currentWord);
    characterCount = currentWord.length;
    remainingLettersElement.textContent = characterCount;




    // here we take currentWord and replace letters with underscores
    list = document.createElement('ul');
    
    for( let i = 0; i < currentWord.length; i++ ) {
      
      let item = document.createElement('li');
      item.style.display = 'inline';
      item.innerHTML = '_ ';
      underscores.push(item)
      list.appendChild(item);

    }
    currentWordElement.appendChild(list)
  }


  // here we begin running the game program (from setup function above) when/if characterCount/remaining letters = 0 (0 means user has not entered a letter key)

  if (characterCount !== 0) {
    setup();
  }


  // after setup funct runs program listens for user to press a key. program for this event is below...
  function getUserKey(event) {
    usersGuess = event.key
    let correct = false;

    for( let i = 0; i < currentWord.length; i++) {
      if (usersGuess.toLowerCase() === currentWord[i].toLowerCase()) {
        list.childNodes[i].textContent = currentWord[i];
        characterCount--;
        remainingLettersElement.textContent = characterCount;
        correct = true;
      }
    }

    if (!correct) {
      lettersGuessedElement.textContent += usersGuess;
    }

    if (characterCount === 0) {
      winsElement.textContent = winsCount++;
      setup();
    }


  }


  // this tells program to listen for user to press a key, once pressed getUserKey funct is called
  document.addEventListener('keyup', getUserKey);





















