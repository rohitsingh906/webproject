// irctc.js

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');
    const agentLoginButton = document.getElementById('agent login');
    const contactUsButton = document.getElementById('contact us ');
    const helpSupportButton = document.getElementById('help and support');
    const dailyDealsButton = document.getElementById('daily deals ');
    const alertsButton = document.getElementById('alerts');
    const searchButton = document.getElementById('searchbtn');
    const easyBookingButton = document.getElementById('EasyBookingon ');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            // Handle login logic or redirect
            console.log('Login clicked');
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', function() {
            // Handle register logic or redirect
            console.log('Register clicked');
        });
    }

    if (agentLoginButton) {
        agentLoginButton.addEventListener('click', function() {
            // Handle agent login logic or redirect
            console.log('Agent Login clicked');
        });
    }

    if (contactUsButton) {
        contactUsButton.addEventListener('click', function() {
            // Handle contact us logic or redirect
            console.log('Contact Us clicked');
        });
    }

    if (helpSupportButton) {
        helpSupportButton.addEventListener('click', function() {
            // Handle help and support logic or redirect
            console.log('Help & Support clicked');
        });
    }

    if (dailyDealsButton) {
        dailyDealsButton.addEventListener('click', function() {
            // Handle daily deals logic or redirect
            console.log('Daily Deals clicked');
        });
    }

    if (alertsButton) {
        alertsButton.addEventListener('click', function() {
            // Handle alerts logic or redirect
            console.log('Alerts clicked');
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // Handle search logic
            console.log('Search clicked');
        });
    }

    if (easyBookingButton) {
        easyBookingButton.addEventListener('click', function() {
            // Handle easy booking logic
            console.log('Easy Booking clicked');
        });
    }

    // Add event listeners for other interactive elements as needed
});
const loyaltySelect = document.getElementById("loyaltyBenefits");

loyaltySelect.addEventListener("change", function() {
    const selectedValue = this.value;

    switch (selectedValue) {
        case "irctc_sbi_loyalty_program":
            // Redirect or perform action for IRCTC SBI Loyalty Program
            console.log("IRCTC SBI Loyalty Program selected");
            break;
        case "irctc_sbi_credit_card":
            // Redirect or perform action for IRCTC SBI Credit Card
            console.log("IRCTC SBI Credit Card selected");
            break;
        // ... handle other options
        default:
            console.log("default or heading selected");
            break;
    }
});