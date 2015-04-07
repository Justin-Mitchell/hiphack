// Variables
var tacoDiv = document.getElementById('tacos');


// Execution
beginIntro();

// Functions
function setStyle() {
    tacoDiv.style.backgroundColor = '#ce0000';
    tacoDiv.style.fontSize = '85px';
    tacoDiv.style.color = '#ffffff';
    tacoDiv.style.textAlign = 'center';
    tacoDiv.style.padding = '15px';
}
function unsetBackground() {tacoDiv.style.backgroundColor = "";}
function showWelcome() {
    var name = "Justin";
    var welcome = "Welcome " + name + ',';
    alert(welcome);
}
function beginIntro() {
    setStyle();
    showWelcome();
}