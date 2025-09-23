document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const toggleSlider = document.querySelector('.toggle-slider');
    const body = document.body;

    // Set initial theme from localStorage if available
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Set initial toggle position based on saved theme
    updateTogglePosition(savedTheme);

    themeToggle.addEventListener('click', function(e) {
        // Determine which option was clicked
        const clickedOption = e.target.closest('.toggle-option');
        if (!clickedOption) return;
        
        const theme = clickedOption.getAttribute('data-theme');
        setTheme(theme);
        updateTogglePosition(theme);
        
        // Save theme preference
        localStorage.setItem('theme', theme);
    });

    function setTheme(theme) {
        // Remove all theme classes
        body.classList.remove('dark-theme', 'light-theme', 'blue-theme');
        
        // Add the selected theme class
        body.classList.add(`${theme}-theme`);
        
        // Update slider icon
        const icon = toggleSlider.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else if (theme === 'light') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-palette';
        }
    }

    function updateTogglePosition(theme) {
        const options = document.querySelectorAll('.toggle-option');
        let optionIndex;

        switch(theme) {
            case 'dark':
                optionIndex = 0;
                break;
            case 'light': 
                optionIndex = 1;
                break;
            case 'blue':
                optionIndex = 2;
                break;
        }

        const selectedOption = options[optionIndex];
        const optionRect = selectedOption.getBoundingClientRect();
        const toggleRect = themeToggle.getBoundingClientRect();

        // Position the slider over the selected option
        toggleSlider.style.left = `${optionRect.left - toggleRect.left + 5}px`;
    } 
});