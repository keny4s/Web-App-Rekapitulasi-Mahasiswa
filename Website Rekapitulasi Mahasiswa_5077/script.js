const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.form-container.sign-in form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Validasi login di sini
        window.location.href = 'dashboard.html';
    });
});
