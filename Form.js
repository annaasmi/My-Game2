class Form {

  constructor() {
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.instruction = createElement('h3');
    this.title = createElement('h2');
    //this.reset = createButton("reset");
  }
  hide(){
    this.greeting.hide();
    this.instruction.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Assassin's Slash");
    this.title.position(displayWidth/2 - 50, 0);

    this.instruction.html("Pick an Assassin then press play when ready");
    this.instruction.position(displayWidth/2 - 150, 50);

    this.button.position(displayWidth/2 + 30, displayHeight/2+100);

   // this.reset.position(displayWidth-100,20);

    /*this.reset.mousePressed(()=>{
       game.update(0);
       player.updateCount(0);
       player.updateCarsAtEnd(0);
       database.ref('/').child('players').remove();
    })*/

    this.button.mousePressed(()=>{
      this.button.hide();
     /* playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);*/
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
