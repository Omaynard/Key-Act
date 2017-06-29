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
//     var newPostion_b	= makeNewPosition();
//     var newPostion_c	= makeNewPosition();
//     var newPostion_d	= makeNewPosition();
//     var newPostion_e	= makeNewPosition();
//     var newPostion_f	= makeNewPosition();
//     var newPostion_g	= makeNewPosition();
//     var newPostion_h	= makeNewPosition();
//     var newPostion_i	= makeNewPosition();
//     var newPostion_j	= makeNewPosition();
//     var newPostion_k	= makeNewPosition();
//     var newPostion_l	= makeNewPosition();
//     var newPostion_m	= makeNewPosition();
//     var newPostion_n	= makeNewPosition();
//     var newPostion_o	= makeNewPosition();
//     var newPostion_p	= makeNewPosition();
//     var newPostion_q	= makeNewPosition();
//     var newPostion_r	= makeNewPosition();
//     var newPostion_s	= makeNewPosition();
//     var newPostion_t	= makeNewPosition();
//     var newPostion_u	= makeNewPosition();
//     var newPostion_v	= makeNewPosition();
//     var newPostion_w	= makeNewPosition();
//     var newPostion_x	= makeNewPosition();
//     var newPostion_y	= makeNewPosition();
//     var newPostion_z	= makeNewPosition();
    
     $(key).animate({ top: newkey[0], left: newkey[1] }, function(){
       animateDiv(key);        
     });
// 	$('#b').animate({ top: newPostion_b[0], left: newPostion_b[1] }, function(){
//       animateDiv();        
//     });
//     $('#c').animate({ top: newPostion_c[0], left: newPostion_c[1] }, function(){
//       animateDiv();        
//     });
//     $('#d').animate({ top: newPostion_d[0], left: newPostion_d[1] }, function(){
//       animateDiv();        
//     });
//     $('#e').animate({ top: newPostion_e[0], left: newPostion_e[1] }, function(){
//       animateDiv();        
//     });
//     $('#f').animate({ top: newPostion_f[0], left: newPostion_f[1] }, function(){
//       animateDiv();        
//     });
//     $('#g').animate({ top: newPostion_g[0], left: newPostion_g[1] }, function(){
//       animateDiv();        
//     });
//     $('#h').animate({ top: newPostion_h[0], left: newPostion_h[1] }, function(){
//       animateDiv();        
//     });
//     $('#i').animate({ top: newPostion_i[0], left: newPostion_i[1] }, function(){
//       animateDiv();        
//     });
//     $('#j').animate({ top: newPostion_j[0], left: newPostion_j[1] }, function(){
//       animateDiv();        
//     });
//     $('#k').animate({ top: newPostion_k[0], left: newPostion_k[1] }, function(){
//       animateDiv();        
//     });
//     $('#l').animate({ top: newPostion_l[0], left: newPostion_l[1] }, function(){
//       animateDiv();        
//     });
//     $('#m').animate({ top: newPostion_m[0], left: newPostion_m[1] }, function(){
//       animateDiv();        
//     });
//     $('#n').animate({ top: newPostion_n[0], left: newPostion_n[1] }, function(){
//       animateDiv();        
//     });
//     $('#o').animate({ top: newPostion_o[0], left: newPostion_o[1] }, function(){
//       animateDiv();        
//     });
//     $('#p').animate({ top: newPostion_p[0], left: newPostion_p[1] }, function(){
//       animateDiv();        
//     });
//     $('#q').animate({ top: newPostion_q[0], left: newPostion_q[1] }, function(){
//       animateDiv();        
//     });
//     $('#r').animate({ top: newPostion_r[0], left: newPostion_r[1] }, function(){
//       animateDiv();        
//     });
//     $('#s').animate({ top: newPostion_s[0], left: newPostion_s[1] }, function(){
//       animateDiv();        
//     });
//     $('#t').animate({ top: newPostion_t[0], left: newPostion_t[1] }, function(){
//       animateDiv();        
//     });
//     $('#u').animate({ top: newPostion_u[0], left: newPostion_u[1] }, function(){
//       animateDiv();        
//     });
//     $('#v').animate({ top: newPostion_v[0], left: newPostion_v[1] }, function(){
//       animateDiv();        
//     });
//     $('#w').animate({ top: newPostion_w[0], left: newPostion_w[1] }, function(){
//       animateDiv();        
//     });
//     $('#x').animate({ top: newPostion_x[0], left: newPostion_x[1] }, function(){
//       animateDiv();        
//     });
//     $('#y').animate({ top: newPostion_y[0], left: newPostion_y[1] }, function(){
//       animateDiv();        
//     });
//     $('#z').animate({ top: newPostion_z[0], left: newPostion_z[1] }, function(){
//       animateDiv();        
//     });
    
    
};

function wrongCounter(){
	$divs.fadeOut()
	$container.html('<h1> you are terrible, go home and cry Muhahahahaha ;)!!! </h1>')


};

 















});