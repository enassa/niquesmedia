

let numOfdivs = $$('.carosal').length;
let allDivs = $$('.carosal');
let allDots = $$('.dots');
setInterval(slideView, 4000);
setInterval(slideHide, 4000);
setInterval(reStack, 4000);
console.log(allDivs);
console.log(numOfdivs);
var counter = 0;

function slideView() {
    if (counter == 0) {
       allDivs[counter].classList.add('slideView');
       allDots[counter].style.backgroundColor ="rgb(225, 0, 0";
    } else if (counter >= 0 && counter < numOfdivs) {
        allDivs[counter].classList.add('slideView');
        console.log("viewnumber" + counter)
        console.log(allDots);
        allDots[counter].style.backgroundColor ="rgb(225, 0, 0";
    } else {
        allDivs[counter - 1].classList.add('slideHide');
    }
}

function slideHide() {
    if (counter == 0) {
        try {    
            allDots[(counter-1)].style.backgroundColor ="rgb(255, 255, 255)";              //   allDivs[numOfdivs-1].classList.add('slideHide2');   
        } catch {
        }
    } else if (counter > 0 && counter < numOfdivs) {
        try{
            allDots[(counter-1)].style.backgroundColor ="rgb(255, 255, 255)";
        }
        catch{
        }
        allDivs[counter - 1].classList.add('slideHide');   //             console.log("hidenumber" + counter)
    } else {
        allDots[(counter-1)].style.backgroundColor ="rgb(255, 255, 255)";
        counter = -1;
    }
    counter++;
}
var newLength = numOfdivs + 1;
var counter2 = 0;

function reStack() {
    if (counter2 <= 1) {

    } else {
        var targetDiv = allDivs[(counter2 - 2)];
        targetDiv.className = targetDiv.className.replace(/\bslideView\b/g, " ");
        targetDiv.className = targetDiv.className.replace(/\bslideHide\b/g, " ");
    }
    if (counter2 == newLength) {
        counter2 = 0;
    }
    counter2++;
}
