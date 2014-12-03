var wage = 7.25;
var total = 0;
var stotal = 0;
var i;
var secondCalculated = false;

$(document).ready(function(){
    
    for(i=1; i<221; i++){
        $("#dollarRow").prepend('<img id="dollar'+ i +'"" src="includes/images/dollar/dollar.jpg" style= "visibility:none; width:10%"/>');
    }
    
    $("#calculate").on('click', function(){
        doMagic(total);
        $("#minimum").show();
        $('#map').usmap({
        stateStyles: {fill: '#E0E0E0'},
        stateHoverStyles:{fill: '#203D6C'},      
        click: function(event, data){
            $("#map>svg>path").each(function(){
                $(this).css('fill', '');
                
            });

            $('#' + data.name).css('fill', '#203D6C');
            if(data.name==='CA'){
                wage=9;
            }else{
                wage=7.25;
            }              
            if(data.name==='CA'){
                wage=9;
            }else{
                wage=7.25;
            }

            if(!secondCalculated){
                secondCalculated = true;
                createSecondDollar();
            } 
            doMagic2(stotal)                  
            $('#map').usmap({stateHoverAnimation: 100});
        }
        });
    });
});

function doMagic2(total){
    stotal = wage*2040;
        var leftover = stotal;
        $("form#expenseForm input[type=number]").each(function(){
            if($(this).attr("id") == $("#salary").attr("id")){
            }else if($(this).val()>0){
                var rate= $(this).attr("id") + "rate";
                leftover = parseInt(leftover) - parseInt($(this).val())*parseInt($("#" + rate).val());
            }
        });
        calculatedollars2((leftover/stotal)*210);
        updateText2(leftover);

}
function createSecondDollar(){
    var j;
    for(j=1; j<221; j++){
        $("#dollarRow2").prepend('<img id="2dollar'+ j +'"" src="includes/images/dollar/dollar.jpg" style= "visibility:none; width:10%"/>');
    }
}
function resetdollars2(number){
    var j;
    if(number>0){
        for(j=1; j<221; j++){
            $("#2dollar"+j).attr("src", "includes/images/dollar/dollar.jpg");
        }
    }else{
        for(j=1; j<221; j++){
            $("#2dollar"+j).attr("src", "includes/images/dollar/reddollar.png");
        }
    }
    for(j=1; j<221; j++){
        if(j>=number){ 
            $("#2dollar"+i).attr("style", "width:10%");
        }
    }
}

function calculatedollars2(number){
    var i;
    if(number>0){
        resetdollars2(1);
        for(i=1; i<221; i++){
            if(i>=number){ 
                $("#2dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#2dollar"+i).attr("style", "width:10%");
            }
        }
    }else{
        resetdollars2(-1);
        var inv = Math.abs(number);
        for(i=1; i<221; i++){
            if(i>=inv){ 
                $("#2dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#2dollar"+i).attr("style", "width:10%");
            }
        }
    }
}
function doMagic(total){
    total = parseInt($("#salary").val());
        var leftover = total;
        $("form#expenseForm input[type=number]").each(function(){
            if($(this).attr("id") == $("#salary").attr("id")){
            }else if($(this).val()>0){
                var rate= $(this).attr("id") + "rate";
                leftover = parseInt(leftover) - parseInt($(this).val())*parseInt($("#" + rate).val());
            }
        });
        calculatedollars((leftover/total)*210);
        updateText(leftover);
        if(secondCalculated){
            doMagic2(total)
        }
}
function resetdollars(number){
    var i;
    if(number>0){
        for(i=1; i<221; i++){
            $("#dollar"+i).attr("src", "includes/images/dollar/dollar.jpg");
        }
    }else{
        for(i=1; i<221; i++){
            $("#dollar"+i).attr("src", "includes/images/dollar/reddollar.png");
        }
    }
    for(i=1; i<221; i++){
        if(i>=number){ 
            $("#dollar"+i).attr("style", "width:10%");
        }
    }
}

function calculatedollars(number){
    if(number>0){
        resetdollars(1);
        var i;
        for(i=1; i<221; i++){
            if(i>=number){ 
                $("#dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#dollar"+i).attr("style", "width:10%");
            }
        }
    }else{
        resetdollars(-1);
        var inv = Math.abs(number);
        var i;
        for(i=1; i<221; i++){
            if(i>=inv){ 
                $("#dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#dollar"+i).attr("style", "width:10%");
            }
        }
    }
}

function updateText2(leftover){
    if(leftover>= 0){
        $("#number2").text("You will have an excess of $" + leftover + " a year.")
    }else{
        $("#number2").text("At this rate, you will accumulate $" + Math.abs(leftover) + " of debt each year.")
    }
}

function updateText(leftover){
    if(leftover>= 0){
        $("#number").text("You will have an excess of $" + leftover + " a year.")
    }else{
        $("#number").text("At this rate, you will accumulate $" + Math.abs(leftover) + " of debt each year.")
    }
}

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