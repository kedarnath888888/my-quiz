class Question{
    constructor(){
     this.input1=createInput("your name");
     this.input2= createInput("your answer");
    
     this.Q1 = createElement('h2');
     this.option1 = createElement('h2');
     this.option2 = createElement('h2');
     this.option3 = createElement('h2');
     this.option4 = createElement('h2');
    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        

    }
    display(){
        var title=createElement('h2');
        title.html("MY QUIZ");
        title.position(300,50);

        
       


        this.input1.position(500,50);
        this.input2.position(500,70);
        
    

   
}
}