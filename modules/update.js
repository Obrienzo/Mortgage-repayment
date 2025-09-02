// Function to update the content of display content when the page loads or after clearing the input fields...
export function UpdateDisplay() {
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