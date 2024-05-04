const themeSelector = document.getElementsByClassName('light-select');

function changeTheme() {
    const currentTheme = themeSelector.value;
    const bodyElement = document.body;
    const logo = document.querySelector('footer img');

    if (currentTheme === 'Dark') {
        bodyElement.classList.add('dark');
        logo.src = 'image/byui-logo_white.png';
    } else {
        bodyElement.classList.remove('dark');
        logo.src = 'image/byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);