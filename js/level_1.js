class Level_1 {
    constructor() {
        this.adults = [];
        this.kids = [];
        this.deadCount = 0;

    }

    setup() {

        for (let i = 0; i < 50; i++) {
            this.adults.push(new Adult());
        }
        //==================================================
        //==================================================

        this.track = createSprite(220, 300, 131, 278);
        this.track.addAnimation("walk", track);
        this.track.setCollider("rectangle", 0, 0, 131, 278);
        this.track.debug = true

        this.stopper = createSprite(210, 165, 154, 64);
        this.stopper.addAnimation("stopper", stopper);
        this.stopper.setCollider("rectangle", 0, 0, 154, 64);
        this.stopper.debug = true

        this.train = createSprite(550, 285, 170, 308);
        this.train.addAnimation("train", train);
        /*  this.train.setCollider("rectangle", 0, 0, 170, 308); */
        this.train.debug = true



        this.ticket = createSprite(100, 40, 99, 80);
        this.ticket.addAnimation("ticket", ticket);
        this.ticket.setCollider("rectangle", 0, 0, 99, 80);
        this.ticket.debug = true

        //==================================================
        this.adults.forEach((adult) => adult.setup())
    }


    collision = (adObj) => {
        adObj.angle += random(180)
        adObj.adult.rotation = adObj.angle + 90
        adObj.adult.setSpeed(random(0.5, 1), adObj.angle);
    }

    draw() {
        //if - adult.alive true - game.currentlvl++
        // if(this.adult.alive === false) {
        //     this.deadCount++
        // }

        if (this.adults.filter(function (adult) {
                if (adult.alive == true) return true
            }).length <= 25) {
            game.currentLevel = 2
        }

        // console.log(this.adults.filter(function (adult) {
        //     if (adult.alive == true) return true
        // }).length)

        //================================================== Player Collide
        game.player.sprite.collide(this.track, () => {
            /*  console.log('hit') */
        })
        game.player.sprite.collide(this.stopper, () => {
            /*  console.log('hit') */
        })
        game.player.sprite.collide(this.ticket, () => {
            /*  console.log('hit') */
        })

        if (!this.train.removed) {
            game.player.sprite.collide(this.train, () => {
                /*  console.log('hit') */
            })

        }
        //================================================== Adult Collide
        this.adults.forEach((adObj) => adObj.adult.collide(this.track, () => this.collision(adObj)))
        this.adults.forEach((adObj) => adObj.adult.collide(this.stopper, () => this.collision(adObj)))
        this.adults.forEach((adObj) => adObj.adult.collide(this.ticket, () => this.collision(adObj)))
        this.adults.forEach((adObj) => adObj.adult.collide(this.train, () => this.collision(adObj)))
        //================================================== Old Person Collide
        //================================================== Kid Collide
        //==================================================
        this.adults.forEach((adult) => adult.draw())
    }
}