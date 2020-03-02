let fullPara = "Saw that you were trying to rent your apartment. I am the assistant to the of owner Boston Z Realty, Dillon Currier. He has 19 years experience and a 5-star rating from all his previous clients. The tenants pay our fee, so we wouldn’t charge you anything and we would do everything to get the apartment rented: Marketing on over 60 websites and social media, qualifying tenants, showing the unit, processing paperwork, etc. Plus you can keep your ads up if you want. Can you do a quick call with him to discuss?"





function setup() {
  //createCanvas(windowWidth, windowHeight - 50);
//  background(51);

  let rand = floor(random(0, 2));

  let newSent1 = firstSent[floor(random(0, 3))] + " " + secondSent[floor(random(0, 3))] + " " + thirdSent[floor(random(0, 3))] + " " + fourthSent[floor(random(0, 3))] + " " + fifthSent[floor(random(0, 3))] + " " + sixthSent[floor(random(0, 3))] + " " + seventhSent[floor(random(0, 3))] + eigthSent[floor(random(0,3))];
  let newSent2 = firstSent[floor(random(0, 3))] + " " + secondSent[floor(random(0, 3))] + " " + thirdSent[floor(random(0, 3))] + " " + fourthSent[floor(random(0, 3))] + " " + fifthSent[floor(random(0, 3))] + " " + sixthSent[floor(random(0, 3))] + " " + seventhSent[floor(random(0, 3))] + eigthSent[floor(random(0,3))];
  let newSent3 = firstSent[floor(random(0, 3))] + " " + secondSent[floor(random(0, 3))] + " " + thirdSent[floor(random(0, 3))] + " " + fourthSent[floor(random(0, 3))] + " " + fifthSent[floor(random(0, 3))] + " " + sixthSent[floor(random(0, 3))] + " " + seventhSent[floor(random(0, 3))] + eigthSent[floor(random(0,3))];
  let newSent4 = firstSent[floor(random(0, 3))] + " " + secondSent[floor(random(0, 3))] + " " + thirdSent[floor(random(0, 3))] + " " + fourthSent[floor(random(0, 3))] + " " + fifthSent[floor(random(0, 3))] + " " + sixthSent[floor(random(0, 3))] + " " + seventhSent[floor(random(0, 3))] + eigthSent[floor(random(0,3))];
  let newSent5 = firstSent[floor(random(0, 3))] + " " + secondSent[floor(random(0, 3))] + " " + thirdSent[floor(random(0, 3))] + " " + fourthSent[floor(random(0, 3))] + " " + fifthSent[floor(random(0, 3))] + " " + sixthSent[floor(random(0, 3))] + " " + seventhSent[floor(random(0, 3))] + eigthSent[floor(random(0,3))];

  //console.log(newSent);

  let newdiv1 = createDiv(newSent1);
  let test = createP(" ");
  let newdiv2 = createDiv(newSent2);
  let test1 = createP(" ");
  let newdiv3 = createDiv(newSent3);
  let test2 = createP(" ");
  let newdiv4 = createDiv(newSent4);
  let test3 = createP(" ");
  let newdiv5 = createDiv(newSent5);

}

function draw() {
//  background(51);


}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);

    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
