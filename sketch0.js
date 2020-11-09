

let slider;
let sfondo, cupido;
let tt;
let tt2;
let tt3;
let b1;

function preload() {
    sfondo = loadImage("./assets/lady.png");
    cupido = loadImage("./assets/icaro.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
//SLIDER
    slider = createSlider(0, 255, 0, 0.1);//slider(min, max, [value], [step])
    slider.position(width/4, height/2*1.7);
    slider.style('width', '100px');
    slider.class("cslider");
  }

  function draw() {
  background('AntiqueWhite');//color(252, 244, 232)

  //BOTTONE
  b1 = createButton('Crea una Rosa');
  b1.position(width/40, (height - 130));
  b1.size(300);
  b1.class("mainbutton");
  b1.mousePressed(x);

//testo
  tt='L’amour est une rose, chaque pétale une illusion, chaque épine la réalité.';
  tt2='L’amore è una rosa, ogni petalo un’illusione, ogni spina una realtà.';
  tt3='Charles Baudelaire';
  textFont('Beth Ellen');
  textSize(20);
  text(tt,width/20,height/7,400);
  text(tt3,width/20,height/2);

  textFont('Roboto Slab');
  textSize(20);
  text(tt2,width/20,height/4,320);


  //immagine
  let val = slider.value();
  // let squareColor = color(100, 50, 100,val);
  // fill(squareColor);
  //ellipse(width/2,height/2,100);
  imageMode(CENTER);
  tint(255, val); // Apply transparency without changing color
  image(sfondo, width/2*1.4,height/1.45, sfondo.width*2 , sfondo.height*2);
  tint(255, (255/val));
  image(cupido, width/2*1.35,height/2.7, sfondo.width*1.8 , sfondo.height*1.8 );
}

  function x(){
  window.open('index2.html','_self');
  }

  // dynamically adjust the canvas to the window
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
