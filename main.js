var image;
function upload()
{
  var img = document.getElementById("finput");
  var imgcanvas = document.getElementById("c1");
  image = new SimpleImage(img);
  image.drawTo(imgcanvas);
}

function color()
{
  for(var pixel of image.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
  var imgcanvas = document.getElementById("c2");
  image.drawTo(imgcanvas);
}