const form = document.getElementById("form");
const cardHolderName = document.getElementById("cname");
const creditCardNumber = document.getElementById("cnum");
const expMonth = document.getElementById("expmonth");
const expYear = document.getElementById("expyear");
const cvc = document.getElementById("cvc");

form.addEventListener('confirm', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const cardHolderValue = cardHolderName.value.trim();
    const creditCardValue = creditCardNumber.value.trim();
    const expMonthValue = expMonth.value.trim();
    const expYearValue = expYear.value.trim();
    const cvcValue = cvc.value.trim();

    if(cardHolderValue == ''){
        //show error
        //add error class
    } else {
        //add success class
    }

}