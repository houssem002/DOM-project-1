document.addEventListener('DOMContentLoaded', () => {
    // Calculate initial total price
    updateTotalPrice();

    // Event listeners for increasing and decreasing quantity
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updatePrice(button.closest('.cart-item'));
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            if (parseInt(quantityElement.textContent) > 1) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updatePrice(button.closest('.cart-item'));
                updateTotalPrice();
            }
        });
    });

    // Event listener for deleting items
    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.closest('.cart-item');
            cartItem.remove();
            updateTotalPrice();
        });
    });

    // Event listener for liking items
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    // Update the item price according to quantity
    function updatePrice(cartItem) {
        const price = parseInt(cartItem.getAttribute('data-price'));
        const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
        const itemPriceElement = cartItem.querySelector('.item-price');
        itemPriceElement.textContent = `$${price * quantity}`;
    }

    // Update the total price
    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.cart-item').forEach(cartItem => {
            const price = parseInt(cartItem.getAttribute('data-price'));
            const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
            totalPrice += price * quantity;
        });
        document.getElementById('total-price').textContent = totalPrice;
    }
});
