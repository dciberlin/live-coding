document.querySelector('.btn-new').addEventListener('click',newGame);
document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-hold').addEventListener('click',holdScore);

let roundScore,activePlayer,scores;

/*
* Click on the new game button then this event will fire.
*/
function newGame()
{
    console.log('newGame...');

    activePlayer=0;
    roundScore=0;
    scores=[0,0];
    

    //reset the global score
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;

    //reset the round score
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

    //remove active
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //by default assign active to player 1
    document.querySelector('.player-0-panel').classList.add('active');


}

/*
* when click on the roll dice button then this function will call/fire.
*/
function rollDice()
{
    console.log('rollDice...');

    //Generate random number from 1 to 6.
    let dice1=Math.ceil(Math.random()*6);
    console.log(dice1);
    
    //get the img element
    let diceImg=document.getElementById('dice-1');
    diceImg.src='dice-'+dice1+'.png';

    //store dice number into roundScore
    roundScore +=dice1;

    if(dice1!=1)
    {
        document.querySelector('#current-'+activePlayer).textContent= roundScore;
    }
    else{
        nextPlayer();
    }

}

function holdScore()
{
    console.log('holdScore...');

    console.log("activePlayer value ==>" +activePlayer);

    scores[activePlayer] +=roundScore;

    //#score-0 or #score-1
    document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];

    if(scores[activePlayer]>=100)
    {
        //winner
        document.querySelector('#name-'+activePlayer).textContent="WINNER";
        
        document.querySelector('player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('player-'+activePlayer+'-panel').classList.add('winner');
    }
    else
    {
        nextPlayer();
    }
}


function nextPlayer()
{
    console.log('nextPlayer...');

    //reset the roundScore
    roundScore=0;

    //find which player is active
    activePlayer ===0 ? activePlayer=1 : activePlayer=0;

     //reset the round score
     document.querySelector('#current-0').textContent=0;
     document.querySelector('#current-1').textContent=0;

     //change the active class 
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
}