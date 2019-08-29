class Adult {
    constructor(x, y) {
        this.x = 200;
        this.y = 30;
        this.alive = true;
    }

    setup() {
        angleMode(DEGREES)
        this.adult = createSprite(this.x, this.y, 30, 30);
        this.adult.addAnimation("walk", adultAnimation);
        this.adult.addAnimation("standAdult", adultStand);
        this.adult.scale = 1;
        this.adult.setCollider('circle', 0, 0, 25)

        //Walking speed and direction
        this.angle = random(0, 360)
        this.adult.rotation = this.angle + 90
        this.adult.setSpeed(random(0.5, 1), this.angle);
        this.adult.debug = true
    }

    draw() {
        //Collision Border X

        if (this.adult.position.x < 5) {
            this.adult.position.x = 5;
            //Collision with walls
            this.angle += random(180)
            this.adult.rotation = this.angle + 90
            this.adult.setSpeed(random(0.5, 1), this.angle);


        }
        if (this.adult.position.x > WIDTH - 5) {
            this.adult.position.x = WIDTH - 5;
            //Collision with walls
            this.angle += random(180)
            this.adult.rotation = this.angle + 90
            this.adult.setSpeed(random(0.5, 1), this.angle);

        }
        //Collision Border Y
        if (this.adult.position.y < 5) {
            this.adult.position.y = 5;
            //Collision with walls
            this.angle += random(180)
            this.adult.rotation = this.angle + 90
            this.adult.setSpeed(random(0.5, 1), this.angle);
        }
        if (this.adult.position.y > HEIGHT - 5) {
            this.adult.position.y = HEIGHT - 5;
            //Collision with walls
            this.angle += random(180)
            this.adult.rotation = this.angle + 90
            this.adult.setSpeed(random(0.5, 1), this.angle);
        }
    }
}