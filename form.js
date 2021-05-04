class Form{
    constructor(){
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.greeting = createElement("h2");
    }

 display(){
   var title = createElement("h1");  
   title.html("CAR RACING GAME");
   title.position(345,10);
   
   
   this.input.position(375,150);
   this.button.position(400,180);
   
   this.button.mousePressed(() => {
    this.input.hide();
    this.button.hide();
   
    
    playerCount = playerCount+1;

    player.index = playerCount;
    player.updatePlayer();
    
    player.update(playerCount);

    this.greeting.html("Hello " + this.input.value())
    this.greeting.position(400,150);
   });
     
 }
 
 hideForm(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
 }
}