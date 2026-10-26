
// Get HTML elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show or hide password
togglePassword.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.textContent = isPassword ? "Hide" : "Show";

    togglePassword.setAttribute(
        "aria-label",
        isPassword ? "Hide password" : "Show password"
    );
});

// Handle form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
        message.style.color = "#d93025";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "#d93025";
        message.textContent =
            "Password must contain at least 6 characters.";
        return;
    }

    // Demo only: no real authentication occurs
    message.style.color = "#188038";
    message.textContent =
        "Form validated! Connect a backend to sign in securely.";
});

// Forgot password link
document.getElementById("forgotPassword").addEventListener(
    "click",
    function (event) {
        event.preventDefault();
        message.style.color = "#555";
        message.textContent =
            "Password reset needs to be connected to a backend.";
    }
);

// Sign-up link
document.getElementById("signupLink").addEventListener(
    "click",
    function (event) {
        event.preventDefault();
        message.style.color = "#555";
        message.textContent =
            "Create a separate registration page to sign up.";
    }
);
