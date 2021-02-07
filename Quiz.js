class Quiz{
    constructor(){

    }
    getState(){
        var link = database.ref('gameState');
         link.on("value",function(data){
             gameState=data.val();
         })

     
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val();
           contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
    play(){
        question.hide();
        background("yellow");
        textSize(20);
        text("results",300,300);
        getContestantInfo();

       
            textSize(20);
            text ("the correct answers are in green color",300,320);

            for(var plr in allContestants){
                 contestant.answer===1;
                if(contestant.answer === allContestants[plr].answer)
                fill ('green');
                
                else 
                    fill ("red");
                
            
        }
    }
}