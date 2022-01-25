x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;

apple = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
    apple = loadImage("https://i.postimg.cc/CMst7W1q/apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
    to_number = Number(content);
    var content = event.results[0][0].transcript;
    if(Number.isInteger(to_number)){
        if(Number.isInteger(to_number)){
            document.getElementById("status").innerHTML = "Started Drawing the Apple/Apples";
            draw_apple = "set";
        }
        else{
            //suadh
        }
    }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas = createCanvas(1350, 600);
    background("green");
}

function draw() {
  if(draw_apple == "set")
  {
      for(var i = 1; i<=to_number; i++) {
          x = Math.floor(Math.random() * 700);
          y = Math.floor(Math.random() * 400);
          image(apple, x, y, 50, 50);
      }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data =to_number + "Apples drawn.";
}