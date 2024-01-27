const startBtn = document.getElementById("start-btn");
const startQuiz = document.getElementById("start-quiz");
const pg1 = document.getElementById("main-pg");
const pg2 = document.getElementById("pg-2");
const pg3 = document.getElementById("pg-3");
const closeIcon = document.getElementById("close-icon")

function togglepg1(){
    pg1.classList.toggle("hide");
    pg1.classList.toggle("show");
}
function togglepg2(){
    pg2.classList.toggle("hide");
    pg2.classList.toggle("show");
}
function togglepg3(){
    pg3.classList.toggle("hide");
    pg3.classList.toggle("show");
    togglepg2();
    togglepg1();

}
startBtn.addEventListener("click", togglepg2);
startQuiz.addEventListener("click", togglepg3);
closeIcon.addEventListener("click" , togglepg2);