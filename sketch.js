var iniciarFase1 = false;
var iniciarFase2 = false;
var iniciarFase3 = false;
var iniciarFase4 = false;
var iniciarFase5 = false;

function preload() {}

function setup() {
  createCanvas(600, 800);
  background("yellow");
  start = createButton("Começar");
  start.position(width / 2 + 500, height / 2 + 200);
  start.size(100, 50);
}

function draw() {
  fill("black");
  textAlign(CENTER);
  textSize(50);
  textFont("fantasy");
  text("Modais de Transporte \n O Jogo", width / 2, height / 2);

  start.mousePressed(() => {
    iniciarFase1 = true;
    start.hide();
  });

  if (iniciarFase1) {
    fase1();
  }
  if (fase1Completa) {
    iniciarFase1 = false;
    iniciarFase2 = true;

    if (iniciarFase2) {
      fase2();
    }
  }
  if (fase2Completa) {
    iniciarFase2 = false;
    iniciarFase3 = true;
    fase3();
  }
}
