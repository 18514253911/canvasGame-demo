function Block() {
    var path = 'assets/images/';
    this.image = new Image();
    this.image.src = path + ((src) ? src : 'blocks.png');
    this.total = 7;
    this.size = blockSize || 32;
}
Block.prototype = {
    random: function() {
        return Math.floor(Math.random() * this.total) + 1;
    },
    draw: function(context, x, y, blockType) {
        var curblockType = blockType || this.random();
        var s = this.size;
        context.drawImage(this.image, (curblockType - 1) * s, 0, s, s, s * x, s * y, s, s);
    }
};