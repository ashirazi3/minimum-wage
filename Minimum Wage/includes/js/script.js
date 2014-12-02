$(document).ready(function(){
    wage = 7.25;
    total = 0;

    var i;
    for(i=0; i<210; i++){
        $("#dollarRow").prepend('<img id="dollar'+ i +'"" src="includes/images/dollar/dollar.jpg" style="width:10%"/>');
    }
    
    $("#calculate").on('click', function(){
        total = parseInt($("#salary").val());
        console.log(total);
        $("form#expenseForm input[type=number]").each(function(){
            if($(this).val()===$("#salary").val()){
                console.log("good");
            }
        });
//                 // Right after this total becomes null
//                 $("form#expenseForm input[type=number]").each(function(){
//                   if($(this).val()!==''){
//                     total = parseInt(total) -     
//                     parseInt($(this).val())*parseInt($("#"+$(this).attr('id').concat("rate")).val());
//                 }
//                 $("#minimum").show();
//                 $('#map').usmap({
//                     stateStyles: {fill: '#E0E0E0'},
//                     stateHoverStyles:{fill: '#203D6C'},      
//                     click: function(event, data){
//                         $("#map>svg>path").each(function(){
//                             $(this).css('fill', ''); 
//                         });
//                         $('#' + data.name).css('fill', '#203D6C');
//                         if(data.name==='CA'){
//                             wage=9;
//                         }else{
//                             wage=7.25;
//                         }              
//                         $('html,body').animate({scrollTop: $('#expenses').offset().top}, 750);

//                         $('#map').usmap({stateHoverAnimation: 100});
//                     }
//                 });
//             });
// if(total<0){
//   $("#number").text('-$' + Math.abs(total));

// }else{
//   $("#number").text('$' + total);

// }

// var img = document.getElementById('image'), 
// budgetLeftOver = null,
// clipVal = null,
// overBudgetPercentage = null,
// starting = parseInt(wage)*2040;

// if(total>0){
//   $("#number").css("color", "green");
//   document.getElementById('image').src="includes/images/dollar/dollar.jpg";
//   budgetLeftOver = calcPerc(starting,total);
//   clipVal = image.width*budgetLeftOver;
//   console.log(budgetLeftOver, starting, total, clipVal);
//   img.style.clip = getClipVal(clipVal);
//   $("#number").html("Remaining In Budget: $" + total); 

// }else{
//   $("#number").css("color", "red");
//   document.getElementById('image').src="includes/images/dollar/reddollar.png";
//   total = total*-1;
//   overBudgetPercentage = (((total+starting)/starting)-1);
//   console.log(overBudgetPercentage, total, starting);
//   clipVal = image.width*overBudgetPercentage;
//   img.style.clip = getClipVal2(clipVal);
//   $("#number").html("Over Budget By: $" + total); 
// }
});
});

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

function clickState(event, data){
    $("#map > svg > path").each(function(){
        $(this).css('fill', '');
    });
    $('#' + data.name).css('fill', 'pink');
}




// <div class="col-md-5 col-md-offset-1" id="view2">
//     <div class="row" id="titlev2">
//         <h2 style="margin-left:2%">Where do you live?</h2>
//     </div> <!--title v2-->
//     <div class="row" id="contentv2">
//         <div class="container state col-md-6 col-md-offset-0 text-center"
//         id="map" style="width: 570px; height: 400px;"></div>
//     </div> <!--content v2-->
// </div> <!--v2-->