
let button1, button2, button3, button4, button5;
let newSent1, newSent2, newSent3, newSent4, newSent5;



function setup() {
  //createCanvas(windowWidth, windowHeight - 50);
  //background(51);

//  let rand = floor(random(0, 4)), 2));


  newSent1 = intro[floor(random(0, 4))] + firstSent[floor(random(0, 4))] + " " + secondSent[floor(random(0, 4))] + " " + thirdSent[floor(random(0, 4))] + " " + fourthSent[floor(random(0, 4))] + " " + fifthSent[floor(random(0, 4))] + " " + sixthSent[floor(random(0, 4))] + " " + seventhSent[floor(random(0, 4))] + eigthSent[floor(random(0,4))];
  newSent2 = intro[floor(random(0, 4))] + firstSent[floor(random(0, 4))] + " " + secondSent[floor(random(0, 4))] + " " + thirdSent[floor(random(0, 4))] + " " + fourthSent[floor(random(0, 4))] + " " + fifthSent[floor(random(0, 4))] + " " + sixthSent[floor(random(0, 4))] + " " + seventhSent[floor(random(0, 4))] + eigthSent[floor(random(0,4))];
  newSent3 = intro[floor(random(0, 4))] + firstSent[floor(random(0, 4))] + " " + secondSent[floor(random(0, 4))] + " " + thirdSent[floor(random(0, 4))] + " " + fourthSent[floor(random(0, 4))] + " " + fifthSent[floor(random(0, 4))] + " " + sixthSent[floor(random(0, 4))] + " " + seventhSent[floor(random(0, 4))] + eigthSent[floor(random(0,4))];
  newSent4 = intro[floor(random(0, 4))] + firstSent[floor(random(0, 4))] + " " + secondSent[floor(random(0, 4))] + " " + thirdSent[floor(random(0, 4))] + " " + fourthSent[floor(random(0, 4))] + " " + fifthSent[floor(random(0, 4))] + " " + sixthSent[floor(random(0, 4))] + " " + seventhSent[floor(random(0, 4))] + eigthSent[floor(random(0,4))];
  newSent5 = intro[floor(random(0, 4))] + firstSent[floor(random(0, 4))] + " " + secondSent[floor(random(0, 4))] + " " + thirdSent[floor(random(0, 4))] + " " + fourthSent[floor(random(0, 4))] + " " + fifthSent[floor(random(0, 4))] + " " + sixthSent[floor(random(0, 4))] + " " + seventhSent[floor(random(0, 4))] + eigthSent[floor(random(0,4))];




  let newdiv1 = createDiv(newSent1);
  button1 = createButton("Copy To Clipboard");
  button1.mousePressed(button1F);
  let test = createP("_______________________________________________________________________________________________________________________________________________");

  let newdiv2 = createDiv(newSent2);
  button2 = createButton("Copy To Clipboard");
  button2.mousePressed(button2F);
  let test1 = createP("_______________________________________________________________________________________________________________________________________________");

  let newdiv3 = createDiv(newSent3);
  button3 = createButton("Copy To Clipboard");
  button3.mousePressed(button3F);
  let test2 = createP("_______________________________________________________________________________________________________________________________________________");


  let newdiv4 = createDiv(newSent4);
  button4 = createButton("Copy To Clipboard");
  button4.mousePressed(button4F);
  let test3 = createP("_______________________________________________________________________________________________________________________________________________");


  let newdiv5 = createDiv(newSent5);
  button5 = createButton("Copy To Clipboard");
  button5.mousePressed(button5F);
}

function draw() {
//  background(51);
}

function button1F() {
  copyToClipboard(newSent1);
}
function button2F() {
  copyToClipboard(newSent2);
}
function button3F() {
  copyToClipboard(newSent3);
}
function button4F() {
  copyToClipboard(newSent4);
}
function button5F() {
  copyToClipboard(newSent5);
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);

    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
