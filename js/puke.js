class Puke {
    constructor(x, y, rotation, translate) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.translate = translate;
    }

    setup() {
        this.puke = createSprite(this.x + 40 * sin(this.rotation), this.y - 40 * cos(this.rotation), 68, 9);
        this.puke.rotation = this.rotation
        this.puke.addAnimation("puke", playerPuke);

        setTimeout(() => {
            this.puke.remove()
        }, 500)

        this.puke.setCollider('circle', 0, 0, 25);
        this.puke.debug = true
    }

    draw() {
        if (game.currentLevel == 1) {
            game.level.adults.forEach(adObj => adObj.adult.overlap(this.puke, () => {
                if (adObj.alive) {
                    setTimeout(() => {
                        adObj.adult.setSpeed(0, adObj.adult.rotation)
                        adObj.adult.changeAnimation("standAdult");
                        let puke = new Puke(
                            adObj.adult.position.x,
                            adObj.adult.position.y,
                            adObj.adult.rotation
                        );
                        puke.setup();
                    }, 3000)
                    adObj.alive = false
                }
            }))

        } else {
            game.level2.adults.forEach(adObj => adObj.adult.overlap(this.puke, () => {
                if (adObj.alive) {
                    setTimeout(() => {
                        adObj.adult.setSpeed(0, adObj.adult.rotation)
                        adObj.adult.changeAnimation("standAdult");
                        let puke = new Puke(
                            adObj.adult.position.x,
                            adObj.adult.position.y,
                            adObj.adult.rotation
                        );
                        puke.setup();
                    }, 3000)
                    adObj.alive = false
                }
            }))
        }
    }
}