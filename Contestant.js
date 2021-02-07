class Contestant{
    constructor(){
    this.index=null;
    this.name= null;
    this.answer=null;
    this.button=createButton("submit");

    }
    getCount(){
        var link = database.ref('contestantCount');

        link.on("value",(data)=>{
            contestantCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }
    update(){
        var contestantIndex = "contestants/contestant"+ this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
            
        })
    }
    static getContestantInfo(){
        var connect = database.ref('contestants');
       connect.on("value",(data)=>{
           allcontestants=data.val();
       })
    }
 display(){

    this.button.position(620,90);      

    this.button.mousePressed(()=>{
        
        Question.hide();
       contestant.name=input1.value();
       contestant.answer=input2.value();
       contestantCount+=1;
       
       contestant.index = contestantCount;
       contestant.update(this.name);
       contestant.updateCount(contestantCount);

       
    })
 }
}