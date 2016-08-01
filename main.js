$(document).keydown(function(event){
    if (event.keyCode == 65) { 
    	var canvas= document.getElementById('one');
    	canvas.innerHTML = '<img src="images/e1.png">'
        document.getElementById('sound1').play();
    
       return false;

    }
});