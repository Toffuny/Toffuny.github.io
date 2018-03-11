var c = $(".stoppable canvas")[0];
var w = c.width;
var h = c.height;
var img = $(".stoppable img")[0];
setTimeout(function () {
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    $(img).hide();
    $(c).show();
},10000);
