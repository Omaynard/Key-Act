$(function(){

	var $divs = $('.keys');
	var $container = $('.container')
	var currentChar = null;
	var createdTime = 0;
	var wrongCount = 3;
	var $buttonstart = $('#startbutton');
	var $instructionButton = $('#instructionButton');
	var $reset = $('#resetButton');
	
	Instruction();
	

	function Instruction(){
		$divs.css('visibility','hidden')
		$('.instruction').css('visibility','visible');

		// $instructionButton.click(function(event){

		// 	$divs.css({ 'visibility' : '', 'hidden' : '' });
		// 	$('.instruction').css('visibility','hidden');
		// 	playLetter();

		// });

	}


	$instructionButton.click(function(){
		location.reload();
	})
	$reset.click(function(){
		location.reload();
	})



	
	

	// var $divs = $('.keys');
	// var $ds = $divs.not('.flip');
	// $ds.eq(Math.floor(Math.random() * $ds.length)).addClass('flip');
	

//Press the start button loops through all the elements with the class.keys and calls the animatediv with the value of eahc index of the array of that class
	$buttonstart.click(function(event){
		
		if (!$('.keys:animated').length) {
			
			$divs.css({ 'visibility' : '', 'hidden' : '' });
			$('.instruction').css('visibility','hidden');
			playLetter();
			$divs.each(function(){
			 	animateDiv($(this));
		 	});	
		}

	});
	
	
	

	clickedLetter();

	function playLetter (event) {
		var timeout = Math.floor(Math.random()*(5000-2000+1))+2000

		setTimeout(function (){
			currentChar = randomAddClass();
			

			// clickedLetter(currentChar)
		}, timeout)
		
	}

  function clickedLetter () {

	 	$('body').keypress(function(event){
	 		
	 		if((wrongCount != 0)&&(currentChar == event.key)){
					currentChar = randomAddClass();
					$('.wCount').html('<h1>Lives left:'+ wrongCount +'<h1>');
		 			
		 			// var clickedTime = Date.now()
		 			// result(clickedTime)
		 			
		 			console.log('correct key press')
		 		} else if((wrongCount != 0)&&(currentChar != event.key)){
					$('.container').toggleClass('incorrect');
		 			setTimeout(function(){
		 				$('.container').removeClass('incorrect');
		    		},200);

			 			var snd = new Audio("https://raw.githubusercontent.com/Omaynard/Key-Act/master/audio/slap.mp3"); // buffers automatically when created
						snd.play();
			 			
			 			wrongCount = wrongCount - 1;
			 			console.log(wrongCount);
			 			$('.wCount').html('<h1>Lives left:'+ wrongCount +'<h1>');
						}	else {
		 			wrongCounter();
		 			}
		 		});
	};
	 


	

	function randomAddClass () {

		
		

  	var $ds = $divs.not('.flip');
  	if($ds.length == 15){
  		createdTime = Date.now();
		 	console.log(createdTime);
		}
  	if ($ds.length == 0){
  		var reactionTime = Date.now()
  		result(reactionTime);

  	}else{ 
  		var $element = $ds.eq(Math.floor(Math.random() * $ds.length))
			$element.addClass('flip');
		
			return $element.html().toLowerCase().trim();
		}


		
	}

	
  function result(reactiontime){

  	$divs.fadeOut()
  	
 
  	var time2 = reactiontime 

  	var propertime = ((time2 - createdTime)/1000)
  	$container.html('<h1> Your time is ' +propertime+ ' seconds</h1> <h1> You are awesome, but can you beat your time !!!</h1>')

  }

	
	


	function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".container").height() - 50;
    var w = $(".container").width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

 function animateDiv(key){
     var newkey = makeNewPosition();

    
     $(key).animate({ top: newkey[0], left: newkey[1] }, function(){
       animateDiv(key);        
     });

};

function wrongCounter(){
	$divs.fadeOut()
	$container.html('<h1> you are terrible, go home and cry Muhahahahaha ;)!!! </h1>')


};

 















});