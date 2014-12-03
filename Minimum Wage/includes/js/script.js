$(document).ready(function(){
    wage = 7.25;
    total = 0;

    var i;
    for(i=1; i<211; i++){
        $("#dollarRow").prepend('<img id="dollar'+ i +'"" src="includes/images/dollar/dollar.jpg" style= "visibility:none; width:10%"/>');
    }
    
    $("#calculate").on('click', function(){
        total = parseInt($("#salary").val());
        var leftover = total;
        console.log(total);
        $("form#expenseForm input[type=number]").each(function(){
            if($(this).attr("id") == $("#salary").attr("id")){
                console.log("good");
            }else if($(this).val()>0){
                var rate= $(this).attr("id") + "rate";
                leftover = parseInt(leftover) - parseInt($(this).val())*parseInt($("#" + rate).val());
                console.log("test " + leftover)
            }
        });
        console.log("leftover " + leftover)
        calculatedollars((leftover/total)*210);
        updateText(leftover);
    });
});

function resetdollars(number){
    if(number>0){
        for(i=1; i<211; i++){
            $("#dollar"+i).attr("src", "includes/images/dollar/dollar.jpg");
        }
    }else{
        for(i=1; i<211; i++){
            $("#dollar"+i).attr("src", "includes/images/dollar/reddollar.png");
        }
    }
    for(i=1; i<211; i++){
        if(i>=number){ 
            $("#dollar"+i).attr("style", "width:10%");
        }
    }
}

function calculatedollars(number){
    if(number>0){
        resetdollars(1);
        for(i=1; i<211; i++){
            if(i>=number){ 
                $("#dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#dollar"+i).attr("style", "width:10%");
            }
        }
    }else{
        resetdollars(-1);
        var inv = Math.abs(number);
        for(i=1; i<211; i++){
            if(i>=inv){ 
                $("#dollar"+i).attr("style", "visibility:hidden; width:10%");
            }else{
                $("#dollar"+i).attr("style", "width:10%");
            }
        }
    }
}

function updateText(leftover){
    if(leftover>= 0){
        $("#number").text("You will have an excess of $" + leftover + " a year")
    }else{
        $("#number").text("At this rate, you will accumulate $" + Math.abs(leftover) + " of debt each year")
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