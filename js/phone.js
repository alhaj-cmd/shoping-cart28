
function updatephoneNumber (isIncrase) {
    const phoneNumberField=document.getElementById('phone-number-field ')

    const phoneNumberString = phoneNumberField.value;
    const previousphoneNumber =parseInt(phoneNumberString);
    
    
    let newphoneNumber;
    if (isIncrase===true) {
        newphoneNumber=previousphoneNumber + 1;
    } else{
        newphoneNumber=previousphoneNumber - 1;
    }
    phoneNumberField.value =newphoneNumber;
    return newphoneNumber;

}

function updatephoneTotal(newphoneNumber){
    const phonetotalPrice = newphoneNumber * 1219;
    const phonetotalElement = document.getElementById('phone-total');
    phonetotalElement.innerText=phonetotalPrice;

}

// function getTextElement(elementId){
//     const phonetotalElement=document.getElementById(elementId);
//     const currentphonetotalString=phonetotalElement.innerText;
//     const currentphonetotal=parseInt(currentphonetotalString);
//     return currentphonetotal;
// }
// // calculater
// function calculateSubtotal(){
//     const currentphonetotal =getTextElement('phone-total');
//     const currentcasetotal = getTextElement('case-total');
//     const currentsubTotal = currentcasetotal+currentphonetotal;
 
//     const subtotalElement = document.getElementById('sub-total');
//     subtotalElement.innerText= currentsubTotal

// }

document.getElementById('btn-phone-pluse').addEventListener('click',function(){
   const newphoneNumber = updatephoneNumber(true);
   updatephoneTotal(newphoneNumber);
// calculate
    calculateSubtotal()
  

})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphoneNumber = updatephoneNumber(false);
    updatephoneTotal(newphoneNumber);
    calculateSubtotal()
})