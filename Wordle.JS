const buttons = document.getElementsByClassName('key');
const boxes = document.querySelectorAll('box');
const enter = document.getElementById('enterkey');
const deletekey = document.getElementById('deletekey');
const correctWord = 'coder';
// example word 
const row6 = document.querySelector('#row6').children;
const row5 = document.querySelector('#row5').children;
const row4 = document.querySelector('#row4').children;
const row3 = document.querySelector('#row3').children;
const row2 = document.querySelector('#row2').children;
const row1 = document.querySelector('#row1').children;
// Grabs the div boxes from the row with matching ID 
let guess = [];
let index = 0;
let rows = [row1, row2, row3, row4, row5, row6];
// making an array of all the rows
let rowIndex = 0 ;
// used to jump from div box to the next adding letters to every box
let guessAmount = 0;
//used to determine how many guesses the user is up to
  
    for (const button of buttons) {
        
        button.addEventListener ('click', function(){
            if (guessAmount == 0) {
                let row = rows[0]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent);
                rowIndex++;

            } else if (guessAmount == 1)  {
                let row = rows[1]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent) ;
                rowIndex++;
            } else if (guessAmount == 2)  {
                let row = rows[2]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent) ;
                rowIndex++;
            } else if (guessAmount == 3)  {
                let row = rows[3]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent) ;
                rowIndex++;
            } else if (guessAmount == 4)  {
                let row = rows[4]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent) ;
                rowIndex++;
            } else if (guessAmount == 5)  {
                let row = rows[5]
                let box = row[rowIndex];
                box.textContent = button.textContent;
                guess.push(button.textContent) ;
                rowIndex++;
            }  
        })
    
    }      

enter.addEventListener ('click', function(){ 

    if (guess.length != 5) {
            alert('Not enough letters');
            guessAmount--
            guess = []
    }
    // // if not enough letters wordle will reset that row of letters and notify the user     
    
    if (guessAmount == 5 && !(guess == correctWord)) {
        alert('You have failed the game')
    }
    // if (guess[index] == correctWord[index]) {
    //     alert('YOU WIN!!!')
    // }

    for (let index in guess) {

        let letter = guess[index]
        let correctLetter = correctWord[index]
        let row1Letter = row1[index]
        let row2Letter = row2[index]
        let row3Letter = row3[index]
        let row4Letter = row4[index]
        let row5Letter = row5[index]
        let row6Letter = row6[index]

            if (guessAmount == 0 && letter == correctLetter) {
                row1Letter.classList.add("correct")
            } else if (guessAmount == 0 && correctWord.includes(letter) ) {
                row1Letter.classList.add("wrongplace")
            }

            // checks which letters in row 1 are correct and each following if statements does the same but for the next line
            
            if (guessAmount == 1 && letter == correctLetter) {
                row2Letter.classList.add("correct")
            } else if (guessAmount == 1 && correctWord.includes(letter) ) {
                row2Letter.classList.add("wrongplace")
            }
            if (guessAmount == 2 && letter == correctLetter) {
                row3Letter.classList.add("correct")
            } else if (guessAmount == 2 && correctWord.includes(letter) ) {
                row3Letter.classList.add("wrongplace")
            }
            if (guessAmount == 3 && letter == correctLetter) {
                row4Letter.classList.add("correct")
            } else if (guessAmount == 3 && correctWord.includes(letter) ) {
                row4Letter.classList.add("wrongplace")    
            }
            if (guessAmount == 4 && letter == correctLetter) {
                row5Letter.classList.add("correct")
            } else if (guessAmount == 4 && correctWord.includes(letter) ) {
                row5Letter.classList.add("wrongplace")
            }
            if (guessAmount == 5 && letter == correctLetter) {
                row6Letter.classList.add("correct")
            } else if (guessAmount == 5 && correctWord.includes(letter) ) {
                row6Letter.classList.add("wrongplace")
            }
            
    }
    guess = [] 
    // resets the guess array so that the next guess can be compared again 
    guessAmount++;
    // addes another guess to the guess counter so that JS knows to go to the next line after enter is pressed
    rowIndex = 0;
    // resets the counter so that the box input starts from 0-4 again
    console.log(guessAmount)
    console.log(rowIndex)
})

deletekey.addEventListener('click', function(){
    let row = rows[guessAmount]
    rowIndex--
    let box = row[rowIndex];
    guess.pop() 
    box.textContent = ""
  })
 
// deletes the text content of the last box and removes the letter from the guess array