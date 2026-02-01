document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const mobileInput = document.getElementById('mobile');
    const themeToggle = document.getElementById('themeToggle');

    // Theme Logic
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '🌙';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            mobileInput.value = mobileInput.value.replace(/[^0-9]/g, '');
        });
    }

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const mobile = mobileInput ? mobileInput.value : '';

            if (mobile.length !== 10) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            localStorage.setItem('tripify_user', username);

            const transition = document.getElementById('travelTransition');
            if (transition) {
                transition.classList.add('active');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 5000);
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});
