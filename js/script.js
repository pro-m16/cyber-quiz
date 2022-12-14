// getting the elements 

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");

// if start quix button clicked



// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

// exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0);
    queCounter(1);

}

let que_count = 0;
let que_numb = 1;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    // next_btn.classList.remove("show"); //hide the next button
}


quit_quiz.onclick = ()=>{
    window.location.reload();
}
// if \next button is click, move the index up by outline: 

next_btn.onclick = ()=>{
   if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    //next_btn.style.display = "none";
   }else{
        console.log("Questions Completed");
        showResultsBox();
   }
}

//getting questions from the array

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
   
    let que_tag = '<span>'+  questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"> '+ questions[index].options[0] + ' <span></span></div>'
                    + '<div class="option"> '+ questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }

}


function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    
    //console.log(correctAns);
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is correct");
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
    

        // if answer is incorrect disable the others
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    // once user selects we can then disable all options
    for (let i = 0; i < allOptions; i++) {
        option_list.chldren[i].classList.add("disabled");
    }

    //next_btn.style.display = "block";
}



function showResultsBox(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); // show result box
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>Congrats! you got <p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if (userScore > 1){
        let scoreTag = '<span>and nice, you got <p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry, you only got <p>'+ userScore +'</p> out of <p>'+ questions.length  +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
        
}


function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}