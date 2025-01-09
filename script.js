function getComputerChoice(){
    let num=Math.random();
    console.log(num);
    if(num<=1/3) return "rock";
    else if(num<=2/3) return "paper";
    else return "scissors";
}
// }console.log(getComputerChoice());

// function getHumanChoice(){
//     let move=prompt("Enter a move:");
//     return move.toLowerCase();
// }
//console.log(getHumanChoice());
let humanScore=0;
let computerScore=0;
let count=0;

let sg=document.querySelector('.sg');
let cg=document.querySelector('.cg');
let winner=document.querySelector("h1");

let rock=document.querySelector('.rock');
rock.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();

        if(computerChoice==="rock"){ 
           console.log("Tie");
           sg.textContent="Tie";
        }else if(computerChoice==="paper"){
            console.log("You ,Lose!!");
            sg.textContent="You ,Lose!!";
            computerScore+=1;
        }else{
            console.log("You ,WONNN!!!!!");
            sg.textContent="You ,WONNN!!!!!";
            humanScore+=1;
        }
        console.log("your score is ",humanScore);
        console.log("computer's score is ",computerScore);
        cg.innerHTML=`your score is : ${humanScore}.<br>
        Computer's score is : ${computerScore}`;
        count+=1;
        if(count===5){
            if(computerScore>=humanScore){
                winner.innerHTML="COMPUTER WINS";
            }else if(humanScore>=computerScore){
                winner.innerHTML="HUMAN WINS"
            }else{
                winner.innerHTML="It's a TIE";
            }
        }
});

let paper=document.querySelector('.paper');
paper.addEventListener('click',()=>{
        let computerChoice=getComputerChoice();

        if(computerChoice==="rock"){ 
            console.log("You ,WONNN!!!!!");
            sg.textContent="You ,WONNN!!!!!";
            humanScore+=1;
        }else if(computerChoice==="paper"){
            console.log("Tie");
            sg.textContent="Tie";
        }else{
            console.log("You ,Lose!!");
            sg.textContent="You ,Lose!!";
            computerScore+=1;
        }
        console.log("your score is ",humanScore);
        console.log("computer's score is ",computerScore);
        cg.innerHTML=`your score is : ${humanScore}.<br>
        Computer's score is : ${computerScore}`;
        count+=1;
        if(count===5){
            if(computerScore>=humanScore){
                winner.innerHTML="COMPUTER WINS";
            }else if(humanScore>=computerScore){
                winner.innerHTML="HUMAN WINS"
            }else{
                winner.innerHTML="It's a TIE";
            }
        }
    }
);



let scissor=document.querySelector('.scissor');
scissor.addEventListener('click',function(){
        let computerChoice=getComputerChoice();

        if(computerChoice==="rock"){ 
            console.log("You ,Lose!!");
            sg.textContent="You ,Lose!!";
            computerScore+=1;
        }else if(computerChoice==="paper"){
            console.log("You ,WONNN!!!!!");
            sg.textContent="You ,WONNN!!!!!";
            humanScore+=1;
        }else{
            console.log("Tie");
            sg.textContent="Tie";

        }
        console.log("your score is ",humanScore);
        console.log("computer's score is ",computerScore);
        cg.innerHTML=`your score is : ${humanScore}.<br>
        Computer's score is : ${computerScore}`;
        count+=1;
        if(count===5){
            if(computerScore>=humanScore){
                winner.innerHTML="COMPUTER WINS";
            }else if(humanScore>=computerScore){
                winner.innerHTML="HUMAN WINS"
            }else{
                winner.innerHTML="It's a TIE";
            }
        }
    }
);

if(count===5){
    if(computerScore>=humanScore){
        winner.innerHTML="COMPUTER WINS";
    }else if(humanScore>=computerScore){
        winner.innerHTML="HUMAN WINS"
    }else{
        winner.innerHTML="It's a TIE";
    }
}

// function playGame(){
    
//     function playRound(humanChoice,computerChoice){
//         if(humanChoice==="rock"){
//             if(computerChoice==="rock"){ 
//                console.log("Tie");
//             }else if(computerChoice==="paper"){
//                 console.log("You ,Lose!!");
//                 computerScore+=1;
//             }else{
//                 console.log("You ,WONNN!!!!!");
//                 humanScore+=1;
//             }
//         }else if(humanChoice==="paper"){
//             if(computerChoice==="rock"){ 
//                 console.log("You ,WONNN!!!!!");
//                 humanScore+=1;
//              }else if(computerChoice==="paper"){
//                 console.log("Tie");
//              }else{
//                 console.log("You ,Lose!!");
//                  computerScore+=1;
//              }
//         }else{
//             if(computerChoice==="rock"){ 
//                 console.log("You ,Lose!!");
//                 computerScore+=1;
//              }else if(computerChoice==="paper"){
//                 console.log("You ,WONNN!!!!!");
//                 humanScore+=1;
//              }else{
//                 console.log("Tie");
//              }
//         }
//     }
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);

//     console.log("your score is ",humanScore);
//     console.log("computer's score is ",computerScore);
// }





// in this example because we did not called any value like humanScore or computerScore in the parameters or passed it as an argument ,hence the true values of these variables were incremented in this example 
