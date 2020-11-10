function makeSketch(id, hue, b) {
  let params = {
    // petali
    seeds: 500,
    seedsMin: 1,
    seedsMax: 2000,

    // angle (phi)
    angle: 360 * (Math.sqrt(5)-1) / 2,
    angleMax: 360,
    angleStep: 0.1,

    // raggio del petalo
    radius: 1,
    radiusMin: 0.1,
    radiusMax: 3,
    radiusStep: 0.1,
    seedColor: ['PaleVioletRed','Crimson','IndianRed','MediumOrchid','Teal'],//così facendo posso fare menu a tendina

    //iterazione
    label: 'Nome Rosa',
    bordo: false,

    // scale
    zoom: 7,
    zoomMax: 30,
    zoomStep: 0.1,

    opacity: 50,
    opacityMax: 255,

    bgColor: [hue, 50, b]

  };

  // this is the sketch function
  let sketch = function(p) {

    let gui;
    // contenitore canvas
    let div;
    p.setup = function() {
      // color mode used for interpreting param colors
      p.colorMode(p.HSB, 100, 255, 255, 100);
      //colorMode(mode, max1r, max2g, max3b, [maxA]) Hue/Saturation/Brightness (or Lightness)

      // all angles in degrees (0 .. 360)
      p.angleMode(p.DEGREES);

      // create a canvas that fills the div
      div = p.canvas.parentElement;
      p.createCanvas(div.clientWidth, div.clientHeight);

      // create the GUI from a settings object
      gui = p.createGui(this);
      gui.addObject(params);

      // only call draw when then gui is changed
      p.noLoop();

    }

    p.draw = function() {
      p.background(params.bgColor);

      // let the seeds be filleth
      let c = p.color(params.seedColor);
      p.fill(p.hue(c), p.saturation(c), p.brightness(c), params.opacity );
      p.stroke(0, params.opacity);

      // raggio del fiore
      let r = params.radius * params.zoom;

  //////////////////////////////////////////////////////////////////////////////////
//stroke
	if(params.bordo) {
		p.stroke(c);
	} else {
	 p.noStroke();
	}
p.textFont('Beth Ellen');
p.textSize(20);
p.text(params.label,div.clientWidth/3*2,div.clientHeight/6);

//costruzione forma
      p.push();
      // rose al centro
      p.translate(p.width/2, p.height/2);
      // rotazione intorno al centro
      for(let i = 0; i < params.seeds; i++) {
        p.push();
        p.rotate(i * params.angle);
                // distanza dal centro
        let d = p.sqrt(i + 0.5) * params.zoom;
        p.ellipse(d, 0, r, r+20);
        p.pop();
      }
      p.pop();
    }

    p.windowResized = function() {
      p.resizeCanvas(div.clientWidth, div.clientHeight);
    }

  }

  return new p5(sketch, id);

}
//per crearli in una singola pagina
let sketch1 = makeSketch('sketch1', 11,250);//id , hue
let sketch2 = makeSketch('sketch2', 13,200);
let sketch3 = makeSketch('sketch3', 8,255);
