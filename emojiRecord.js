var logged = [];
var timer;
var timeout = 1000;
var counter = 0;
var emojiSound = null


document.body.addEventListener('keydown', function(event) {
  clearTimeout(timer);

  emojiSound = {
    65: "mp3/sound1.mp3",

    66: "mp3/sound2.mp3",

    67: "mp3/sound3.mp3", 

    68: "mp3/sound4.mp3", 

    69: "mp3/sound5.mp3",

    70: "mp3/sound6.mp3",

    71: "mp3/sound7.mp3",

    72: "mp3/sound8.mp3",

    73: "mp3/sound9.mp3",

    74: "mp3/sound10.mp3",

    75: "mp3/sound11.mp3",

    76: "mp3/sound12.mp3",

    77: "mp3/sound13.mp3",

    78: "mp3/sound14.mp3",

    79: "mp3/sound15.mp3",

    80: "mp3/sound18.mp3",

    81: "mp3/sound17.mp3",

    82: "mp3/sound18.mp3",

    83: "mp3/sound19.mp3",

    84: "mp3/sound20.mp3",

    85: "mp3/sound21.mp3",

    86: "mp3/sound22.mp3",

    87: "mp3/sound23.mp3",

    88: "mp3/sound24.mp3",

    89: "mp3/sound25.mp3",

    48: "mp3/sound27.mp3",
    
    90: "mp3/sound26.mp3",

    49: "mp3/sound28.mp3",

    50: "mp3/sound29.mp3",

    51: "mp3/sound30.mp3",

    52: "mp3/sound31.mp3",

    53: "mp3/sound32.mp3",

    54: "mp3/sound33.mp3",

    55: "mp3/sound34.mp3",

    56: "mp3/sound35.mp3",

    57: "mp3/sound36.mp3"
  };
 







  var character = String.fromCharCode(event.which);
  logged.push(event.keyCode);
  console.log(logged);
  
  // emojiSound[logged[]];


  // setInterval(function(){
  //   // emojiSound[logged[counter++]];
  //   // console.log(emojiSound[logged]);
  //   console.log(logged[counter])
  //   counter++
  
  // }, 1000);







  // setTimeout(function repeatsound() {
  //   var playme = emojiSound[mostrecent];
  //   console.log(playme);
  //   var sup = new Howl({
  //     src: [playme],
  //     // autoplay: true,
  //     // loop: true
  //   }); 
  //   console.log(sup);
  //   sup.play();
  // });



});


document.getElementById("button").addEventListener('click', function(event) {
  var interval = setInterval(function(){
    emojiSound[logged[counter]];
    console.log(emojiSound[logged[counter]]);
    
  var sounds = (emojiSound[logged[counter]]);
  
 

  var playSound = new Howl({
    src: [sounds],
    format: "mp3"
  });
  playSound.play();
  console.log(playSound);


    counter++;
    if(counter >= logged.length){
      clearInterval(interval);
    };


  }, 1000);
})
