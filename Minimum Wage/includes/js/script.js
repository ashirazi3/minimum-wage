
$(document).ready(function(){
	 wage = 7.25;
    total = 0;


	

    });

	$("#calculate").on('click', function(){
		total = parseInt(wage)*2040;
	$("form#expenseForm input[type=number]").each(function(){
		if($(this).val()!==''){
				total = parseInt(total) -     
                        parseInt($(this).val())*parseInt($("#"+$(this).attr('id').concat("rate")).val());
        }
	});
	if(total<0){
		$("#number").text('-$' + Math.abs(total));

	}else{
		$("#number").text('$' + total);
        
	}

    var img = document.getElementById('image'), 
        budgetLeftOver = null,
        clipVal = null,
        overBudgetPercentage = null,
        starting = parseInt(wage)*2040;
        
	if(total>0){
		$("#number").css("color", "green");
        document.getElementById('image').src="includes/images/dollar/dollar.jpg";
        budgetLeftOver = calcPerc(starting,total);
        clipVal = image.width*budgetLeftOver;
        console.log(budgetLeftOver, starting, total, clipVal);
        img.style.clip = getClipVal(clipVal);
        $("#number").html("Remaining In Budget: $" + total); 
        
	}else{
		$("#number").css("color", "red");
        document.getElementById('image').src="includes/images/dollar/reddollar.png";
        total = total*-1;
        overBudgetPercentage = (((total+starting)/starting)-1);
        console.log(overBudgetPercentage, total, starting);
        clipVal = image.width*overBudgetPercentage;
        img.style.clip = getClipVal2(clipVal);
        $("#number").html("Over Budget By: $" + total); 
	}
    
    
        
	});



//var img = document.getElementById('image');
//var sldH = document.getElementById('slider-h');
//var sldV = document.getElementById('slider-v');

// attach change handlers to the sliders
//sldH.addEventListener('change', changeHandler);
//sldV.addEventListener('change', changeHandler);

//function changeHandler(e) {
//    
//    var isHorizontal = e.srcElement.id == 'slider-h';
//        
//    // valhH should now equal the percentage of the 
//    var valH = sldH.value;
//    var budgetLeftOver = calcPerc(total,(total-budget));
//    //var valV = sldV.value;
//
//    // calculate the percentage to pass an absolute length value 
//    // to the clip property and determine the static value
//    var leftVal = calcPerc(img.width, valH);
//    var clipVal = getClipVal(leftVal);
//
//    // set the images' right offset clip accordingly
//    img.style.clip = clipVal;
//}

function calcPerc(total, budget) {
    var percentage = 100- (budget/total*100)
    return percentage/100;
}

function getClipVal(left) {
    return 'rect(auto, auto, auto, ' + left + 'px)';
}

function getClipVal2(right) {
    return 'rect(auto, ' + right + 'px, auto, auto)';
}

