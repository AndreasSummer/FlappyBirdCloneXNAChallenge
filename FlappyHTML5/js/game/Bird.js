jaws.Bird = function Bird() {

    this.textures, this.sprite = null;

    this.boundbox = null;
    this.animTimer = 100;
    this.animElapsed = 0;

    this.canJump = true;
    this.dead = false;

    this.jumpTimer = 500;
    this.jumpElapsed = 0;

    this.texturePosition = 0;
    this.textureAdd = 1;

    this.YSpeed = 0;

};

jaws.Bird.prototype.init = function () {

    this.textures = ["img/bird1.png", "img/bird2.png", "img/bird3.png"];

    this.boundbox = new jaws.Sprite({ image: "img/pixel.png" });
    this.boundbox.alpha = 0.5;

    this.animTimer = 100;
    this.animElapsed = 0;

    this.canJump = true;
    this.dead = false;

    this.jumpTimer = 500;
    this.jumpElapsed = 0;

    this.texturePosition = 0;
    this.textureAdd = 1;

    this.YSpeed = 0;

    this.sprite = new jaws.Sprite({ image: "img/bird1.png" });

    this.sprite.x = 150;
    this.sprite.y = 300;
    this.sprite.setAnchor("center");

};


jaws.Bird.prototype.update = function () {

    this.YSpeed += 0.4;



    this.jumpElapsed += jaws.game_loop.tick_duration;
    if (this.jumpElapsed > this.jumpTimer) {
        this.canJump = true;
        this.jumpElapsed = 0;
    }

    this.animElapsed += jaws.game_loop.tick_duration;
    if (this.animElapsed > this.animTimer) {
        this.texturePosition += this.textureAdd;
        if (this.texturePosition == 2 || this.texturePosition == 0)
            this.textureAdd = this.textureAdd * -1;


        this.sprite.setImage(this.textures[this.texturePosition]);
        this.animElapsed = 0;

    }

    if (jaws.pressed("space"))
        this.YSpeed = -7;

    this.sprite.rotateTo(Math.atan2(this.YSpeed, 7) * (180 / Math.PI));
    this.sprite.y += this.YSpeed;

    if (this.sprite.y > 500)
        this.dead = true;

    var tmp = this.sprite.rect();
    this.boundbox.x = tmp.x;
    this.boundbox.y = tmp.y;
    this.boundbox.setWidth(tmp.width);
    this.boundbox.setHeight(tmp.height);

};


jaws.Bird.prototype.rect = function () { return this.sprite.rect(); };

jaws.Bird.prototype.draw = function () {
    this.sprite.draw();
    //debug
  //  this.boundbox.draw();
};