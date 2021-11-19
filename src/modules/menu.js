const menu = () => {
    const cardsMenu = document.querySelector('.cards-menu'); // спсиок блюд, контенер для блюд
    const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; // массив объектов {name, price, count}  Корзины, будем ее заполнять обхектами(блюдами выбранными) 


    const changeTitle = (restaurant) => { // restaurant = {image, name, price, kitchen, stars}
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




    const addToCard = (cartItem) => { // добавляет  объект(котрый передаем) в localStorge, проверяем есть ли этот объект в корзине
        if (cartArray.some((item) => item.id === cartItem.id)) {  // перебирая массив cartArray [{name: name, price: price, id: id, count: 1}, {name: name, price: price, id: id, count: 1}, {}, {}],  проверяем есть ли в массииве элемент cartItem(константа), сверяем по id  блюда
            console.log('такое людо уже есть в массиве блюд');
            cartArray.map((item) => { //  переьираем массив блюд
                if (item.id === cartItem.id) item.count++;
                return item;
            });
        }
        else {
            cartArray.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cartArray)); // записывем в localStorage массив объектов(блюд) 
    };



    const renderItems = (data) => { // data = [{name: name, price: price, id: id, count: 1}, {name: name, price: price, id: id, count: 1}, {блюдо}, {блюдо}}]
        console.log('data', data);  // массив блюд
        //              item = блюдо
        data.forEach(({ description, id, image, name, price }) => { // перебираем массив блюд [{name: name, price: price, id: id, count: 1}, {}, {}, {}}],  десруктуризация

            const card = document.createElement('div'); // <div> </div> текущая карта(блюдо)
            card.classList.add('card'); // <div class="card"> </div>
            // вставляем  контент в card:
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
            card.querySelector('.button-card-text').addEventListener('click', () => { // обработчик кнпоки В Корзину на карточке блюда
                // const cardItem = { // блюдо
                // name: name,
                // price: price,
                // count: 1
                // }
                //addToCard(cardItem);
                //  либо короче написать:
                addToCard({ name: name, price: price, id: id, count: 1 }); // добавляем объект в localStorage 
            });

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



    //   firebase нужен для эмуляции работы с сервером(облачное хранилище базы данных)

}

// если пишем код внури какой то фукнци, то он будет виден и доступен  толко этой фукнции.те он инкапсулирован  вэтой фукнции.   он не влияет на глоб облать видимости.  Если не рабоатем с модулями, то можно эту функию вызыват прям здсь

// занося кажый  код файла в фукнцию так мы обезопасиваем себя, это лучшая  практика, обезопасим файл js друг от друга

export default menu