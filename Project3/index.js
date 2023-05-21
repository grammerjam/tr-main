const form = document.getElementById("form");
const cardHolderName = document.getElementById("cname");
const creditCardNumber = document.getElementById("cnum");
const expMonth = document.getElementById("expmonth");
const expYear = document.getElementById("expyear");
const cvc = document.getElementById("cvc");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicking the confirm button");
    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const cardHolderValue = cardHolderName.value.trim();
    const creditCardValue = creditCardNumber.value.trim();
    const expMonthValue = expMonth.value.trim();
    const expYearValue = expYear.value.trim();
    const cvcValue = cvc.value.trim();

    //console.log(cardHolderValue);

    if(cardHolderValue === ''){
        //show error
        //add error class
        setErrorFor(cardHolderName, 'cardholder name cannot be blank');
    } else {
        //add success class
        setSuccessFor(cardHolderName);
    }

}

function setErrorFor(nameOfInputField, errorMessage){
    const inputs = nameOfInputField.parentElement; //.inputs class
    const small = inputs.querySelector('small');

    //add error message inside <small> tag
    small.innerText = errorMessage;

    //add the error class
    inputs.className = 'inputs error';
}

function setSuccessFor(nameOfInputField){
    const inputs = nameOfInputField.parentElement; //.input class
    inputs.className = 'inputs success';
}