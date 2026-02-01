document.addEventListener('DOMContentLoaded', () => {
    const planBtn = document.getElementById('planBtn');
    const destinationInput = document.getElementById('destination');
    const durationInput = document.getElementById('duration');
    const budgetSelect = document.getElementById('budget');

    // Initialize Flatpickr for Duration
    if (durationInput) {
        flatpickr("#duration", {
            mode: "range",
            minDate: "today",
            dateFormat: "Y-m-d",
            onClose: function (selectedDates, dateStr, instance) {
                if (selectedDates.length === 2) {
                    const diffTime = Math.abs(selectedDates[1] - selectedDates[0]);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    durationInput.value = `${diffDays} days`;
                }
            }
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
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

    // Trip Planner Logic - Navigate to Results Page
    if (planBtn) {
        planBtn.addEventListener('click', () => {
            const destination = destinationInput.value.trim().toLowerCase();
            const budget = budgetSelect.value;
            const duration = durationInput.value || '3 days';

            // Extract days number from duration
            const daysMatch = duration.match(/(\d+)/);
            const days = daysMatch ? daysMatch[1] : '3';

            if (!destination) {
                // Show friendly prompt
                destinationInput.focus();
                destinationInput.placeholder = 'Enter a destination...';
                return;
            }

            // Check if destination exists in database
            const validDestinations = ['ooty', 'kodaikanal', 'mahabalipuram', 'rameswaram', 'kanyakumari'];
            const matchedDest = validDestinations.find(d => d.includes(destination) || destination.includes(d));

            if (!matchedDest) {
                alert(`We don't have data for "${destination}" yet. Try: Ooty, Kodaikanal, Mahabalipuram, Rameswaram, or Kanyakumari`);
                return;
            }

            // Show loading state
            planBtn.innerHTML = 'Planning... 🚀';
            planBtn.disabled = true;

            // Navigate to results page after brief delay
            setTimeout(() => {
                const budgetMap = {
                    'economy': 'economy',
                    'mid': 'midRange',
                    'luxury': 'luxury'
                };
                const budgetParam = budgetMap[budget] || 'midRange';
                window.location.href = `results.html?destination=${matchedDest}&budget=${budgetParam}&duration=${days}`;
            }, 800);
        });
    }

    // Animations
    const elementsToFade = document.querySelectorAll('.hero-content, .planner-widget, .popular-tags');
    elementsToFade.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});
