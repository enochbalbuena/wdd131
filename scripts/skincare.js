document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const featuresSection = document.querySelector('.features');
    const button = document.querySelector('.btn-secondary');
    const lastModifiedSpan = document.getElementById('last-modified');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (featuresSection) {
        featuresSection.style.display = 'none';
    }

    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            toggleVisibility();
        });
    }

    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }

    function toggleVisibility() {
        if (heroSection && featuresSection) {
            if (heroSection.style.display !== 'none') {
                heroSection.style.display = 'none';
                featuresSection.style.display = 'block';
            }
        }
    }

    function manageUserPreferences() {
        const preferences = {
            theme: 'light',
            textSize: 'medium'
        };

        function savePreferences() {
            localStorage.setItem('userPreferences', JSON.stringify(preferences));
        }

        function loadPreferences() {
            const savedPreferences = localStorage.getItem('userPreferences');
            if (savedPreferences) {
                return JSON.parse(savedPreferences);
            }
            return null;
        }

        function applyPreferences() {
            const userPreferences = loadPreferences();
            if (userPreferences) {
                document.body.dataset.theme = userPreferences.theme;
                document.body.style.fontSize = userPreferences.textSize === 'large' ? '1.2em' : '1em';
            }
        }

        if (!loadPreferences()) {
            savePreferences();
        }

        applyPreferences();
    }

    function updateFooter() {
        const lastModified = new Date(document.lastModified).toLocaleDateString();
        lastModifiedSpan.textContent = lastModified;
    }

    manageUserPreferences();
    updateFooter();
});
