class Player{
    constructor(){
        this.index = null;
        this.name = null; 
        this.distance = 0;
    }

 getCount(){ 
     var pc = database.ref("playercount");
     pc.on("value",(data) => {
      playerCount = data.val();
     });
 } 
 
 update(count){
     database.ref("/").update({
         playercount :  count
     })
 }
 
 updatePlayer(){
     var playerIndex = "players/player"+this.index;
     database.ref(playerIndex).set({
         distance : this.distance,
         name : this.name               
     })
 }

 getPlayerInfo(){
     var PlayerInfo = database.ref("players");
     PlayerInfo.on("value",(data)=>{
         allPlayers = data.val();
     })
 }
 
}