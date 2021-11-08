// Логика корзины
const cart = () => {
    const buttonCard = document.getElementById('cart-button'); // нкопка Корзины
    const modalCart = document.querySelector('.modal-cart'); // мод окно корзины
    const close = modalCart.querySelector('.close'); // кнпока закрытия Крестик ищет в  modalCart

    buttonCard.addEventListener('click', () => {
        modalCart.classList.add('is-open');
    });

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
    })

}

cart();


