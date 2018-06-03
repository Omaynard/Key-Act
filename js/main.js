$(function(){

	var $divs = $('.keys');
	var $container = $('.container')
	var currentChar = null;
	var createdTime = 0;
	var wrongCount = 3;
	var $buttonstart = $('#startbutton');
	var $instructionButton = $('#instructionButton');
	var $reset = $('#resetButton');
	var $leader = $('#leaderboardButton');
	var leaderboardArray = [];
	var objNumber = localStorage.length;
	var $leaderboardelement = $('.leaderboard');
	$leaderboardelement.hide();

	
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

	$leader.click(function(event){
			$divs.css('visibility','hidden');
			$('.instruction').css('visibility','hidden');
	});
	
	
	

	clickedLetter();

	function playLetter (event) {
		var timeout = Math.floor(Math.random()*(5000-2000+1))+2000

		setTimeout(function (){
			currentChar = randomAddClass();	
		}, timeout)
		
	}

  function clickedLetter () {

	 	$('body').keypress(function(event){
	 		
	 		if((wrongCount != 0)&&(currentChar == event.key)){
					currentChar = randomAddClass();
					$('.wCount').html('<h1>Lives left:'+ wrongCount +'<h1>'); 
		 			console.log('correct key press');
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
					}else {
		 							wrongCounter();
		 				}
		 		});
	}
	 


	

	function randomAddClass () {
	  	var $ds = $divs.not('.flip');
	  	if($ds.length == 1){
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
	  	console.log(time2);

	  	var propertime = ((time2 - createdTime)/1000)
	  	var data = {'score': propertime};
	  	leaderboardArray.push(data);
	  	storeScores(data);

	  	$container.html('<h1> Your time is ' +propertime+ ' seconds</h1> <h1> You are awesome, but can you beat your time !!!</h1>')

  	}
  	function storeScores(array){

  		var theObject = JSON.stringify(array);
  		localStorage.setItem(objNumber.toString(), theObject);
		objNumber = localStorage.length;
		retrieveScores();

  	}

  	function retrieveScores () {
		var scores = [];

		for (var i = 0; i < objNumber; i++) {
			try {
				var item = JSON.parse(localStorage.getItem(i));
				scores.push(item);
			} catch(e) {
        	alert(e);
    		}	
		}

		if (scores.length < 5) {
			for (var i = 0; i < scores.length; i++) {
				$('ol').append('<li><p class="leadname">' + scores[i].name + '</p><p class="leadscore">score: ' + scores[i].score.toString() + '</p></li>');
			}
		} else {
			for (var i = 0; i < 5; i++) {
				$('ol').append('<li><p class="leadname">' + scores[i].name + '</p><p class="leadscore">score: ' + scores[i].score.toString() + '</p></li>');
			}
		}
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

	    
	     $(key).animate({ top: newkey[0], left: newkey[1] },800 , function(){
	       animateDiv(key);        
	     });

	};

	function wrongCounter(){
		$divs.fadeOut()
		$container.html('<h1> Woow that was fas... Oh you lost, Have another try ;)  </h1>')

	};

 















});