$(function(){
	var $buttonstart = $('#startbutton')
	$buttonstart.click(animateDiv)

	function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".container").height() - 50;
    var w = $(".container").width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newPostion_a = makeNewPosition();
    var newPostion_b	= makeNewPosition();
    var newPostion_c	= makeNewPosition();
    var newPostion_d	= makeNewPosition();
    var newPostion_e	= makeNewPosition();
    var newPostion_f	= makeNewPosition();
    var newPostion_g	= makeNewPosition();
    var newPostion_h	= makeNewPosition();
    var newPostion_i	= makeNewPosition();
    var newPostion_j	= makeNewPosition();
    var newPostion_k	= makeNewPosition();
    var newPostion_l	= makeNewPosition();
    var newPostion_m	= makeNewPosition();
    var newPostion_n	= makeNewPosition();
    var newPostion_o	= makeNewPosition();
    var newPostion_p	= makeNewPosition();
    var newPostion_q	= makeNewPosition();
    var newPostion_r	= makeNewPosition();
    var newPostion_s	= makeNewPosition();
    var newPostion_t	= makeNewPosition();
    var newPostion_u	= makeNewPosition();
    var newPostion_v	= makeNewPosition();
    var newPostion_w	= makeNewPosition();
    var newPostion_x	= makeNewPosition();
    var newPostion_y	= makeNewPosition();
    var newPostion_z	= makeNewPosition();
    
    $('#a').animate({ top: newPostion_a[0], left: newPostion_a[1] }, function(){
      animateDiv();        
    });
	$('#b').animate({ top: newPostion_b[0], left: newPostion_b[1] }, function(){
      animateDiv();        
    });
    $('#c').animate({ top: newPostion_c[0], left: newPostion_c[1] }, function(){
      animateDiv();        
    });
    $('#d').animate({ top: newPostion_d[0], left: newPostion_d[1] }, function(){
      animateDiv();        
    });
    $('#e').animate({ top: newPostion_e[0], left: newPostion_e[1] }, function(){
      animateDiv();        
    });
    $('#f').animate({ top: newPostion_f[0], left: newPostion_f[1] }, function(){
      animateDiv();        
    });
    $('#g').animate({ top: newPostion_g[0], left: newPostion_g[1] }, function(){
      animateDiv();        
    });
    $('#h').animate({ top: newPostion_h[0], left: newPostion_h[1] }, function(){
      animateDiv();        
    });
    $('#i').animate({ top: newPostion_i[0], left: newPostion_i[1] }, function(){
      animateDiv();        
    });
    $('#j').animate({ top: newPostion_j[0], left: newPostion_j[1] }, function(){
      animateDiv();        
    });
    $('#k').animate({ top: newPostion_k[0], left: newPostion_k[1] }, function(){
      animateDiv();        
    });
    $('#l').animate({ top: newPostion_l[0], left: newPostion_l[1] }, function(){
      animateDiv();        
    });
    $('#m').animate({ top: newPostion_m[0], left: newPostion_m[1] }, function(){
      animateDiv();        
    });
    $('#n').animate({ top: newPostion_n[0], left: newPostion_n[1] }, function(){
      animateDiv();        
    });
    $('#o').animate({ top: newPostion_o[0], left: newPostion_o[1] }, function(){
      animateDiv();        
    });
    $('#p').animate({ top: newPostion_p[0], left: newPostion_p[1] }, function(){
      animateDiv();        
    });
    $('#q').animate({ top: newPostion_q[0], left: newPostion_q[1] }, function(){
      animateDiv();        
    });
    $('#r').animate({ top: newPostion_r[0], left: newPostion_r[1] }, function(){
      animateDiv();        
    });
    $('#s').animate({ top: newPostion_s[0], left: newPostion_s[1] }, function(){
      animateDiv();        
    });
    $('#t').animate({ top: newPostion_t[0], left: newPostion_t[1] }, function(){
      animateDiv();        
    });
    $('#u').animate({ top: newPostion_u[0], left: newPostion_u[1] }, function(){
      animateDiv();        
    });
    $('#v').animate({ top: newPostion_v[0], left: newPostion_v[1] }, function(){
      animateDiv();        
    });
    $('#w').animate({ top: newPostion_w[0], left: newPostion_w[1] }, function(){
      animateDiv();        
    });
    $('#x').animate({ top: newPostion_x[0], left: newPostion_x[1] }, function(){
      animateDiv();        
    });
    $('#y').animate({ top: newPostion_y[0], left: newPostion_y[1] }, function(){
      animateDiv();        
    });
    $('#z').animate({ top: newPostion_z[0], left: newPostion_z[1] }, function(){
      animateDiv();        
    });
    
    
};


 















})