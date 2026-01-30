function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = parseJwt(response.credential);
    alert(`Welcome back, ${responsePayload.name}! Accessing Voyanix AI...`);
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
    const authForm = document.getElementById('authForm');
    const toggleSignUp = document.getElementById('toggleSignUp');
    const formTitle = document.querySelector('.form-header h1');
    const submitBtn = document.querySelector('.btn-primary');

    let isLogin = true;

    toggleSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Welcome back";
            submitBtn.textContent = "Continue with Email";
            toggleSignUp.textContent = "Sign Up";
            document.querySelector('.footer-note').innerHTML = `Don't have an account? <a href="#" id="toggleSignUp">Sign Up</a>`;
        } else {
            formTitle.textContent = "Create account";
            submitBtn.textContent = "Register with Email";
            toggleSignUp.textContent = "Log In";
            document.querySelector('.footer-note').innerHTML = `Already have an account? <a href="#" id="toggleSignUp">Log In</a>`;
        }

        // Re-attach event listener since innerHTML replaced it
        document.getElementById('toggleSignUp').addEventListener('click', (newE) => {
            newE.preventDefault();
            toggleSignUp.click();
        });
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Form submission is currently simulation-only. Please use Google Auth.");
    });
});
