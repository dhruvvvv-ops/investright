// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

// Placeholder for future balance update functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("Account Dashboard loaded");

    // Placeholder example - setting dynamic content for balance, investments, and returns
    const balanceElement = document.getElementById("balance");
    const investmentsElement = document.getElementById("investments");
    const totalReturnsElement = document.getElementById("total-returns");

    // Fetching these values could be done via an API in the future
    let balance = 1000.00; // Replace with fetched data if available
    let investments = 500.00; // Replace with fetched data if available
    let totalReturns = 100.00; // Replace with fetched data if available

    // Updating the displayed values
    balanceElement.textContent = balance.toFixed(2);
    investmentsElement.textContent = investments.toFixed(2);
    totalReturnsElement.textContent = totalReturns.toFixed(2);
    
    // Example button functionality
    const withdrawButton = document.querySelector(".withdraw-button");
    withdrawButton.addEventListener("click", () => {
        alert("Withdraw functionality coming soon!");
    });
});
