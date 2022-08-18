
function updatephoneNumber () {
    const phoneNumberField=document.getElementById('phone-number-field ')

    const phoneNumberString = phoneNumberField.value;
    const previousphoneNumber =parseInt(phoneNumberString);
    const newphoneNumber =previousphoneNumber + 1;
    phoneNumberField.value =newphoneNumber;

}
document.getElementById('btn-phone-pluse').addEventListener('click',function(){
    updatephoneNumber();
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    updatephoneNumber();
})