//Appear after page has fully loaded

window.addEventListener('DOMContentLoaded', (event) => {

    //Variables
    let boxes = document.getElementById("board").children;
    var counter;

    




    //Actions
    
    //for loop to create 9 boxes for game
    for (counter = 0; counter <= 8; counter++) {
        boxes[counter].classList.add("square");
    } 




    //Functions

});
