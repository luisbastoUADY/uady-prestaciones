// Simulación de login y registro (sin funcionalidad real)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulación de login exitoso
            alert('Inicio de sesión exitoso (simulado)');
            window.location.href = 'html/dashboard.html';
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulación de registro exitoso
            alert('Registro exitoso (simulado)');
            window.location.href = '../index.html';
        });
    }
});