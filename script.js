// Script para inserir o ano atual no rodapé
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Script para mostrar alertas personalizados
const alertButtons = document.querySelectorAll('.alertButton');
const authButtons = document.querySelectorAll('.auth-buttons button');
const searchButton = document.getElementById('newsletterButton');
const allButtons = [...alertButtons, ...authButtons, searchButton];

allButtons.forEach(button => {
    button.addEventListener('click', function () {
        const message = this.getAttribute('data-message');
        alert(message);
    });
});