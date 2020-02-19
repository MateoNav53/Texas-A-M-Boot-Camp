var slideInterval = 3500;
function getFigures() {
    return document.getElementById("carousel").getElementsByTagName("figure");
}
function moveForward() {
    var pointer;
    var figures = getFigures();
    /*
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className === "visible") {
            figures[i].className = "";
            pointer = i;
        }
    }
    */

    for (var i = 0; i < figures.length; i++) {
        if ( figures[i].classList.contains("visible") ) {
            figures[i].classList.remove("visible");
            pointer = i;
        }
    }


    /*
    if (++pointer == figures.length) {
        pointer = 0;
    }
    */
    // pointer = (pointer + 1) % figures.length;

    pointer += 1;  // pointer = pointer + 1;
    if ( pointer === figures.length ) {
        pointer = 0; 
    }

    figures[pointer].classList.add("visible");
}

function startPlayback() {
    setInterval(moveForward, slideInterval);
}
startPlayback();
//Image carousel isn't working