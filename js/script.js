/**
 * 1. add event listener to the case plus
 * 2. get the value inside the case number field (input field)
 * 3. convert the number to an integer
 * 4. calculate the new case number.
 * 5. set the value to the case number field
 */

function updatecaseNumber (isIncrase){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouscaseNumber =parseInt(caseNumberString);
    let newcaseNumber;
    if (isIncrase===true){ 
            newcaseNumber =previouscaseNumber + 1;
        }
        else{
            newcaseNumber =previouscaseNumber - 1;
        }
    
    caseNumberField.value =newcaseNumber;
    return newcaseNumber;
 
}

function updatecaseTotal(newcaseNumber){
    const casetotalPrice = newcaseNumber * 59;
    const casetotalElement = document.getElementById('case-total');
    casetotalElement.innerText=casetotalPrice;

}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previouscaseNumber =parseInt(caseNumberString);
    // const newcaseNumber =previouscaseNumber + 1;
    // caseNumberField.value =newcaseNumber;
    const newcaseNumber = updatecaseNumber(true);
    updatecaseTotal(newcaseNumber);
   


})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previouscaseNumber =parseInt(caseNumberString);
    // const newcaseNumber =previouscaseNumber - 1;
    // caseNumberField.value =newcaseNumber;
   const newcaseNumber = updatecaseNumber(false);
   updatecaseTotal(newcaseNumber);
})