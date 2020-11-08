const urlString = window.location.href;
const url = new URL(urlString);
let slider;
let sfondo;
let tt= " ";
let x;

  function preload() {
    sfondo = loadImage("./assets/lady.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
//SLIDER
    slider = createSlider(0, 255, 1, 1);//slider(min, max, [value], [step])
    slider.position(width/6,height/2*1.7);
    slider.style('width', '80px');
    slider.class("cslider");

  //  //paragrafo
  // createP('What’s in a name?'+
  //   'That which we call a rose'+
  //   'by any other name'+
  // '  would smell as sweet.');
  }

  function draw() {
  background('AntiqueWhite');//color(252, 244, 232)
  //BOTTONE
  b1 = createButton('Crea la tua Rosa');
  b1.position(width/100, (height - 130));
  b1.size(200);
  b1.class("mainbutton");



  //immagine
  let val = slider.value();
  // let squareColor = color(100, 50, 100,val);
  // fill(squareColor);
  //ellipse(width/2,height/2,100);
  imageMode(CENTER);
  image(sfondo, width/2*1.5,height/1.7, sfondo.width*1.7 , sfondo.height*1.7 );
  }

  b1.mousePressed(window.open('sketch'));

  // dynamically adjust the canvas to the window
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
