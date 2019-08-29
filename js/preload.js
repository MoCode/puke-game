let playerAnimation;
let playerStand;
let playerPuke;
//=====================Level1
let track;
let stopper;
let train;
let ticket;
//=====================Level2

//=====================Level4
//=====================Level5

function preload() {
    //=================================================================== Main

    playerAnimation = loadAnimation(
        "assets/00gamedesigncharacter2.png",
        "assets/01gamedesigncharacterwalkf1s.png",
        "assets/02gamedesigncharacterwalkf2s.png",
        "assets/01gamedesigncharacterwalkf1s.png",
        "assets/00gamedesigncharacter2.png",
        "assets/01gamedesigncharacterwalkf1.png",
        "assets/02gamedesigncharacterwalkf2.png",
        "assets/01gamedesigncharacterwalkf1.png"
    );

    playerStand = loadAnimation(
        "assets/00gamedesigncharacter2.png"
    );

    playerPuke = loadAnimation(
        "assets/spitadult1.png",
        "assets/spitadult1.png",
        "assets/spitadult2.png",
        "assets/spitadult2.png",
        "assets/spitadult3.png",
        "assets/spitadult3.png",
        "assets/spitadult4.png",
        "assets/spitadult4.png"
    );

    //=================================================================== Adult
    adultAnimation = loadAnimation(
        "assets/gamedesignadult2.png",
        "assets/gamedesignadultwalkf1.png",
        "assets/gamedesignadultwalkf2.png",
        "assets/gamedesignadultwalkf1.png",
        "assets/gamedesignadult2.png",
        "assets/gamedesignadultwalkf1s.png",
        "assets/gamedesignadultwalkf2s.png",
        "assets/gamedesignadult2.png"
    );

    adultStand = loadAnimation(
        "assets/gamedesignadult2.png"
    );
    //=================================================================== Kid 
    //=================================================================== Old
    //=====================Level1
    track = loadAnimation("assets/gamedesignemptytrack.png");
    stopper = loadAnimation("assets/gamedesignemptystopper.png");
    train = loadAnimation("assets/gamedesignemptytracktrain.png");
    ticket = loadAnimation("assets/gamedesignemptyticketmachine.png");
    //=====================Level2
    bg = loadAnimation("assets/backgroundlvl2.png");
    bench = loadAnimation("assets/benchlvl2.png");
    lake = loadAnimation("assets/lakelvl2.png");
    tree = loadAnimation("assets/treeslvl2.png");
    way = loadAnimation("assets/waylvl2.png");
}