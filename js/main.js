//console.log(document); // интерпретаор  программа котрая считывает верстку, стили, код и преводит на понятный интерпретаору язык. Когда он считает всю разметку, он создает объект document
// const CatMeow = function () { // анонимная фукнция (не имет названия)
//     console.log('may');
// }

// const CatMeow = () => { // стрелчная фукнция (не имеет названия)
//     console.log('may');
// }

// CatMeow();
// // объект-переменная котая имеет объектынй тип данных, он нужен для хранения данных в струтуркрированном виде
// const obj = {
//     name: 'Alex', // своqство - name(перменаая объекта)
//     age: 34,
//     sayHello: function () { // значеним ключа является фукнция(метод)
//         console.log('Hello');
//     }
// }

// obj.sayHello(); // вызов фукнцию

// функция, которая является значением ключа объекта называется МЕТОДОМ
// const counter = (a, b) => {
//     return a + b;
// }

// console.log(counter(9, 3));


// элементы на тсрнаице это тоже объекты
const buttonAuth = document.querySelector('.buttun-auth'); // кнпока Войти
const buttonOut = document.querySelector('.button-out'); // кнопка Выйти
const modalAuth = document.querySelector('.modal-auth'); // мод окно авторизации
const closeAuth = modalAuth.querySelector('.close-auth'); // кнопка Кестик  в мод окне(бфстрее найдет)
const logInForm = document.querySelector('#logInForm'); // форма Логина, лтбо можно через getElementById() он работет быстрее
const inputLogin = logInForm.querySelector('#login'); // поле Логин
const inputPassword = logInForm.querySelector('#password'); //  поле Пароль
const userName = document.querySelector('.user-name'); // место дял юзернейм

const login = (user) => { // фукнция Логина, принмиает объект
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'block';
    userName.style.display = 'block';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
}



const logout = () => { // фукнция разлогин
    userName.style.display = 'none';
    buttonAuth.style.display = 'block';
    buttonOut.style.display = 'none';
    userName.textContent = '';
}



buttonAuth.addEventListener('click', () => { //addEventListener - метод(слушаетль на ёлементе, он ожидает когда нажмут на кнопку), на кнпоку buttonAuth повеисли событие клика, после клика выполнится функция котрую передаем
    modalAuth.style.display = 'flex'; // elem.style.навание сво-тва = значение свойства
    console.dir(modalAuth);
});


buttonOut.addEventListener('click', () => { // нажатие на кнопку Выйти
    logout();


});


closeAuth.addEventListener('click', () => { // нажатик на  кнпоку закрытия крестик
    modalAuth.style.display = 'none';
});


// у формы есть событие submit, это событие отправки формы:
logInForm.addEventListener('submit', (evt) => { // evt-  объект события
    evt.preventDefault(); // отменяет действие по умолчнаию, это после отправки формы станица перезагружается
    //console.dir(event);
    //console.dir(inputLogin);
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    login(user); // вызов фукнуии


});