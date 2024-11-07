// script.js
document.getElementById('register-button').addEventListener('click', function() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Пользователь зарегистрирован:', userCredential.user);
        })
        .catch((error) => {
            console.error('Ошибка регистрации:', error.message);
        });
});

document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Успешный вход:', userCredential.user);
        })
        .catch((error) => {
            console.error('Ошибка входа:', error.message);
        });
});