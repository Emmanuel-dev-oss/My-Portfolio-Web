const toggleOptions = document.querySelectorAll('.toggle-options');
const body = document.body;

// Set initial theme from localStorage if available
const savedThemes = localStorage.getItem('theme') || 'dark';
setTheme(savedThemes);

toggleOptions.forEach(options => {
        options.addEventListener('click', function() {
        // // Determine which option was clicked
        // const clickedOptions = e.target.closest('.toggle-options');
        // if (!clickedOptions) return;

        const newTheme = options.getAttribute('data-themes');
        setTheme(newTheme);

        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });
});

function setTheme(newTheme) {
    // Remove all theme classes
    body.classList.remove('dark-theme', 'light-theme', 'blue-theme');
    
    // Add the selected theme class
    body.classList.add(`${newTheme}-theme`);

    // Update icon
    const dark = document.querySelector('.dark');
    const light = document.querySelector('.light');
    const blue = document.querySelector('.blue');
    if (newTheme === 'dark') {
        light.classList.remove('hide-theme');
        dark.classList.add('hide-theme');
        blue.classList.add('hide-theme');
    } else if (newTheme === 'light') {
        blue.classList.remove('hide-theme');
        light.classList.add('hide-theme');
        dark.classList.add('hide-theme');
    } else {
        blue.classList.add('hide-theme');
        dark.classList.remove('hide-theme');
        light.classList.add('hide-theme');
    } 
}