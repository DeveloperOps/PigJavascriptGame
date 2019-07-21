/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, round , activeplayer, dice , IsGamePlaying ; 
// MATH.floor removes decimal number
//method to select ids 
// changing the id value with 0 using getelement  by id.
scores = [0,0];
round = 0;
activeplayer = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>';
var x  = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click' , function(){
   
         //when roll dice btn clicked
    // 1 random number
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    // 2 display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    //3 Update the round score
    if(dice !== 1) {
        //add the score 
        round += dice;
        document.getElementById('current-' + activeplayer).textContent = round;
    }else{
       nextPlayer();
        
} 
});

document.querySelector('.btn-hold').addEventListener('click' , function(){
   
        //Add score to global
    scores[activeplayer] += round;

    //updaate the user interface
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
    //Check if palyer won game
    
    if(scores[activeplayer] >=100){
        document.querySelector('#name-' + activeplayer).textContent = 'Winner';
        document.querySelector('.dice').style.display('none');
        document.querySelector('.player-'+ activeplayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activeplayer +'-panel').classList.remove('active');
        
    }else {
    // change the Player
    nextPlayer();
    }
   
});


function nextPlayer() {
     //change the player
     activeplayer===1 ? activeplayer = 0 : activeplayer=1;
     round = 0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style.display = 'none';
     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');
}



document.querySelector('.btn-new').addEventListener('click' ,function(){
    scores = [0,0];
    round = 0;
    activeplayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
});




