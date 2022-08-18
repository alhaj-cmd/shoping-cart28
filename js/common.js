function getTextElement(elementId){
    const phonetotalElement=document.getElementById(elementId);
    const currentphonetotalString=phonetotalElement.innerText;
    const currentphonetotal=parseInt(currentphonetotalString);
    return currentphonetotal;
}

function setElementvalue(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText= value;

}

// calculater
function calculateSubtotal(){
    //calculate total
    const currentphonetotal =getTextElement('phone-total');
    const currentcasetotal = getTextElement('case-total');
    const currentsubTotal = currentcasetotal+currentphonetotal;
 
    // const subtotalElement = document.getElementById('sub-total');
    // subtotalElement.innerText= currentsubTotal;
    setElementvalue('sub-total',currentsubTotal)
    // calculate tax
    const taxAmountstring =( currentsubTotal * 0.1).toFixed(2);
    const taxAmount =parseFloat(taxAmountstring);
    setElementvalue('tax-amount',taxAmount);

    const finalAmount = currentsubTotal + taxAmount;
    setElementvalue('final-total',finalAmount);

}