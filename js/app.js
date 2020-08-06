'use strict'; 

var questionOne = prompt('What city was i born in? pittsburgh or utah')
if (questionOne.toLowerCase() === 'pittsburgh'){
  console.log ("got question currect")
    alert('The Iron city!')
  document.write('For question one you answered ' + questionOne + '. The Iron city!')
} else {
  alert('Close...')
  document.write('For question one you answered ' + questionOne + '. Close...')
}

var questionTwo = prompt('the rainest city in north america? hilo or ketchikan')
if (questionTwo.toLowerCase() === 'ketchikan'){
  console.log ("got question currect")
    alert('The First city')
  document.write('For question one you answered ' + questionTwo + '. The First city')
} else {
  alert('Close...')
  document.write('For question one you answered ' + questionTwo + '. Close...')
}

var questionThree = prompt('when did i move to Phoenix? 16 or 18?')
if (questionThree.toLowerCase() === '18'){
  console.log ("got question currect")
    alert('The valley of the sun')
  document.write('For question one you answered ' + questionThree + '. The valley of the sun')
} else {
  alert('Close...')
  document.write('For question one you answered ' + questionThree + '. Close...')
}

var questionFour = prompt('why did i move to anchorage')
if (questionFour.toLowerCase() === 'college'){
  console.log ("got question currect")
    alert('36 Crazyfists')
  document.write('For question one you answered ' + questionFour + '. Bitterness the star')
} else {
  alert('Close...')
  document.write('For question one you answered ' + questionFour + '. Close...')
}

var questionFive = prompt('my brother and me did what?')
if (questionFive.toLowerCase() === 'catering'){
  console.log ("got question currect")
    alert('...hippies')
  document.write('For question one you answered ' + questionFive + '. Pele is a angry god')
} else {
  alert('Close...')
  document.write('For question one you answered ' + questionFive + '. Close...')
}

// var wannaPlay = prompt('Do you want to play a gussing game, enter 1, if not enter 2');
  

var correctAnswer = 12;

var guest = 0


while(guest < 4){
  var userAnswer = prompt('Please enter a number between 1 and 20');
      console.log('the Guest' + guest);
        if(parseInt(userAnswer) === correctAnswer){
            alert('DING DING DING.  You got it right. 1 for yes, 2 for no');
            break;
        } else if(guest === 3 && parseInt(userAnswer) !== correctAnswer){  
            alert('times up neo')
            break;
           
         } else if (parseInt(userAnswer) < correctAnswer){
             guest++  
          alert('Incorrect, to low.  Try Again.');
            } else {
             guest++ 
          alert('Incorrect, to high.  Try Again.');
            }
        }


var correctAnswer2 = ['11,12,13'];

var guess = 0
        
while(guess < 7){
   var userAnswer = prompt('Please enter a number between 1 and 20');
   console.log('the Guest' + guess);
        if(parseInt(userAnswer) === correctAnswer2){
            alert('DING DING DING.  You got it right. 1 for yes, 2 for no');
              break;
                } else if(guess === 6 && parseInt(userAnswer) !== correctAnswer2){  
                    alert('11...12....13' + guess++)
                    break;
                   
                 } else if (parseInt(userAnswer) < correctAnswer2){
                     guess++ 
                  alert('Incorrect, to low.  Try Again.');
                    } else {
                     guess++ 
                  alert('Incorrect, to high.  Try Again.');
                    }
                }
        

    


