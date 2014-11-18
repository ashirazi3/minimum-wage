
$(document).ready(function(){
	updateNavScroll();
    $(window).scroll(function(){
          updateNavScroll();
    })
    $('.nav li a').on('click', function() {
	    $(this).parent().parent().find('.active').removeClass('active');
	    $(this).parent().addClass('active');
	});
});

function updateNavScroll(){
	console.log("goes to method");
	if($(window).scrollTop() < $("#state").position().top -110){
		console.log("goes in position")
		$('.nav').find('.active').removeClass('active');
	    $("#navFamily").addClass('active');
	}
	if($(window).scrollTop() > $("#expenses").position().top -110){
	   $('.nav').find('.active').removeClass('active');
	    $("#navExpenses").addClass('active');
	}
}
