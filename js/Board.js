 /**
  * 图形操作区域的封装
  */
 function Board() {
     this.cols = cols || 13;
     this.rows = rows || 16;
     this.blockSize = blockSize || 32;
     this.canvas = new Canvas('board', cols * blockSize, rows * blockSize);
     this.shape = new Shape();
     this.nextShape = new Shape();
     this.ctx = this.canvas.ctx;
     this.list = [];
 }
 Board.prototype = {
     init: function() {

     },
     initGrid: function() {

     }
 }