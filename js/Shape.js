function Shape() {
    this.blockType = Math.floor(Math.random() * 7);
    if (this.blockType > 6) {
        this.blockType = 6;
    }
    this.digit = digits[this.blockType];



}
Shape.prototype = {
    draw: function(context, x, y) {
        for (var i = 0; i < this.digit.length; i++) {
            for (var j = 0; j < this.digit[i].length; j++) {
                var s = 32;
                context.drawImage(this.image, (blockType) * s, 0, s, s, s * x, s * y, s, s);
            }
        }
    }
}