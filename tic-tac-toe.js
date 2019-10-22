//Appear after page has fully loaded

window.addEventListener('DOMContentLoaded', (event) => {

    //Variables
    let boxes = document.getElementById("board").children;
    //var Array = ['0','1','2','3','4','5','6','7','8'];
    var Array = [];
    var XorY = 1; //let 1 be X and 0 be O

    




    //Actions
    
    //for loop to create 9 boxes for game
    for (let counter = 0; counter <= 8 ; counter++) {
        boxes[counter].classList.add("square");
        boxes[counter].addEventListener("click", function(){ 
            if (boxes[counter].innerHTML == ""){    
                if ( XorY == 1 ){
                    boxes[counter].innerHTML = "X" ;
                    XorY = 0; //to change clicker to O
                    Array[counter] = "X";

                   // alert (Array);

                }
                else{
                    boxes[counter].innerHTML = "O";
                    XorY = 1; //to change clicker to 1
                    Array[counter] = "O";
                  //  alert (Array)

                }
            }

        });

    } 




    //Functions
    

});
