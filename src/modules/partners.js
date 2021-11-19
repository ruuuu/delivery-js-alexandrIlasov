const partners = () => {

    const cardResauransts = document.querySelector('.cards-restaurants'); // спсиок карточек, контенеров для ресторанов


    // console.dir(cardResauransts);
    const renrederItems = (data) => { // массив реторанов [{},{},{},{}]

        data.forEach((item) => {    // item = {} - ресторан

            const { image, kitchen, name, price, products, stars, time_of_delivery } = item;
            const a = document.createElement('a'); // создали тэг <a></a>
            // const { image, kitchen, name, price, products, starts, time_of_delivery } = item; // дестртктуризация нужна чобы не указывать родительско название объекта, вытащили объект в параметр  фукнции
            //console.log(item);

            //a.products = products; // к тегу a добавили свойство products
            // либо можно чере data-атрибуты  добавить products:
            a.dataset.products = products; // слева products это дали назваие атрибуту, справа это его значение, data-products
            console.log(a.dataset.products); // выведет значения data-products
            //console.dir(a);

            a.setAttribute('href', '/restaurant.html'); // устанваиваем аттрибуте тэгу a
            a.classList.add('card');
            a.classList.add('card-restaurant');

            a.innerHTML = `
            <img src="${image}" class="card-image" width="384" height="250" alt="${name}">
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин </span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        <img class="rating-star" src="img/icon/rating.svg" width="15" height="15" alt="star">${stars}
                    </div>
                    <div class="price">От ${price} р</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
        `; // добавляем контент для тега a, используем интерполяцию

            a.addEventListener('click', (evt) => { // клик по кратчоке ретсорана
                evt.preventDefault(); // отменяем событие по умолчаию
                localStorage.setItem('restaurant', JSON.stringify(item)); // заносим {ресторан} в localStorage, переовдим объект в строку
                window.location.href = '/restaurant.html';// чтобы перешли на др станицу /restaurant.html
            });


            cardResauransts.append(a); // добавляем текущий ретсоран в конец контенер cardResauransts
            //console.log(a.getAttribute('href')); // выведет значени указаннгоь атрибута
            //console.log(a.hasAttribute('href)); //  проверяет есть ли у  элемента укзанный аттрибут
        });
    }



    fetch('https://test-b8c19-default-rtdb.firebaseio.com/db/partners.json')
        .then((response) => response.json()) // вернет массив ресторанов [{}, {}, {}, {}, {}]
        .then((data) => {
            renrederItems(data); // вызов фукнции отрисовки карточек ресторанов
        })
        .catch((error) => { //  обрабатываем ошибку
            console.log(error);
        })


    // firebase нужен для эмуляции работы с сервером(облачное хранилище)
}

export default partners

