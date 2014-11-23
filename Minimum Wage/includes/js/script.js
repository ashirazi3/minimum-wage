
$(document).ready(function(){
	var wage = null;
	var total = 0;


	

});



var img = document.getElementById('image');
var sldH = document.getElementById('slider-h');
//var sldV = document.getElementById('slider-v');

// attach change handlers to the sliders
sldH.addEventListener('change', changeHandler);
//sldV.addEventListener('change', changeHandler);

function changeHandler(e) {
    
    var isHorizontal = e.srcElement.id == 'slider-h';
        
    // get the sliders values
    var valH = sldH.value;
    //var valV = sldV.value;

    // calculate the percentage to pass an absolute length value 
    // to the clip property and determine the static value
    var leftVal = calcPerc(img.width, valH);
    //var topVal = -1 * calcPerc(img.height, valV);
    var clipVal = getClipVal(leftVal);

    // set the images' right offset clip accordingly
    img.style.clip = clipVal;
}

function calcPerc(range, val) {
    return range / 100 * val;
}

function getClipVal(left) {
    return 'rect(auto, auto, auto, ' + left + 'px)';
}

