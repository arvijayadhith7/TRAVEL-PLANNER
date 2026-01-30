function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // You can send the token to your server for verification
    const responsePayload = parseJwt(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    alert(`Welcome ${responsePayload.name}! Successful login via Google.`);
    // Redirect to home or dashboard
    // window.location.href = "index.html";
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

// UI Interactions
document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const logInBtn = document.getElementById('logInBtn');
    const authForm = document.getElementById('authForm');
    const submitBtn = document.querySelector('.submit-btn');
    const formTitle = document.querySelector('.form-section h2');

    signUpBtn.addEventListener('click', () => {
        signUpBtn.classList.add('active');
        logInBtn.classList.remove('active');
        formTitle.textContent = "Begin Your Adventure";
        submitBtn.textContent = "Let's Start";
        // Show/hide fields if necessary for signup vs login
    });

    logInBtn.addEventListener('click', () => {
        logInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
        formTitle.textContent = "Welcome Back";
        submitBtn.textContent = "Log In";
        // For login, maybe hide the username field or similar
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Traditional authentication for ${email} is not implemented in this demo. Please use Google Sign-In.`);
    });

    // Password view toggle
    const toggleView = document.querySelector('.toggle-view');
    const passwordInput = document.getElementById('password');

    toggleView.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggleView.textContent = type === 'password' ? '👁️' : '🔒';
    });
});
