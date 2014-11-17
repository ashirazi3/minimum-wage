/*---------------------
	navbar script
---------------------*/
$(document).ready(function(){
    $(window).scroll(function(){
          updateNavScroll();
    })
    $('.nav li a').on('click', function() {
	    $(this).parent().parent().find('.active').removeClass('active');
	    $(this).parent().addClass('active');
	});
})
function updateNavScroll(){
	if($(window).scrollTop() < $("#interests").position().top -110){
		$('.nav').find('.active').removeClass('active');
	    $("#navAbout").addClass('active');
	}
	if($(window).scrollTop() > $("#interests").position().top -110){
	   $('.nav').find('.active').removeClass('active');
	    $("#navInterests").addClass('active');
	}
	if($(window).scrollTop() > $("#coursework").position().top -110){
		console.log("ppp");
	   $('.nav').find('.active').removeClass('active');
	    $("#navCoursework").addClass('active');
	}
}
