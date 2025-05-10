document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Handling
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Signup successful!");
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login successful!");
        });
    }
});
