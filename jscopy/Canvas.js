 /**
  * 画布的一些封装
  */
 function Canvas(id, width, height) {
     this.id = id;
     this.cvs = document.getElementById(this.id);
     cvs.width = width;
     cvs.height = height;
 }
 canvas.prototype = {
     //清理画布
     /**
      * fromX  fromY 起始点坐标
      * toX, toY  结束点坐标，
      * 起始点和结束点的对角线矩形
      */
     clear: function(fromX, fromY, toX, toY) {
         var fromX = fromX || 0;
         var fromY = fromY || 0;
         var toX = toX || this.width;
         var toY = toY || this.height;
         this.ctx.clearRect(fromX, fromY, toX, toY);
     }
 }