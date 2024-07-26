document.addEventListener('DOMContentLoaded', (event) => {
    // Join Button and Popup
    const joinButton = document.getElementById('joinButton');
    const joinPopup = document.getElementById('joinPopup');
    const joinClose = document.querySelector('#joinPopup .close');

    if (joinButton) {
        joinButton.onclick = function() {
            if (joinPopup) {
                joinPopup.style.display = 'block';
            } else {
                console.error('Join popup element not found');
            }
        };
    } else {
        console.error('Join button element not found');
    }

    if (joinClose) {
        joinClose.onclick = function() {
            if (joinPopup) {
                joinPopup.style.display = 'none';
            } else {
                console.error('Join popup element not found');
            }
        };
    } else {
        console.error('Join popup close button element not found');
    }

    // Login Button and Popup
    const loginButton = document.querySelector('.login-button');
    const loginPopup = document.getElementById('loginPopup');
    const loginClose = document.querySelector('#loginPopup .close');

    if (loginButton) {
        loginButton.onclick = function() {
            if (loginPopup) {
                loginPopup.style.display = 'flex';
            } else {
                console.error('Login popup element not found');
            }
        };
    } else {
        console.error('Login button element not found');
    }

    if (loginClose) {
        loginClose.onclick = function() {
            if (loginPopup) {
                loginPopup.style.display = 'none';
            } else {
                console.error('Login popup element not found');
            }
        };
    } else {
        console.error('Login popup close button element not found');
    }

    // Close popups when clicking outside
    window.onclick = function(event) {
        if (event.target === joinPopup) {
            if (joinPopup) {
                joinPopup.style.display = 'none';
            } else {
                console.error('Join popup element not found');
            }
        }
        if (event.target === loginPopup) {
            if (loginPopup) {
                loginPopup.style.display = 'none';
            } else {
                console.error('Login popup element not found');
            }
        }
    };

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Hardcoded pass (If this was real this would be on a server)
            const validUsername = 'user';
            const validPassword = 'password';

            if (username === validUsername && password === validPassword) {
                alert('Login successful!');
                const calendarElement = document.getElementById('calendar');
                if (calendarElement) {
                    const calendar = new Calendar(calendarElement);
                    calendar.enableEventCreation();
                }
                if (loginPopup) {
                    loginPopup.style.display = 'none';
                }
            } else {
                alert('Invalid username or password.');
            }
        });
    } else {
        console.error('Login form element not found');
    }

    // Calendar Module
    const calendarElement = document.getElementById('calendar');
    if (calendarElement) {
        const calendar = new Calendar(calendarElement);
        calendar.render();
    } else {
        console.error('Calendar element not found');
    }

    // Join Form
    const joinForm = document.getElementById('join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Join form submitted');
        });
    } else {
        console.error('Join form element not found');
    }
});