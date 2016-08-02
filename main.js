 var sound = new Howl({
      src: ["mp3/sound1.mp3"]

        sprite {
          
        }
  
    });
var sound2 = new Howl({
      src: ["mp3/sound2.mp3"]
    });




$(document).keydown(function(event){

  function getRandomPosition(element) {
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }

    if (event.keyCode == 65) {
      sound.play();
      // document.getElementById('sound1').play();
      var img = document.createElement('img');
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "images/e1.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 66) {
        sound2.play();
      // document.getElementById('sound2').play();
      var img = document.createElement('img');
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "images/e2.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

//       if (event.keyCode == 67) {
//       document.getElementById('sound3').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e3.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 68) {
//       document.getElementById('sound4').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e4.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 69) {
//       document.getElementById('sound5').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e5.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 70) {
//       document.getElementById('sound6').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e6.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 71) {
//       document.getElementById('sound7').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e7.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 72) {
//       document.getElementById('sound8').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e8.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }

//       if (event.keyCode == 73) {
//       document.getElementById('sound9').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e9.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 74) {
//       document.getElementById('sound10').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e10.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 75) {
//       document.getElementById('sound3').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e3.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 76) {
//       document.getElementById('sound11').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e11.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 77) {
//       document.getElementById('sound12').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e12.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 78) {
//       document.getElementById('sound13').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e13.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 79) {
//       document.getElementById('sound14').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e14.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 80) {
//       document.getElementById('sound15').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e15.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }   


//       if (event.keyCode == 81) {
//       document.getElementById('sound16').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e16.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 82) {
//       document.getElementById('sound17').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e17.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }

//       if (event.keyCode == 83) {
//       document.getElementById('sound18').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e18.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 84) {
//       document.getElementById('sound19').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e19.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 85) {
//       document.getElementById('sound20').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e20.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 86) {
//       document.getElementById('sound21').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e21.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 87) {
//       document.getElementById('sound22').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e22.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 88) {
//       document.getElementById('sound23').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e23.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 89) {
//       document.getElementById('sound24').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e24.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 90) {
//       document.getElementById('sound25').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e25.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }   


//       if (event.keyCode == 48) {
//       document.getElementById('sound26').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e26.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 49) {
//       document.getElementById('sound27').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e27.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }

//       if (event.keyCode == 50) {
//       document.getElementById('sound28').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e28.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 51) {
//       document.getElementById('sound29').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e29.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 52) {
//       document.getElementById('sound30').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e30.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 53) {
//       document.getElementById('sound31').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e31.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 54) {
//       document.getElementById('sound32').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e32.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 55) {
//       document.getElementById('sound33').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e33.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 56) {
//       document.getElementById('sound34').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e34.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//       if (event.keyCode == 57) {
//       document.getElementById('sound35').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e35.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     } 

//      if (event.keyCode == 56) {
//       document.getElementById('sound36').play();
//       var img = document.createElement('img');
//       img.setAttribute("style", "position:absolute;");
//       img.setAttribute("src", "images/e36.png");
//       document.body.appendChild(img);
//       var xy = getRandomPosition(img);
//       img.style.top = xy[0] + 'px';
//       img.style.left = xy[1] + 'px';
//     }   
   
 });  

$(document).keyup(function(event) {
     if (event.keyCode == 65) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 66) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

   //   if (event.keyCode == 67) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 68) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 69) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 70) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // } 
   //  if (event.keyCode == 71) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 72) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 73) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 74) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 75) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 76) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }  


   //   if (event.keyCode == 77) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 78) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 79) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 80) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // } 

   //      if (event.keyCode == 81) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // } 
   //  if (event.keyCode == 82) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 83) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 84) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 85) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 86) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 87) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }  


   //   if (event.keyCode == 88) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 89) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 90) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //     if (event.keyCode == 48) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // } 
   //  if (event.keyCode == 49) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 50) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 51) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 52) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 53) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 54) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }  


   //   if (event.keyCode == 55) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //  if (event.keyCode == 56) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }

   //   if (event.keyCode == 57) {
   //   var a= document.getElementById('wrapper');
   //     $("img").fadeOut(1000);
   // }


});


