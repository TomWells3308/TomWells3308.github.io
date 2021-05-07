drawnFlowersX=[];
drawnFlowersY=[];
drawnFlowersSC=[];
drawnFlowersSL=[];
drawnFlowersHC=[];
drawnFlowersPC=[];
drawnFlowersPE=[];
let placeButton;

function setup() {
  createCanvas(800, 600);
  place=true;
  setupButtons()
}

function setupButtons(){
  placeButton = createButton('Summon Flower');
  placeButton.position(800, 263);
  placeButton.size(106,60)
  placeButton.mousePressed(setFalse);
}

function setFalse(){
  if(checkValidation()==true){
    console.log("TEST")
    place=false;
  } else {
        alert("Pick Number Between 1-10 for Stem Length/nPick Number above 0 for Petals");
  }
}

function draw() {
  let pcolor;
  let scolor;
  let stemLength;
  let hcolor;
  let petals;
  let x = mouseX;
  let y = mouseY;
  setBackground();
  for(let i = 0; i < drawnFlowersX.length; i++){
    x = drawnFlowersX[i];
    y = drawnFlowersY[i];
    scolor = drawnFlowersSC[i];
    stemLength = drawnFlowersSL[i];
    fill(hexToRgb(scolor).r,hexToRgb(scolor).g,hexToRgb(scolor).b); //stem colour
    noStroke();
    //translate(x,y);
    rect(x-10,y, 20, stemLength*15)
    //translate(-x, -y);

    hcolor = drawnFlowersHC[i];
    petals = drawnFlowersPE[i];

    fill(hexToRgb(hcolor).r,hexToRgb(hcolor).g,hexToRgb(hcolor).b); //head colour
    stroke(127, 63, 120);
    translate(x, y);
    noStroke();
    for (let i = 0; i < petals; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/(petals/2));
    }
      translate(-x, -y);
      pcolor = drawnFlowersPC[i];

      fill(hexToRgb(pcolor).r,hexToRgb(pcolor).g,hexToRgb(pcolor).b); //pistil colour
      noStroke();
      //translate(x,y);
      circle(x, y, 30)
      //translate(-x, -y);
  }
  if(place==false){
    x=mouseX;
    y=mouseY;
    let scolor = document.getElementById("stem").value
    let stemLength = document.getElementById("stemLength").value
    fill(hexToRgb(scolor).r,hexToRgb(scolor).g,hexToRgb(scolor).b,127); //stem colour
    noStroke();
    //translate(x,y);
    rect(x-10,y, 20, stemLength*15)
    //translate(-x, -y);
    
    let pcolor = document.getElementById("pistil").value

    fill(hexToRgb(pcolor).r,hexToRgb(pcolor).g,hexToRgb(pcolor).b,127); //pistil colour
    noStroke();
    //translate(x,y);
    circle(x, y, 30)
    //translate(-x, -y);
    
    let hcolor = document.getElementById("fhead").value
    let petals = document.getElementById("petals").value
    
    fill(hexToRgb(hcolor).r,hexToRgb(hcolor).g,hexToRgb(hcolor).b, 127); //head colour
    stroke(127, 63, 120);
    translate(x, y);
    noStroke();
    for (let i = 0; i < petals; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/(petals/2));
    }
      translate(-x, -y);
    }
}

function setBackground(){
  fill(38, 191, 79)
  rect(0, 400, 800, 200)
  noStroke();
  fill(24, 209, 222)
  rect(0, 0, 800, 400)
  noStroke();
  fill(238, 255, 0)
  circle(0, 0, 300)
  noStroke();
}

function drawFlowerTemp(x,y){
  let scolor = document.getElementById("stem").value
  let stemLength = document.getElementById("stemLength").value
  fill(hexToRgb(scolor).r,hexToRgb(scolor).g,hexToRgb(scolor).b,127); //stem colour
  noStroke();
  //translate(x,y);
  rect(x-10,y, 20, stemLength*15)
  //translate(-x, -y);
  
  let pcolor = document.getElementById("pistil").value

  fill(hexToRgb(pcolor).r,hexToRgb(pcolor).g,hexToRgb(pcolor).b,127); //pistil colour
  noStroke();
  //translate(x,y);
  circle(x, y, 50)
  //translate(-x, -y);
  
  let hcolor = document.getElementById("fhead").value
  let petals = document.getElementById("petals").value
  
  fill(hexToRgb(hcolor).r,hexToRgb(hcolor).g,hexToRgb(hcolor).b, 127); //head colour
  stroke(127, 63, 120);
  translate(x, y);
  noStroke();
  for (let i = 0; i < petals; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/(petals/2));
  }
    translate(-x, -y);
}

function drawCurrentFlower(i){
    let scolor = drawnFlowersSC[i];
    let stemLength = drawnFlowersSL[i];
    fill(hexToRgb(scolor).r,hexToRgb(scolor).g,hexToRgb(scolor).b); //stem colour
    noStroke();
    //translate(x,y);
    rect(x-10,y, 20, stemLength)
    //translate(-x, -y);

    let hcolor = drawnFlowersHC[i];
    let petals = drawnFlowersPE[i];

    fill(hexToRgb(hcolor).r,hexToRgb(hcolor).g,hexToRgb(hcolor).b); //head colour
    stroke(127, 63, 120);
    translate(x, y);
    noStroke();
    for (let i = 0; i < petals; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/(petals/2));
    }
      translate(-x, -y);
      let pcolor = drawnFlowersPC[i];

      fill(hexToRgb(pcolor).r,hexToRgb(pcolor).g,hexToRgb(pcolor).b); //pistil colour
      noStroke();
      //translate(x,y);
      circle(x, y, 50)
      //translate(-x, -y);
}

function mouseClicked() {
  if((place==false)&(mouseInBound())){
    x=mouseX;
    y=mouseY;
    drawnFlowersX[drawnFlowersX.length] = x;
    drawnFlowersY[drawnFlowersY.length] = y;
    drawnFlowersSC[drawnFlowersSC.length] = document.getElementById("stem").value;
    drawnFlowersSL[drawnFlowersSL.length] = document.getElementById("stemLength").value;
    drawnFlowersHC[drawnFlowersHC.length] = document.getElementById("fhead").value;
    drawnFlowersPC[drawnFlowersPC.length] = document.getElementById("pistil").value;
    drawnFlowersPE[drawnFlowersPE.length] = document.getElementById("petals").value;
    place=true;
  }
}

function mouseInBound(){
  if((mouseX<800)&&(mouseY<600)){
    return true;
  } else {
    return false;
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function checkValidation(){
  console.log("Checking variables with sLength:" + document.getElementById("stemLength").value)
  if((document.getElementById("petals").value>0)&&(document.getElementById("stemLength").value>0)&&(document.getElementById("stemLength").value<11)){
    return true;
  }
}
