var score=0;
function update(){
    score=score+1;
document.getElementById("score").innerHTML="score= "+score;
};
function save_score(){
localStorage.setItem("save_score",score)
window.location= "activity_2.html";

}