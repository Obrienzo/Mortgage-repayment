// DISPLAY THE MORTAGE RESULTS
export function displayResults(repayment, total, interest, mortgageType) {
    const article = document.createElement('article');
    article.classList.add('display-box');

    const heading = document.createElement('h2');
    heading.textContent = 'Your results';
    const info = document.createElement('p');
    info.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.';

    const resultsWrapper = document.createElement('div');
    resultsWrapper.classList.add('results-wrapper');

    if (mortgageType === 'repayment') {
        const repay = displayRepaymentResults(repayment, total);
        resultsWrapper.appendChild(repay);
    } else if (mortgageType === 'interest') {
        const interesOnly = displayInterestOnlyResults(interest);
        resultsWrapper.appendChild(interesOnly);
    }

    article.append(heading, info, resultsWrapper);

    return article;
    
}

// Function to display repayment mortage type results...
function displayRepaymentResults(repayment, total) {
    const container = document.createElement('div');
    container.classList.add('results', 'repayment-results');
    container.innerHTML = `
        <section class='monthly-repayment'>
           <span class='results-title'>Your monthly repayments</span>
           <p class='operation-outcome'>£${repayment.toFixed(2)}</p>
        </section>
        <section class='amount-tobepaid'>
           <span class='results-title'>Total you'll repay over the term</span>
           <p class='amount-compound'>£${total.toFixed(2)}</p>
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
           <p class='amount-compound'>£${interest.toFixed(2)}</p>
        </section>
    `;

    return container;
}