function getComputerChoice(){
    let num=Math.random();
    console.log(num);
    if(num<=1/3) return "rock";
    else if(num<=2/3) return "paper";
    else return "scissors";
}
// }console.log(getComputerChoice());

function getHumanChoice(){
    let move=prompt("Enter a move:");
    return move.toLowerCase();
}
//console.log(getHumanChoice());
 let humanScore=0;
 let computerScore=0;

// function playRound(humanChoice,computerChoice){
//     if(humanChoice==="rock"){
//         if(computerChoice==="rock"){ 
//            console.log("Tie");
//         }else if(computerChoice==="paper"){
//             console.log("You ,Lose!!");
//             computerScore+=1;
//         }else{
//             console.log("You ,WONNN!!!!!");
//             humanScore+=1;
//         }
//     }else if(humanChoice==="paper"){
//         if(computerChoice==="rock"){ 
//             console.log("You ,WONNN!!!!!");
//             humanScore+=1;
//          }else if(computerChoice==="paper"){
//             console.log("Tie");
//          }else{
//             console.log("You ,Lose!!");
//              computerScore+=1;
//          }
//     }else{
//         if(computerChoice==="rock"){ 
//             console.log("You ,Lose!!");
//             computerScore+=1;
//          }else if(computerChoice==="paper"){
//             console.log("You ,WONNN!!!!!");
//             humanScore+=1;
//          }else{
//             console.log("Tie");
//          }
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(){
    
    function playRound(humanChoice,computerChoice){
        if(humanChoice==="rock"){
            if(computerChoice==="rock"){ 
               console.log("Tie");
            }else if(computerChoice==="paper"){
                console.log("You ,Lose!!");
                computerScore+=1;
            }else{
                console.log("You ,WONNN!!!!!");
                humanScore+=1;
            }
        }else if(humanChoice==="paper"){
            if(computerChoice==="rock"){ 
                console.log("You ,WONNN!!!!!");
                humanScore+=1;
             }else if(computerChoice==="paper"){
                console.log("Tie");
             }else{
                console.log("You ,Lose!!");
                 computerScore+=1;
             }
        }else{
            if(computerChoice==="rock"){ 
                console.log("You ,Lose!!");
                computerScore+=1;
             }else if(computerChoice==="paper"){
                console.log("You ,WONNN!!!!!");
                humanScore+=1;
             }else{
                console.log("Tie");
             }
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log("your score is ",humanScore);
    console.log("computer's score is ",computerScore);
}
playGame();
playGame();
playGame();
playGame();
playGame();
