function onKeyDown(event) {
    var myCircle = new Path.Circle(new Point(Math.random()*view.size.width, Math.random()*view.size.height), Math.random()*100);
    var red=Math.random()*255;
    var green=Math.random()*255;
    var blue=Math.random()*255;
    var opacity=Math.random();
    var colorStr = "rgba("+red+", "+green+", "+blue+", "+opacity+")";
    myCircle.fillColor = colorStr;
}