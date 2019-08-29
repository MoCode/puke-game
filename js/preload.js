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
        "../assets/character/main/00gamedesigncharacter2.png",
        "../assets/character/main/01gamedesigncharacterwalkf1s.png",
        "../assets/character/main/02gamedesigncharacterwalkf2s.png",
        "../assets/character/main/01gamedesigncharacterwalkf1s.png",
        "../assets/character/main/00gamedesigncharacter2.png",
        "../assets/character/main/01gamedesigncharacterwalkf1.png",
        "../assets/character/main/02gamedesigncharacterwalkf2.png",
        "../assets/character/main/01gamedesigncharacterwalkf1.png"
    );

    playerStand = loadAnimation(
        "../assets/character/main/00gamedesigncharacter2.png"
    );

    playerPuke = loadAnimation(
        "../assets/character/sneeze-animation/spitadult1.png",
        "../assets/character/sneeze-animation/spitadult1.png",
        "../assets/character/sneeze-animation/spitadult2.png",
        "../assets/character/sneeze-animation/spitadult2.png",
        "../assets/character/sneeze-animation/spitadult3.png",
        "../assets/character/sneeze-animation/spitadult3.png",
        "../assets/character/sneeze-animation/spitadult4.png",
        "../assets/character/sneeze-animation/spitadult4.png"
    );

    //=================================================================== Adult
    adultAnimation = loadAnimation(
        "../assets/character/adult/gamedesignadult2.png",
        "../assets/character/adult/gamedesignadultwalkf1.png",
        "../assets/character/adult/gamedesignadultwalkf2.png",
        "../assets/character/adult/gamedesignadultwalkf1.png",
        "../assets/character/adult/gamedesignadult2.png",
        "../assets/character/adult/gamedesignadultwalkf1s.png",
        "../assets/character/adult/gamedesignadultwalkf2s.png",
        "../assets/character/adult/gamedesignadult2.png"
    );

    adultStand = loadAnimation(
        "../assets/character/adult/gamedesignadult2.png"
    );
    //=================================================================== Kid 
    //=================================================================== Old
    //=====================Level1
    track = loadAnimation("../assets/lvl1/gamedesignemptytrack.png");
    stopper = loadAnimation("../assets/lvl1/gamedesignemptystopper.png");
    train = loadAnimation("../assets/lvl1/gamedesignemptytracktrain.png");
    ticket = loadAnimation("../assets/lvl1/gamedesignemptyticketmachine.png");
    //=====================Level2
    bg = loadAnimation("../assets/lvl2/backgroundlvl2.png");
    bench = loadAnimation("../assets/lvl2/benchlvl2.png");
    lake = loadAnimation("../assets/lvl2/lakelvl2.png");
    tree = loadAnimation("../assets/lvl2/treeslvl2.png");
    way = loadAnimation("../assets/lvl2/waylvl2.png");
}