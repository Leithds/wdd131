document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('light-select');
    const bodyElement = document.body;

    themeSelector.addEventListener('change', function() {
        const currentTheme = themeSelector.value;
        
        if (currentTheme === 'Dark') {
            bodyElement.classList.add('dark');
        } else {
            bodyElement.classList.remove('dark');
        }
    });
});