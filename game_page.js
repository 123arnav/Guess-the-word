player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=player1_name+" = ";
document.getElementById("player2_name").innerHTML=player2_name+" = ";
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
question_player= player1_name;
answer_player=player2_name;
document.getElementById("Answer_turn").innerHTML=answer_player;
document.getElementById("question_turn").innerHTML=question_player;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    first_letter=word.charAt(1);
    console.log(first_letter);
    last_letter=word.length-1;
    last_letter=word.charAt(last_letter);
console.log(last_letter);
middle_letter=Math.floor(word.length/2);
middle_letter=word.charAt(middle_letter);
remove_letter1=word.replace(first_letter,"_");
remove_letter2=remove_letter1.replace(last_letter,"_");
remove_letter3=remove_letter2.replace(middle_letter,"_")
console.log(remove_letter3);
document.getElementById("word").value="";
document.getElementById("que").innerHTML=remove_letter3;
document.getElementById("output").style.display="block";
}
function check(){
  answer_word=document.getElementById("ans").value;
  answer=answer_word.toLowerCase();
  if (answer==word){
      if (answer_player==player1_name){
          player1_score=player1_score+1;
          document.getElementById("player1_score").innerHTML=player1_score;
          question_player=player1_name;
          answer_player=player2_name;
          document.getElementById("question_turn").innerHTML=question_player;
          document.getElementById("answer_turn").innerHTML=answer_player;
          document.getElementById("output").style.display="none";
      }
      else if (answer_player==player2_name){
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        question_player=player2_name;
        answer_player=player1_name;
        document.getElementById("question_turn").innerHTML=question_player;
        document.getElementById("answer_turn").innerHTML=answer_player;
        document.getElementById("output").style.display="none";
    }

  }
  else if(answer!=word){
    if (answer_player==player1_name){
        player1_score=player1_score-1;
        document.getElementById("player1_score").innerHTML=player1_score;
        question_player=player1_name;
        answer_player=player2_name;
        document.getElementById("question_turn").innerHTML=question_player;
        document.getElementById("answer_turn").innerHTML=answer_player;
        document.getElementById("output").style.display="none";
    }
    else if (answer_player==player2_name){
        player2_score=player2_score-1;
        document.getElementById("player2_score").innerHTML=player2_score;
        question_player=player2_name;
        answer_player=player1_name;
        document.getElementById("question_turn").innerHTML=question_player;
        document.getElementById("answer_turn").innerHTML=answer_player;
        document.getElementById("output").style.display="none";
    }
  }
}
