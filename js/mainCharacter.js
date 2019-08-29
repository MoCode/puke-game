class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 0.8;
        this.pukeCount = 0;
        console.log(this.pukeCount);
        this.puke = undefined

    }

    setup() {
        this.sprite = createSprite(this.x, this.y, 30, 30);
        this.sprite.addAnimation("walk", playerAnimation);
        this.sprite.addAnimation("stand", playerStand);
        this.sprite.scale = 1;
        this.sprite.debug = true
        this.sprite.setCollider('circle', 0, 0, 25)
        this.sprite.changeAnimation("stand");
    }

    draw() {
        //Player stop and go
        this.sprite.changeAnimation("stand");
        this.keyIsDown();
        if (this.puke) {
            this.puke.draw()
        }
        //Collision Border X
        if (this.sprite.position.x < 5) {
            this.sprite.position.x = 5;
        }
        if (this.sprite.position.x > WIDTH - 5) {
            this.sprite.position.x = WIDTH - 5;
        }
        //Collision Border Y
        if (this.sprite.position.y < 5) {
            this.sprite.position.y = 5;
        }
        if (this.sprite.position.y > HEIGHT - 5) {
            this.sprite.position.y = HEIGHT - 5;
        }
    }


    keyIsDown() {
        if (keyIsDown(37)) {
            this.sprite.rotation -= 3;
        }
        if (keyIsDown(39)) {
            this.sprite.rotation += 3;
        }
        if (keyIsDown(38)) {
            this.sprite.position.x += sin(this.sprite.rotation) * this.vel;
            this.sprite.position.y -= cos(this.sprite.rotation) * this.vel;
            this.sprite.changeAnimation("walk");
        }
    }

    keyPressed() {
        if (keyCode === 32 && this.pukeCount < 1) {
            this.puke = new Puke(
                this.sprite.position.x,
                this.sprite.position.y,
                this.sprite.rotation
            );
            this.puke.setup();
            // this.pukeCount++;
        }
    }
}