class Form {

  constructor() {
    this.username = createInput("User Name");
    this.SignInbutton = createButton('SIGN IN');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.sportName = createInput('h2');
    this.time = createSelect();
    this.intensity = createSelect();
    //this.addFriend = createInput('h2');
    //this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.username.hide();
    this.title.hide();
    this.SignInbutton.hide();
    this.sportName.hide();
    this.time.hide();
    this.intensity.hide();
    //this.addFriend.hide();
  }

  display(){
    this.title.html("Challenge App");
    this.title.position(displayWidth/2 - 50, 0);

    this.SignInbutton.position(displayWidth/2 - 50, 200);

    //this.reset.position(displayWidth/2 - 100,20);

    this.SignInbutton.mousePressed(()=>{
      this.username.position(displayWidth/2,displayHeight/2 - 100);
      this.signInButton.position(displayWidth/2,displayHeight/2 + 100);
      
        this.signInButton.mousePressed(()=>{
          this.username.hide();
          this.signUp.hide();

          player.name = this.username.value();
          //playerCount+=1;
          //player.index = playerCount;
          player.update();
          //player.updateCount(playerCount);
          this.greeting.html(player.name + " has succefully logged in!");
          this.greeting.position(displayWidth/2 - 120, displayHeight/2);
        })
    });

  }
}
