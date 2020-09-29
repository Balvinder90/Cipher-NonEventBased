
// Declare UI Variables

let cipher = document.getElementById("cipher");
let decipher = document.getElementById("decipher");
let error = document.querySelector(".error");
let input = document.querySelector("input");
let submit = document.getElementById("button");
let result = document.getElementById("result");

// Declare App Variables

let word; 
let newWord = "";
let isCipher;

// Click Events

document.querySelector("#container").addEventListener("click", function(e) {

  if (e.target.id === "cipher") {
    isCipher = true;
    cipher.style.color = "#9bfeb7";
    decipher.style.color = "#3cab5b";
    return false;
  } else if (e.target.id === "decipher") {
    isCipher = false;
    cipher.style.color = "#3cab5b";
    decipher.style.color = "#9bfeb7";
    return false;
  } else if (e.target.id === "submit") {

    e.preventDefault();

    word = input.value;

    word = word.toLowerCase();

    let regExp = /([A-Z0-9])/gi.test(word);

    if (regExp === true && isCipher !=null ) {

      for (let i = 0; i < word.length; i++) {

      switch(word[i])

    {

      case "a": isCipher ?  newWord += 'd' : newWord += 'x';
      break;

      case "b": isCipher ?  newWord += 'e' : newWord += 'y';
      break;

      case "c": isCipher ?  newWord += 'f' : newWord += 'z';
      break;

      case "d": isCipher ?  newWord += 'g' : newWord += 'a';
      break;  
        
      case "e": isCipher ?  newWord += 'h' : newWord += 'b';
      break;

      case "f": isCipher ?  newWord += 'i' : newWord += 'c';
      break;

      case "g": isCipher ?  newWord += 'j' : newWord += 'd';
      break;

      case "h": isCipher ?  newWord += 'k' : newWord += 'e';
      break;

      case "i": isCipher ?  newWord += 'l' : newWord += 'f';
      break;

      case "j": isCipher ?  newWord += 'm' : newWord += 'g';
      break;  
        
      case "k": isCipher ?  newWord += 'n' : newWord += 'h';
      break;

      case "l": isCipher ?  newWord += 'o' : newWord += 'i';
      break;

      case "m": isCipher ?  newWord += 'p' : newWord += 'j';
      break;

      case "n": isCipher ?  newWord += 'q' : newWord += 'k';
      break;

      case "o": isCipher ?  newWord += 'r' : newWord += 'l';
      break;

      case "p": isCipher ?  newWord += 's' : newWord += 'm';
      break; 
        
      case "q": isCipher ?  newWord += 't' : newWord += 'n';
      break;

      case "r": isCipher ?  newWord += 'u' : newWord += 'o';
      break;

      case "s": isCipher ?  newWord += 'v' : newWord += 'p';
      break;

      case "t": isCipher ?  newWord += 'w' : newWord += 'q';
      break;

      case "u": isCipher ?  newWord += 'x' : newWord += 'r';
      break;

      case "v": isCipher ?  newWord += 'y' : newWord += 's';
      break;

      case "w": isCipher ?  newWord += 'z' : newWord += 't';
      break;

      case "x": isCipher ?  newWord += 'a' : newWord += 'u';
      break;

      case "y": isCipher ?  newWord += 'b' : newWord += 'v';
      break;

      case "z": isCipher ?  newWord += 'c' : newWord += 'w';
      break;

      case "0": isCipher ?  newWord += '3' : newWord += '7';
      break;

      case "1": isCipher ?  newWord += '4' : newWord += '8';
      break;

      case "2": isCipher ?  newWord += '5' : newWord += '9';
      break;

      case "3": isCipher ?  newWord += '6' : newWord += '0';
      break;

      case "4": isCipher ?  newWord += '7' : newWord += '1';
      break;

      case "5": isCipher ?  newWord += '8' : newWord += '2';
      break;

      case "6": isCipher ?  newWord += '9' : newWord += '3';
      break;

      case "7": isCipher ?  newWord += '0' : newWord += '4';
      break;

      case "8": isCipher ?  newWord += '1' : newWord += '5';
      break;

      case "9": isCipher ?  newWord += '2' : newWord += '6';
      break;

      case "!": isCipher ?  newWord += '!' : newWord += '!';
      break;

      case "@": isCipher ?  newWord += '@' : newWord += '@';
      break;

      case "_": isCipher ?  newWord += '_' : newWord += '_';
      break;

      case ".": isCipher ?  newWord += '.' : newWord += '.';
      break;

      case ",": isCipher ?  newWord += ',' : newWord += ',';
      break;

      case " ": isCipher ? newWord += " " : newWord += " ";
      break;

    }
          
      }  } else {

          error.style.opacity = 100;
          result.style.opacity = 0;
          setTimeout(function(){error.style.opacity = 0;}, 1300);
          return false;
    }

  } else {
    return false;
  }

  result.innerText = newWord;
  result.style.opacity = 100;
  newWord = "";
  word = "";
});




