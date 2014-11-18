
$(document).ready(function(){
	updateNavScroll();
	var state = null;

	$('#map').usmap({
		stateStyles: {fill: '#E0E0E0'},
		stateHoverStyles:{fill: '#203D6C'},
		click: function(event, data){
			state = data.name;
		$('html,body').animate({scrollTop: $('#expenses').offset().top}, 750);

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

	$('.nav li a').on('click', function() {
		$(this).parent().parent().find('.active').removeClass('active');
		$(this).parent().addClass('active');
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 750);
				return false;
			}
		}
	});




	

});

function autoscroll(){

}


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

function setFamily(num){
	$('html,body').animate({scrollTop: $('#state').offset().top}, 750);
	if(num==0){
		$("#housing").val("639");
		$("#child").val("0");
		$("#groceries").val("242");
		$("#medical").val("123");
		$("#transportation").val("318");
		$("#other").val("74");
	}else if(num === 2){
		$("#housing").val("782");
		$("#child").val("417");
		$("#groceries").val("242");
		$("#medical").val("393");
		$("#transportation").val("618");
		$("#other").val("162");
	}

}
