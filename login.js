
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
