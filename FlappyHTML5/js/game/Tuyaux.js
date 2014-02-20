jaws.Tuyaux = function Tuyaux() {

    this.sprite = null;
    this.TopBound = null;
    this.BottomBound = null;
    this.scored = false;
    this.boundbox = null;
    this.boundboxbot = null;
    this.id = 0;
    this.init();
};

jaws.Tuyaux.prototype.init = function () {

    this.boundbox = new jaws.Sprite({ image: "img/pixel.png" });
    this.boundbox.alpha = 0.5;
    this.boundboxbot = new jaws.Sprite({ image: "img/pixel.png" });
    this.boundboxbot.alpha = 0.5;
    this.sprite = new jaws.Sprite({ image: "img/tuyaux.png" });
    this.sprite.x = 420;
    this.sprite.y = Math.floor((Math.random() * 205) - 200);

    this.TopBound = new jaws.Rect(this.sprite.x, this.sprite.y, 55, 308);
    this.BottomBound = new jaws.Rect(this.sprite.x, this.sprite.y + 460, 55, 340);


};


jaws.Tuyaux.prototype.update = function () {
    this.sprite.x -= 2;

    this.TopBound.x -= 2;
    this.BottomBound.x -= 2;

    var tmp = this.TopBound;
    this.boundbox.x = tmp.x;
    this.boundbox.y = tmp.y;
    this.boundbox.setWidth(tmp.width);
    this.boundbox.setHeight(tmp.height);


    tmp = this.BottomBound;
    this.boundboxbot.x = tmp.x;
    this.boundboxbot.y = tmp.y;
    this.boundboxbot.setWidth(tmp.width);
    this.boundboxbot.setHeight(tmp.height);

};




jaws.Tuyaux.prototype.draw = function () {
    this.sprite.draw();

    //debug
    //this.boundbox.draw();
   // this.boundboxbot.draw();
};