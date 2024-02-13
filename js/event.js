console.log("This is event.js file");
//Option 1
function make_red() {
  document.body.style.backgroundColor = "red";
}

//option2
const makeBlue = document.getElementById("make-blue");
function make_blue() {
  document.body.style.backgroundColor = "blue";
}
makeBlue.onclick = make_blue; //Dont call it as function

//option 3
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function make_purple() {
  document.body.style.backgroundColor = "purple";
};

//option 4
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", make_pink);
function make_pink() {
  document.body.style.backgroundColor = "pink";
}
//Option 5
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function make_green() {
  document.body.style.backgroundColor = "green";
});

//Mostly used
