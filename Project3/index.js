document.addEventListener('DOMContentLoaded', () => {

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

        //check for valid cardholder name
        if (cardHolderValue === "") {
            //show error
            //add error class
            setErrorFor(cardHolderName, 'Cardholder name cannot be blank');
        } else {
            //add success class
            setSuccessFor(cardHolderName);
        }

        //checks for valid credit card format
        checksIfValidFormatFor(creditCardValue, creditCardNumber, "Cannot be blank", "Invalid Format. Numbers only");

        //checks for valid expiration dates for month
        checksIfValidFormatFor(expMonthValue, expMonth, "Cannot be blank", "Invalid Format. Numbers only");

        //checks for valid expiration dates for year
        checksIfValidFormatFor(expYearValue, expYear, "Cannot be blank", "Invalid Format. Numbers only");

        //checks for valid CVC
        checksIfValidFormatFor(cvcValue, cvc, "Cannot be blank", "Invalid Format. Numbers only");
    }

    function checksIfValidFormatFor(inputFieldValue, inputFieldName, errorMessage1, errorMessage2) {
        //checks for valid format
        if (inputFieldValue === "") {
            setErrorFor(inputFieldName, errorMessage1);
        } else if (!isValidFormat(inputFieldValue)) {
            setErrorFor(inputFieldName, errorMessage2);
        } else {
            setSuccessFor(inputFieldName);
        }
    }

    function setErrorFor(nameOfInputField, errorMessage) {
        const inputs = nameOfInputField.parentElement; //.inputs class
        const small = inputs.querySelector('small');

        //add error message inside <small> tag
        small.innerText = errorMessage;

        //add the error class
        inputs.className = 'inputs error';
    }

    function setSuccessFor(nameOfInputField) {
        const inputs = nameOfInputField.parentElement; //.input class
        inputs.className = 'inputs success';
    }

    function isValidFormat(nameOfInputField) {
        //check if value are all numbers
        ///^\d+$/ Regular expression pattern to match numbers only
        return /^\d+$/.test(nameOfInputField);
    }
});