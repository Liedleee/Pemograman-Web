const addToCartButton = document.querySelector('.keranjang');
const notification = document.getElementById('notification');

function showNotification() {

    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

addToCartButton.addEventListener('click', showNotification);
