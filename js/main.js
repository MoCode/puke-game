game = new Game();
this.borderBackground;
let start = false;


//=======================================================================

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("gameBoard")
    borderBackground = loadImage("../assets/gamedesignbackground.png");
    //============================
    game.setup();
    //============================
    angleMode(DEGREES)
}

//=======================================================================

function draw() {
    if (keyCode === 32) {
        start = true
        this.document.getElementById("intro").style.display = "none";
    }
    if (start == true) {
        clear();
        background(borderBackground);
        game.draw();
        drawSprites();
    }
}

//=======================================================================

function keyPressed() {
    game.player.keyPressed();
}

window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// function pressStart () {
//     if(!start){
//         addEventListener("keydown", function() {
//             this.document.getElementById("intro").style.display("block");
//         })
//     } else if (keyCode === 32) {    
//         this.document.getElementById("intro").style.display = "none";  
//         start = true;
//     }
// }