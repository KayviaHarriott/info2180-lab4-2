//Appear after page has fully loaded

window.addEventListener('DOMContentLoaded', (event) => {

    //Variables
    let boxes = document.getElementById("board").children;
    //var stat = ['0','1','2','3','4','5','6','7','8'];
    var stat = [];
    var winnerMessage = 0;
    var XorY = 1; //let 1 be X and 0 be O

    
    //Actions
    
    //for loop to create 9 boxes for game
    for (let boxNum = 0; boxNum <= 8; boxNum ++){
        boxes[boxNum].setAttribute("class", "square");
    }

    //to choose X or O
    for (let counter = 0; counter <= 8 ; counter++) {
      //  boxes[counter].classList.add("square");
        //boxes[counter].setAttribute(counter,"square");
        
        boxes[counter].addEventListener("click", function(){ 
            if (boxes[counter].innerHTML == ""){    
                if ( XorY == 1 ){
                    boxes[counter].innerHTML = "X"; //place x
                    boxes[counter].classList.add("X");   // get attributes           
    
                    XorY = 0; //to change clicker to O
                    stat[counter] = "X";
                    winner();

                   // alert (stat);

                }
                else{
                    boxes[counter].innerHTML = "O";
                    boxes[counter].classList.add("O");   
                    XorY = 1; //to change clicker to 1
                    stat[counter] = "O";
                  //  alert (stat)
                    winner();

                }
            }

            

        });  
        
        //Functions

        //to change color when mouse hovers
        boxes[counter].addEventListener("mouseover", function(){
            boxes[counter].classList.add("hover"); 
        });

        boxes[counter].addEventListener("mouseout", function(){
            boxes[counter].classList.remove("hover");
        });  

        function winner(){
            if (((stat[0] == "X" && stat[1] == "X" && stat[2] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if ( ((stat[0] == "O" && stat[1] == "O" && stat[2] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if (((stat[3] == "X" && stat[4] == "X" && stat[5] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if ( ((stat[3] == "O" && stat[4] == "O" && stat[5] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if (((stat[6] == "X" && stat[7] == "X" && stat[8] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];

            }
            else if ( ((stat[6] == "O" && stat[7] == "O" && stat[8] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }

            else if (((stat[0] == "X" && stat[3] == "X" && stat[5] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if ( ((stat[0] == "O" && stat[3] == "O" && stat[5] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if (((stat[1] == "X" && stat[4] == "X" && stat[7] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];

            }
            else if ( ((stat[1] == "O" && stat[4] == "O" && stat[7] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if (((stat[2] == "X" && stat[5] == "X" && stat[8] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];

            }
            else if ( ((stat[2] == "O" && stat[5] == "O" && stat[8] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }

            else if (((stat[0] == "X" && stat[4] == "X" && stat[8] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];

            }
            else if ( ((stat[0] == "O" && stat[4] == "O" && stat[8] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }
            else if (((stat[2] == "X" && stat[4] == "X" && stat[6] == "X")) && winnerMessage == 0){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];

            }
            else if ( ((stat[2] == "O" && stat[4] == "O" && stat[6] == "O"))  && winnerMessage == 0) {
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!" ;
                document.getElementById("status").classList.add("you-won");
                winnerMessage = 1;
                Array = [];
            }


        }



        

    }    

});
