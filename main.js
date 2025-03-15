document.addEventListener('DOMContentLoaded', () => {

    const calculatorDisplay = document.querySelector('.repayment-display');
    calculatorDisplay.innerHTML = `${UpdateDisplay()}`;


    // Page UI Element on the page to be used...
    const refreshBtn = document.querySelector('.clear-btn');
    const principalAmount = document.querySelector('#mortg-amount');
    const loanTerm = document.querySelector('#mortg-term');
    const loanRate = document.querySelector('#interest-rate');
    const repaymentRadio = document.querySelector('#repayment');
    const interestRadio = document.querySelector('#interest');
    const submitButton = document.querySelector('.submit-btn');


    // Form submit event 
    submitButton.addEventListener('submit', (event) => {
        event.preventDefault();


        // Create the calculator functionallity
        const princinpalValue = Number(principalAmount.value);
        const loanTermValue = Number(loanTerm.value);
        const rateValue = Number(loanRate.value);

        // Calculation for each component in the form...
        const numberOfPayments = loanTermValue * 12; // The total number of payments over the loan's lifetime, calculated by multiplying the number of months in a year...
        const monthlyInterestRate = (rateValue / 100) / 12; // The annual interest rate divided by 12 (the number of months in a year)...


        // # Create the calculator function logic...
        const repaymentResult = calculateMonthlyRepayment(princinpalValue, monthlyInterestRate, numberOfPayments);
        const interestOnlyResult = calculateMonthlyInterestRate(princinpalValue, monthlyInterestRate);
    })


    
    // console.log(mortgageTypes);


    


    function clearContent() {
        principalAmount.value = '';
        loanTerm.value = '';
        rateValue.value = '';
        repaymentRadio.checked = true;
        interestRadio.checked = false;
    }

    refreshBtn.addEventListener('click', clearContent); // Event listener for clearContent the content of input fields...




    



    // Function for calculating the mortgage repayment type..
    
    // REPAYMENT mortgage type....
    function calculateMonthlyRepayment(amount, interest, term) { // The amount to be paid each month...
        const mortageRepayment = amount * ((interest * (1 + interest)**term) / ((1 + interest)**term - 1));
        
        return mortageRepayment;
    }


    // Function for calculating INTEREST ONLY mortgage type....
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
    function displayRepaymentResults(repayment, total) {
        const container = document.createElement('div');
        container.classList.add('results', 'repayment-results');
        container.innerHTML = `
            <section class='monthly-repayment'>
               <span class='results-title'>Your monthly repayments</span>
               <p class='operation-outcome'>£${repayment}</p>
            </section>
            <hr>
            <section class='amount-tobepaid'>
               <span class='results-title'>Total you'll repay over the term</span>
               <p class='amount-compound'>£${total}</p>
            </section>
        `;

        return container;
    }


    // Function to display interest only on mortgage results...
    function displayInterestOnlyResults(interest) {
        const container = document.createElement('div'); 
        container.classList.add('results', 'interest-only');

        container.innerHTML = `
            <section class='monthly-interest'>
               <span class='results-title'>Your monthly interest over the term</span>
               <p class='amount-compound'>£${interest}</p>
            </section>
        `;

        return container;
    }


    // Function to update the content of display content when the page loads or after clearing the input fields...
    function UpdateDisplay() {
        return `
            <article class="empty-display">
                <img src="assets/images/illustration-empty.svg" alt="illustration-empty">
                <section>
                    <h2>Results shown here</h2>
                    <p>
                    Complete the form and click <q>calculate repayments</q> to see what your monthly repayments would be.
                    </p>
                </section>
           </article>
        `;
    }



})