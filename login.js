function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = parseJwt(response.credential);
    alert(`Welcome back, ${responsePayload.name}! Accessing Voyanix Mobile...`);
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
    const mobileInput = document.getElementById('mobile');

    // Restrict mobile input to numbers only and max 10 chars
    mobileInput.addEventListener('input', (e) => {
        mobileInput.value = mobileInput.value.replace(/[^0-9]/g, '');
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const mobile = mobileInput.value;

        if (mobile.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        alert(`Verification code sent to +91 ${mobile} for user ${username}.`);
    });
});
