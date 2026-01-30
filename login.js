function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = parseJwt(response.credential);
    alert(`Welcome back, ${responsePayload.name}! Accessing premium travel services...`);
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const logInBtn = document.getElementById('logInBtn');
    const toggleSlider = document.querySelector('.toggle-slider');
    const formTitle = document.getElementById('formTitle');
    const submitBtnText = document.querySelector('.btn-text');
    const usernameGroup = document.getElementById('userGroup');
    const authForm = document.getElementById('authForm');

    // Toggle Logic
    signUpBtn.addEventListener('click', () => {
        signUpBtn.classList.add('active');
        logInBtn.classList.remove('active');
        toggleSlider.style.transform = 'translateX(0)';
        formTitle.textContent = "Create Account";
        submitBtnText.textContent = "Let's Explore";
        usernameGroup.style.display = 'block';
    });

    logInBtn.addEventListener('click', () => {
        logInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
        toggleSlider.style.transform = 'translateX(calc(100% + 6px))';
        formTitle.textContent = "Welcome Back";
        submitBtnText.textContent = "Enter Kingdom";
        usernameGroup.style.display = 'none';
    });

    // Password View Toggle
    const viewToggle = document.querySelector('.view-toggle');
    const passwordInput = document.getElementById('password');

    viewToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        viewToggle.textContent = type === 'password' ? '🔒' : '🔓';
    });

    // Form Submit
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Server connection pending. Please use high-speed Google Auth for now.");
    });
});
