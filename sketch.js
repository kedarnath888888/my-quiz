var canva;
var gameState=0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  database = firebase.database();

canvas = createCanvas(850,400);

quiz = new Quiz();
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");

  textSize(20);
  text("Question: what is the national bird of india ?",100,200);
  

 textSize(20);
  text("1.peacock",100,230);
  

  textSize(20);
  text("2.sparrow",100,250);

  textSize(20);
  text("3.kingfisher",100,270);


  textSize(20);
  text("4.dove",100,290);

  if(contestantCount === 4){
    gameState=1;
  }

  if(gameState ===1){
    quiz.play();
  }
  
  
}
