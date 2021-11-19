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

const auth = () => {
    // элементы на странице это тоже объекты
    const buttonAuth = document.querySelector('.buttun-auth'); // кнпока Войти
    const buttonOut = document.querySelector('.button-out'); // кнопка Выйти
    const modalAuth = document.querySelector('.modal-auth'); // мод окно авторизации
    const closeAuth = document.querySelector('.close-auth'); // кнопка Кестик  в мод окне(бфстрее найдет)
    const logInForm = document.querySelector('#logInForm'); // форма Логина, лтбо можно через getElementById() он работет быстрее
    const inputLogin = document.querySelector('#login'); // поле Логин
    const inputPassword = document.querySelector('#password'); //  поле Пароль
    const userName = document.querySelector('.user-name'); // место дял юзернейм
    const errorElem = document.querySelector('.error');
    const buttonCart = document.querySelector('.button-cart'); // нкопка Корзины
    
    
    const TestLogin = (login) => {
        if(/^[a-zA-Z1-9]+$/.test(login) === false) { alert('В логине долны быть только латинкие буквы') }
        if(login.length < 4 || login.length > 20) { alert('В логине долны быть от 4 до 20 символов') }
        if(parseInt(login.substr(0,1))) { alert('Логин должен начинаться с буквы') return false;}
        
        return true;
    }
    


    const login = (user) => { // фукнция Логина, принмиает объект
        buttonAuth.style.display = 'none';
        buttonOut.style.display = 'block';
        userName.style.display = 'flex';
        buttonCart.style.display = 'flex';
        userName.textContent = user.login;
        modalAuth.style.display = 'none';
        console.log('userName.textContent', userName.textContent);
        
        
    }



    const logout = () => { // фукнция разлогин

        userName.style.display = 'none';
        buttonAuth.style.display = 'flex';
        buttonOut.style.display = 'none';
        userName.textContent = '';
        buttonCart.style.display = 'none';
        localStorage.removeItem('user'); // удаляем user из хранилища localstorage, чтобы при разлогине, если обновим станицу, то имя чтоб не отображать
    }



    buttonAuth.addEventListener('click', () => { // addEventListener - метод(слушаетль на элементе, он ожидает когда нажмут на кнопку), на кнпоку buttonAuth повеисли событие клика, после клика выполнится функция котрую передаем
        modalAuth.style.display = 'flex'; // elem.style.навание сво-тва = значение свойства
        // console.dir(modalAuth);
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

        const user = {
            login: inputLogin.value,
            password: inputPassword.value
        }

        login(user); // вызов фукнуии

        localStorage.setItem('user', JSON.stringify(user)); //  сохранеям user в браузере(в  LocalStorage), данные добавляем в localstorage  чтобы при перезагрузке бразуера данные авторизации не слетали
        // JSON.stringify(obj)  переводит объект в строку
        // JSON.parse(str) переводит из строки в  объект
    });


    if (localStorage.getItem('user')) { //  если есть объект user
        login(JSON.parse(localStorage.getItem('user'))); // вызоы метда login,  переводит из строки в  объект
    }

}

auth();

