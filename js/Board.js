/**
 * id：canvas的id
 * width:canvas的宽度
 * height：canvas的高度
 * //定义为13列。16行，每行32像素
    var cols = 13;
    var rows = 16;
    var blockSize = 32;
 */
function Board(id, cols, rows, blockSize) {
    this.cols = cols;
    this.rows = rows;
    this.blockSize = blockSize;
    //获取画布
    this.canvas = document.getElementById(id);
    //设置宽高
    this.canvas.width = this.cols * this.blockSize;
    this.canvas.height = this.rows * this.blockSize;
    this.ctx = this.canvas.getContext("2d");

    //绘制画布Grid
}
Board.prototype = {
    initGrid: function() {
        this.ctx.strokeStyle = 'rgba(40,40,40,.8)';
        this.ctx.lineWidth = 1;
        for (var i = 0; i < this.rows; i++) {
            this.ctx.moveTo(0, i * this.blockSize);
            this.ctx.lineTo(this.canvas.width, i * this.blockSize);
            this.ctx.stroke();
        }
        for (var j = 0; j < this.cols; j++) {
            this.ctx.moveTo(j * this.blockSize, 0);
            this.ctx.lineTo(j * this.blockSize, this.canvas.height);
            this.ctx.stroke();
        }
    },
    drawShape: function(shape, x, y) {
        for (var i = 0; i < shape.digit.length; i++) {
            for (var j = 0; j < shape.digit[i].length; j++) {
                if (shape.digit[i][j]) {
                    var s = 32;
                    this.ctx.drawImage(this.image, (shape.blockType) * s, 0, s, s, s * j, s * i, s, s);
                }
            }
        }
    }
};