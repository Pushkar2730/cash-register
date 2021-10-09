const billAmt=document.querySelector("#billAmt")
const cashGiven=document.querySelector("#cashRecieved")
const numberOfNotes=document.querySelectorAll(".no-of-notes")
const checkButton=document.querySelector("#check")
const msg=document.querySelector("#message");
const availableNotes=[2000,500,200,100,50,20,10,5,2,1];

checkButton.addEventListener("click",function(){
    msg.style.display= "none";
    console.log(billAmt.value);
    console.log(cashGiven.value);
    
        if(billAmt.value > 0)
        {  
            let bill=billAmt.value;
            let cash=cashGiven.value;          
        if(cash >= bill){
             const output=cashGiven.value-billAmt.value;
             console.log(output);
             change(output);
        }
        else{
            showMessage("you are short of money");
        }
        
    }
    else{
        showMessage("plz enter valid amount");
    }
}

)
function change(output){
for(var i=0;i<numberOfNotes.length;i++){
numberOfNotes[i].innerText=Math.trunc(output/availableNotes[i]);
output=output%availableNotes[i];

}
}

function showMessage(message){
    msg.innerText=message;
    msg.style.display= "block";
}