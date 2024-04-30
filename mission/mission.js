const themeSelector = document.getElementById('light-select');

function changeTheme() {
    const currentTheme = themeSelector.value;
    const bodyElement = document.body;
    const logo = document.querySelector('BYU-I dark logo');

    if (currentTheme === 'Dark') {
        bodyElement.classList.add('dark');
        logo.src = 'image/byui-logo_white.webp';
    } else {
        bodyElement.classList.remove('dark');
        logo.src = 'image/byui-logo_blue.webp';
    }
}
nt
themeSelector.addEventListener('change', changeTheme);