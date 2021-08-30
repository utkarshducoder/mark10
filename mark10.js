const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const avlblNotes = [2000,1000, 500, 100, 20, 5, 1];



function validAmount(){
    hideMessage();
    if(billAmount.value > 0){

        if(cashGiven.value > billAmount.value){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculate(amountToReturn);

        }
        else{
           showMessage("The cash provided should atleast be equal to the bill amount");
            //errorMessage.innerText = "Cash provided must be equal to the bill amount";

        }

    }
    else{
        showMessage("Invalid Bill Amount");
        //errorMessage.innerText = "invalid Bill amount";
       // show("Invalid Bill Amount");
       
       
    }
}

function calculate(amountToReturn){
    for( let i = 0; i < avlblNotes.length; i++){
    
        const numberOfNotes = Math.trunc(amountToReturn / avlblNotes[i]);
        amountToReturn %= avlblNotes[i];
        noOfNotes[i].innerText = numberOfNotes; 
    }

}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(msg){
       errorMessage.style.display = "block";  //When we want to show the mssge we set it to block so we can see the message
       errorMessage.innerText = msg;
}

checkButton.addEventListener("click", validAmount);
