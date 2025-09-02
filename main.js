import { UpdateDisplay } from "./modules/update.js";
import { displayResults } from "./modules/displayResult.js";

document.addEventListener('DOMContentLoaded', () => {

    const calculatorDisplay = document.querySelector('.repayment-display');
    calculatorDisplay.innerHTML = `${UpdateDisplay()}`;


    // Page UI Element on the page to be used...
    const formElement = document.querySelector('form');


    // Form submit event 
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear button
        formElement.elements[0].addEventListener('click', () => {
            calculatorDisplay.innerHTML = '';
            calculatorDisplay.innerHTML = `${UpdateDisplay()}`;
        }) 

        // Create the calculator functionallity
        const princinpalValue = Number(formElement.elements.amount.value);
        const loanTermValue = Number(formElement.elements.term.value);
        const rateValue = Number(formElement.elements.rate.value);

        // Calculation for each component in the form...
        const numberOfPayments = loanTermValue * 12; // The total number of payments over the loan's lifetime, calculated by multiplying the number of months in a year...
        const monthlyInterestRate = (rateValue / 100) / 12; // The annual interest rate divided by 12 (the number of months in a year)...


        // # Create the calculator function logic...
        const repaymentResult = calculateMonthlyRepayment(princinpalValue, monthlyInterestRate, numberOfPayments);
        const interestOnlyResult = calculateMonthlyInterestRate(princinpalValue, monthlyInterestRate);
        const total = totalToBeRepaid(repaymentResult, numberOfPayments);


        if (formElement.elements.repayment.checked === true) {
            calculatorDisplay.innerHTML = '';
            calculatorDisplay.appendChild(displayResults(repaymentResult, total, interestOnlyResult, 'repayment'));
        } else if (formElement.elements.interest.checked === true) {
            calculatorDisplay.innerHTML = '';
            calculatorDisplay.appendChild(displayResults(repaymentResult, total, interestOnlyResult, 'interest'));
        }

    });


    



    // Function for calculating the mortgage repayment type..
    
    // REPAYMENT mortgage type....
    function calculateMonthlyRepayment(amount, rate, term) { // The amount to be paid each month...
        const mortageRepayment = amount * ((rate * (1 + rate)**term) / ((1 + rate)**term - 1));
        
        return mortageRepayment;
    }


    // Function for calculating INTEREST ONLY mortgage type....
    function calculateMonthlyInterestRate(principal, rate) {
        const interesAmount = principal * rate;

        return interesAmount;
    }


    // Function for calculating the total amount to be repaid over the mortgage term...
    function totalToBeRepaid(repaymentResult, numberOfPayments) {
        const totalAmount = repaymentResult * numberOfPayments;

        return totalAmount;
    }


})