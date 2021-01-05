class Form {
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.greeting = createElement("h3");

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }


    display(){
        var title = createElement("h2");
        title.html("CarRacingGame");
        title.position(displayWidth/2-50, 50);

        
        this.input.position(displayWidth/2-50, displayHeight/2);

        this.button.position(displayWidth/2+100, displayHeight/2);

        

        this.button.mousePressed(()=>{ 
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount = PlayerCount + 1;
            player.index = PlayerCount;
            player.updateCount(PlayerCount);
            player.updateName();
            this.greeting.html("Hello, "+player.name);
            this.greeting.position(displayWidth/2-20, displayHeight/4);
         })
    }

}