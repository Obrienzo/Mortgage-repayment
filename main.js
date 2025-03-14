document.addEventListener('DOMContentLoaded', () => {

    // Page UI Element on the page to be used...
    const clearBtn = document.querySelector('.clear-btn');
    const mortgageAmount = document.querySelector('#mortg-amount');
    const mortgageTerm = document.querySelector('#mortg-term');
    const mortgageInterestRate = document.querySelector('#interest-rate');
    const mortgageTypes = document.getElementsByName('mortgage-types');
    const repaymentRadio = document.querySelector('#repayment');
    const interestRadion = document.querySelector('#interest');
    const calculateButton = document.querySelector('.submit-btn');


    // Create the calculator functionallity
    const princinpalAmount = Number(mortgageAmount.value);
    const loanTerm = Number(mortgageTerm.value);
    const interestRate = Number(mortgageInterestRate.value);
    const types = Array.from(mortgageTypes);
    // console.log(mortgageTypes);


    if (repaymentRadio.checked) {
        console.log('repayment radio')
    }

    function clearContent() {
        mortgageAmount.value = '';
        mortgageTerm.value = '';
        dealYears.value = '';
        mortgageTypes.value = '';
    }

    clearBtn.addEventListener('click', clearContent); // Event listener for clearContent the content of input fields...


    // # Create the calculator function logic...

    const repaymentResult = calculateMonthlyRepayment(princinpalAmount, monthlyInterestRate, numberOfPayments);
    const interestOnlyResult = interestOnlyMortgage(princinpalAmount, monthlyInterestRate);

    // Calculation for each component in the form...
    const numberOfPayments = loanTerm * 12; // The total number of payments over the loan's lifetime, calculated by multiplying the number of months in a year...
    const monthlyInterestRate = (interestRate / 100) / 12; // The annual interest rate divided by 12 (the number of months in a year)...



    // Function for calculating the mortgage repayment type..
    
    // REPAYMENT
    function calculateMonthlyRepayment(amount, interest, term) { // The amount to be paid each month...
        const mortageRepayment = amount * ((interest * (1 + interest)**term) / ((1 + interest)**term - 1));
        
        return mortageRepayment;
    }


    // INTEREST ONLY 
    function calculateMonthlyInterestRate(principal, rate) {
        const interesAmount = principal * rate;

        return interesAmount;
    }


    // Function for calculating the total amount to be repaid over the mortgage term...
    function totalToBeRepaid() {
        const totalAmount = repaymentResult * numberOfPayments;

        return totalAmount;
    }



    // DISPLAY THE MORTAGE RESULTS
    function displayResults() {
        const article = document.createElement('article');
        article.setAttribute('class', 'display-box');

        const heading = document.createElement('h2');
        heading.textContent = 'Your results';
        const info = document.createElement('p');
        info.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.';

        const resultsWrapper = document.createElement('div');
        resultsWrapper.classList.add('results-wrapper');

        resultsWrapper.innerHTML = '';
        

    }

    // Function to display repayment mortage type results...
    function displayRepaymentResults() {
        const container = document.createElement('div');
        container.classList.add('results', 'repayment-results');
        container.innerHTML = `
            <section class='monthly-repayment'>
               <span class='results-title'>Your monthly repayments</span>
               <p class='operation-outcome'>£${repaymentResult}</p>
            </section>
            <hr>
            <section class='amount-tobepaid'>
               <span class='results-title'>Total you'll repay over the term</span>
               <p class='amount-compound'>£${totalToBeRepaid}</p>
            </section>
        `;

        return container;
    }


    // Function to display interest only on mortgage results...
    function displayInterestOnlyResults() {
        const container = document.createElement('div'); 
        container.classList.add('results', 'interest-only');

        container.innerHTML = `
            <section class='monthly-interest'>
               <span class='results-title'>Your monthly interest over the term</span>
               <p class='amount-compound'>£${interestOnlyResult}</p>
            </section>
        `;

        return container;
    }


})