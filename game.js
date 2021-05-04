class Game{
    constructor(){
       
    }

 getState(){
    var gs = database.ref("gamestate");  
       gs.on("value", function read(data){
           gameState = data.val();
       });  
 }

 update(change){
    database.ref("/").update({
        gamestate : change  
    })
 }

 async start(){
     if(gameState == 0){
         form = new Form();
         form.display();
         
         player = new Player();
         var pc = await database.ref("playercount").once("value");
         if(pc.exists()){
           playerCount = pc.val();  
           player.getCount(); 
         }
     }
 }

 play(){
     form.hideForm();
     fill("green");
     textSize(40);
     text("🎉Game Started🎉", 70, 150); 
     player.getPlayerInfo();
     
     if(allPlayers !== undefined){
        var displayPos = 130;
        for(var i in allPlayers ){
            displayPos += 20
            textSize(10);
            text(allPlayers[i].name + ":" + allPlayers[i].distance, 50, displayPos);
        }
     }

     if(keyIsDown(UP_ARROW) && player.index !== null){
         player.distance += 20;
         player.updatePlayer();
     }
 }
}