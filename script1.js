// Функция для обработки регистрации
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Проверка на наличие значений
    if (!username || !email || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    // Пример валидации email (простая проверка)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    // Здесь можно добавить отправку данных на сервер, например, с использованием fetch
    alert(`Регистрация успешна!\nИмя: ${username}\nEmail: ${email}`);
});

// Пример обработки кнопок входа через соцсети (просто вывод сообщения)
document.getElementById('google-login').addEventListener('click', function() {
    alert('Вход через Google');
});

document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Вход через Facebook');
});

// Добавим небольшое улучшение для удобства взаимодействия с формой на мобильных устройствах
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        document.body.style.paddingBottom = '50px'; // Увеличиваем отступ, чтобы избежать скрытия клавиатурой
    });

    input.addEventListener('blur', () => {
        document.body.style.paddingBottom = '0'; // Возвращаем отступ обратно
    });
});
