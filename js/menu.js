const menu = () => {

    const cardsMenu = document.querySelector('.cards-menu'); // спсиок блюд, контенер для блюд

    const cartArray = []; // массив объектов {name, price, count}  Корзины, будем ее заполнять обхектами(блюдами выбранными) 

    const changeTitle = (restaurant) => { // restaurant = {iamge, name. price, kitchen, stars}
        console.log(restaurant);
        const restauranTtitle = document.querySelector('.restaurant-title');
        restauranTtitle.textContent = restaurant.name;

        const rating = document.querySelector('.rating');
        rating.textContent = restaurant.stars;

        const price = document.querySelector('.price');
        price.textContent = restaurant.price + 'P';

        const category = document.querySelector('.category');
        category.textContent = restaurant.kitchen;
    };



    const addToCard = (cartItem) => { // добавлzет  объект(котрый передаем) в localStorge, проверяем есть ли этот объект в корзине
        if (cartArray.some((item) => item.id === cartItem.id)) {  // перебиарая массив,  проверяем есть ли в массииве элемент cartItem, сверяем по id  блюда
            console.log('таоке людо уже есть в массиве');
        }
        else {
            cartArray.push(cartItem); // ОСТАНОВИЛАСЬ НА  16:33
        }


        localStorage.setItem('cart', JSON.stringify(cartArray)); // запсиывем в лок ханилще массив объектов 

    };


    const renderItems = (data) => { // data = [{блюдо}, {блюдо}, {блюдо}, {блюдо}}]
        //console.log(data);
        //              item= блюдо
        data.forEach(({ description, id, image, name, price }) => { // перебираем массив блюд [{}, {}, {}, {}}],  десрутктризация

            const card = document.createElement('div'); // <div> </div> текущая карта(блюдо)
            card.classList.add('card'); // <div class="card"> </div>
            card.innerHTML = `
                <img src="${image}" class="card-image" width="384" height="213"
                alt="${name}">
                <div class="card-text card-text1">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <div class="card-info">
                        <div class="ingredients"> ${description}</div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-primary">
                            <span class="button-card-text">В корзину</span>
                            <img class="button-card-image" src="img/icon/shopping-cart-white.svg" width="16"
                            height="24" alt="user_button">
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
            `;
            //console.log(card);

            card.querySelector('.button-card-text').addEventListener('click', () => { // обработчик кнпоки В Корзину на карточик блюда
                addToCard({ name: name, price: price, id: id, count: 1 }); // дбалвяем объект в коризну
            })

            cardsMenu.append(card); // добавляем текущее блюдо в конец  контенера cardsMenu
        });
    }




    let url = localStorage.getItem('restaurant'); // забираем значнеие из localStorage по ключу restaurant

    if (url) {
        const restaurant = JSON.parse(url); // строку(объект ввиде строки) перевели в  объект
        //console.log(restaurant);
        changeTitle(restaurant);


        fetch(`./db/${restaurant.products}`)
            .then((response) => response.json()) // вернет массив [{}, {}, {}, {}, {}]
            .then((data) => {
                renderItems(data);
            })
            .catch((error) => { //  обрабатываем ошибку
                console.log(error);
            })
        // .finally(console.log('Ошибка'))// выполнится в любом случае
    }
    else {
        window.location.href = '/'; // чтобы вернутся на  станицу откуда пришли
    }



    //   firebase нужен для эмуляции работы с сервером(облачное хранилище)

}



menu(); // если пишем код внури какой тоф укнци, то он будет виден и доступен  толко этой фукнции.те он инкапсулирован  вэтой ыукнции.  Т он не лияет на глоб облать видимости.  Если не рабоатем с модулями, то можно эту функию вызыват прям здсь

// занося кажый  код файла в фукнцию так мы обезопасиваем себя, это лучгая  практика, обепасим файл js дркг от друга