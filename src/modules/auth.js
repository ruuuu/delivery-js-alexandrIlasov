const auth = () => {

    // элементы на странице это тоже объекты

    const buttonAuth = document.querySelector('.buttun-auth'); // кнпока Войти, querySelector получает NodeList, а метод getElementById/ getElementByClassName получает коллекцию
    const buttonOut = document.querySelector('.button-out'); // кнопка Выйти
    const modalAuth = document.querySelector('.modal-auth'); // мод окно авторизации
    const closeAuth = document.querySelector('.close-auth'); // кнопка Кестик  в мод окне(бфстрее найдет)
    const logInForm = document.querySelector('#logInForm'); // форма Логина, лтбо можно через getElementById() он работет быстрее
    const inputLogin = document.querySelector('#login'); // поле Логин
    const inputPassword = document.querySelector('#password'); //  поле Пароль
    const userName = document.querySelector('.user-name'); // место дял юзернейм
    const errorElem = document.querySelector('.error');

    const login = (user) => { // фукнция Логина, принмиает объект
        buttonAuth.style.display = 'none';
        buttonOut.style.display = 'block';
        userName.style.display = 'flex';
        userName.textContent = user.login;
        modalAuth.style.display = 'none';
        console.log('userName.textContent', userName.textContent);
    }



    const logout = () => { // фукнция разлогин

        userName.style.display = 'none';
        buttonAuth.style.display = 'flex';
        buttonOut.style.display = 'none';
        userName.textContent = '';
        localStorage.removeItem('user'); // удаляем user из хранилища localstorage, чтоыб при разлгине, если обновим станицу, то имя чтоб не отображадь
    }



    buttonAuth.addEventListener('click', () => { //addEventListener - метод(слушаетль на ёлементе, он ожидает когда нажмут на кнопку), на кнпоку buttonAuth повеисли событие клика, после клика выполнится функция котрую передаем
        modalAuth.style.display = 'flex'; // elem.style.навание сво-тва = значение свойства
    });


    buttonOut.addEventListener('click', () => { // нажатие на кнопку Выйти
        logout();
    });


    closeAuth.addEventListener('click', () => { // нажати на  кнпоку закрытия крестик
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

        // if (userName.textContent == '') {
        //     console.log('ввели ', userName.textContent);
        //     errorElem.style.display = 'block';
        // }

        localStorage.setItem('user', JSON.stringify(user)); //  сохранеям user в браузере(в  LocalStorage), данные добавляем в localstorage  чтобы при перезагрузке бразуера данные авторизации не слетали
        // JSON.stringify(obj)  переводит объект в строку
    });


    if (localStorage.getItem('user')) { //  если есть объект user
        login(JSON.parse(localStorage.getItem('user'))); // вызоы метда login,  переводит из строки в  объект

    }
}


export default auth