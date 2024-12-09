document.addEventListener('DOMContentLoaded', () => {

    // Page UI Element on the page to be used...
    const clearBtn = document.querySelector('.clear-btn');
    const mortgageAmount = document.querySelector('#mortg-amount');
    const mortgageTerm = document.querySelector('#mortg-term');
    const dealYears = document.querySelector('#interest-rate');
    const mortgageTypes = document.getElementsByName('mortgage-types');
    const calculateButton = document.querySelector('.submit-btn');


    // Create the calculator functionallity
    const amount = mortgageAmount.value;
    const term = mortgageTerm.value;
    const years = dealYears.value;
    const types = Array.from(mortgageTypes);


    function clearContent() {
        mortgageAmount.value = '';
        mortgageTerm.value = '';
        dealYears.value = '';
        mortgageTypes.value = '';
    }

    clearBtn.addEventListener('click', clearContent);


})