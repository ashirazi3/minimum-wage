
$(document).ready(function(){
	updateNavScroll();
	var family = 0;
	var state = null;

	$('#map').usmap({
		stateStyles: {fill: '#E0E0E0'},
		stateHoverStyles:{fill: '#203D6C'},
		click: function(event, data){
			state = data.name;
			console.log(state); 
		}
	});
	$('#map').usmap({stateHoverAnimation: 100});
    $(window).scroll(function(){
          updateNavScroll();
    })
    $('.nav li a').on('click', function() {
	    $(this).parent().parent().find('.active').removeClass('active');
	    $(this).parent().addClass('active');
	});
});

function updateNavScroll(){
	if($(window).scrollTop() > $("#expenses").position().top -110){
	   $('.nav').find('.active').removeClass('active');
	    $("#navExpenses").addClass('active');
	}else if($(window).scrollTop() > $("#state").position().top -110){
	   $('.nav').find('.active').removeClass('active');
	    $("#navState").addClass('active');
	}else{
		$('.nav').find('.active').removeClass('active');
	    $("#navFamily").addClass('active');
	}
}
