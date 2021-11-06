const restaurant = 'food-band';

const renrederItems = (data) => {
    console.log(data);
}

fetch('https://test-b8c19-default-rtdb.firebaseio.com/db/partners.json') // `./db/${restaurant}.json`
    .then((response) => response.json()) // вернет массив [{}, {}, {}, {}, {}]
    .then((data) => {
        renrederItems(data);
    })
    .catch((error) => { //  обраббатываем ошибку
        console.log(error);
    })
    // .finally(console.log('Ошибка'))

    // firebase нужен дл эмуляцb работы с сервером(облачное хранилище)