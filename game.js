let user_score = 0;
let computer_score = 0;

function computer_play(){
    let cm;
    cm = Math.floor(Math.random()*3);
    return cm;// 0 1 2
}

//Inputs
const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");

//Message Output
const mssg = document.querySelector(".act_mssg");
const mssgDiv = document.querySelector(".mssg_div");

//Score Display
const us_score = document.querySelector("#us_score");
const comp_score = document.querySelector("#comp_score");

rock.addEventListener("click",()=>{
    console.log("You chose: Rock!");
    if(computer_play() == 0){
        console.log("Computer chose: Rock!");
        console.log("Its a Draw!");
        mssg.innerText = "Its a Draw!";
        mssgDiv.style.background = "rgb(19, 143, 220)";
    }
    else if(computer_play() == 1){
        console.log("Computer chose: Paper!");
        console.log("You Lose!");
        mssg.innerText = "You Lose!";
        mssgDiv.style.background = "rgb(255, 0, 0)";
        computer_score++;
        comp_score.innerText = computer_score;
    }
    else{
        console.log("Computer chose: Scissor!");
        console.log("You Win!");
        mssg.innerText = "You Win!";
        mssgDiv.style.background = '#fc037f';
        user_score++;
        us_score.innerText = user_score;
    }
});

paper.addEventListener("click",()=>{
    console.log("You chose: Paper!");
    if(computer_play() == 1){
        console.log("Computer chose: Paper!");
        console.log("Its a Draw!");
        mssg.innerText = "Its a Draw!";
        mssgDiv.style.background = "rgb(19, 143, 220)";
    }
    else if(computer_play() == 0){
        console.log("Computer chose: Rock!");
        console.log("You Win!");
        mssg.innerText = "You Win!";
        mssgDiv.style.background = '#fc037f';
        user_score++;
        us_score.innerText = user_score;
    }
    else{
        console.log("Computer chose: Scissor!");
        console.log("You Lose!");
        mssg.innerText = "You Lose!";
        mssgDiv.style.background = "rgb(255, 0, 0)";
        computer_score++;
        comp_score.innerText = computer_score;
    }
});

scissor.addEventListener("click",()=>{
    console.log("You chose: Scissor!");
    if(computer_play() == 2){
        console.log("Computer chose: Scissor!");
        console.log("Its a Draw!");
        mssg.innerText = "Its a Draw!";
        mssgDiv.style.background = "rgb(19, 143, 220)";
    }
    else if(computer_play() == 1){
        console.log("Computer chose: Paper!");
        console.log("You Win!");
        mssg.innerText = "You Win!";
        mssgDiv.style.background = '#fc037f';
        user_score++;
        us_score.innerText = user_score;
    }
    else{
        console.log("Computer chose: Rock!");
        console.log("You Lose!");
        mssg.innerText = "You Lose!";
        mssgDiv.style.background = "rgb(255, 0, 0)";
        computer_score++;
        comp_score.innerText = computer_score;
    }
});





