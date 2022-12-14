// getting the elements 

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");

// if start quix button clicked

start_btn.onClick = ()=>{
    info_box.classList.add("activeInfo");
}