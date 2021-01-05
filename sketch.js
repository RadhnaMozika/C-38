var db, dbref;
var PlayerCount = 0;
var GameState = 0;
var game, form, player;
var allPlayers;
var car1, car2, car3, car4;
var Cars = [];

function setup(){
    createCanvas(displayWidth, displayHeight);

    db = firebase.database();

    game = new Game();
    
    game.getState();

    game.start();


}

function draw (){

    if(PlayerCount === 4){
        game.update(1);
    }

    if(GameState === 1){
        clear();
        game.play();
    }
}


