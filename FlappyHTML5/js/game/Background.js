jaws.Background = function Background() {
    this.background,this.sand,this.scrolls = null;
};

jaws.Background.prototype.init = function () {
    this.background = new jaws.Sprite({ image: "img/background.png" });


    this.sand = new jaws.Sprite({ image: "img/sand.png" });
    this.sand.y = 529;


    this.scrolls = new jaws.SpriteList();
    for (var i = 0; i < 34; i++) {
        this.scrolls.push(new jaws.Sprite({ image: "img/scroll.png" }));
        this.scrolls.at(i).initX = 12 * i;
        this.scrolls.at(i).x = this.scrolls.at(i).initX;
        this.scrolls.at(i).y = 529;
    }
};


jaws.Background.prototype.update = function () {
    for (var i = 0; i < 34; i++)
        this.scrolls.at(i).x -= 2;

    if (this.scrolls.at(0).x < -12)
        for (var i = 0; i < 34; i++)
            this.scrolls.at(i).x = this.scrolls.at(i).initX;

};


jaws.Background.prototype.draw = function () {
    this.background.draw();
    this.sand.draw();

    for (var i = 0; i < 34; i++)
        this.scrolls.at(i).draw();
};