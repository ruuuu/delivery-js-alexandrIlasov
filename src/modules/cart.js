// Логика добалвения товара в корзину
const cart = () => {
    const buttonCart = document.getElementById('cart-button'); // нкопка Корзины
    const modalCart = document.querySelector('.modal-cart'); // мод окно Корзины
    const close = modalCart.querySelector('.close'); // кнпока закрытия Крестик ищет в  modalCart, быстрее найдет



    // const renderIte = (data) => { // [{},{},{},{}]
    //     data.forEach(cardItem => {
    //         console.log(cardItem);
    //     });
    // };

    buttonCart.addEventListener('click', () => {
        console.log(JSON.parse(localStorage.getItem('cart')));
        modalCart.classList.add('is-open');

    });

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
    })



}

// если работам не  с модулями, то эту функию прямо  здесь вызываем. Функция  создает для переменной свою область видимости,поэтому  вдвух разных фукнциях могут существовать  перменные с одинаковыми именами
// когда код пишем в функции, то он доступен только этой фукнции(то есть он инкапуслирован в этой функции), поэтмоу элемент -корзина document.getElementById('cart-button') есть и в фукнции auth() и в  фукнии cart(), но это разные элементы

export default cart