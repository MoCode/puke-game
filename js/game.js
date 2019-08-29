class Game { //in here i will load all other classes of the game
    constructor() {
        this.player = new Player(WIDTH / 2, HEIGHT / 2);
        this.level = new Level_1();
        this.level2 = new Level_2();
        this.currentLevel = 1;
        this.updatedLevel = false;
    }


    setup() {
        this.player.setup();
        this.level.setup();

        /*  this.level2.setup(); */
    }

    draw() {
        this.level.draw();
        this.player.keyIsDown();
        this.player.draw();
        if (this.currentLevel == 2 && this.updatedLevel == false) {
            console.log('updated')
            console.log(getSprites())
            this.level.adults.forEach(adult => adult.adult.remove())
            this.level.track.remove()
            this.level.stopper.remove()
            this.level.ticket.remove()
            this.level.train.remove()

            console.log(getSprites())

            this.level2.setup()
            this.player.sprite.remove()
            this.player.setup()
            this.updatedLevel = true
            console.log(this.level.train)

        }
        if (this.currentLevel == 2 && this.updatedLevel == true)
            this.level2.draw();
    }
}