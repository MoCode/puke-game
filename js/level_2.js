class Level_2 {
    constructor() {
        this.adults = [];
    }

    setup() {

        for (let i = 0; i < 50; i++) {
            this.adults.push(new Adult());
        }
        //==================================================
        //==================================================

        this.bg = createSprite(384, 215);
        this.bg.addAnimation("bg", bg);

        this.way = createSprite(430, 216);
        this.way.addAnimation("way", way);

        this.lake = createSprite(115, 343);
        this.lake.addAnimation("lake", lake);
        this.lake.setCollider("circle", -80, 100, 200, 308);
        this.lake.debug = true

        this.bench = createSprite(640, 320);
        this.bench.addAnimation("bench", bench);
        this.bench.setCollider("rectangle", 0, 0, 120, 150);
        this.bench.debug = true

        this.tree = createSprite(250, 150);
        this.tree.addAnimation("tree", tree);
        this.tree.setCollider("circle", 0, 0, 80);
        this.tree.debug = true

        //==================================================
        this.adults.forEach((adult) => adult.setup())
    }


    collision = (adObj) => {
        adObj.angle += random(180)
        adObj.adult.rotation = adObj.angle + 90
        adObj.adult.setSpeed(random(0.5, 1), adObj.angle);
    }

    draw() {
        //================================================== Player Collide
        game.player.sprite.collide(this.lake, () => {
             /*  console.log('hit') */
         })
         game.player.sprite.collide(this.bench, () => {
             /*  console.log('hit') */
         })
         game.player.sprite.collide(this.tree, () => {
             /*  console.log('hit') */
         })
         //================================================== Adult Collide
         this.adults.forEach((adObj) => adObj.adult.collide(this.lake, () => this.collision(adObj)))
         this.adults.forEach((adObj) => adObj.adult.collide(this.bench, () => this.collision(adObj)))
         this.adults.forEach((adObj) => adObj.adult.collide(this.tree, () => this.collision(adObj)))
         //Puke Collide

         //================================================== Old Person Collide
         //================================================== Kid Collide
         //==================================================
         this.adults.forEach((adult) => adult.draw())
    }
}