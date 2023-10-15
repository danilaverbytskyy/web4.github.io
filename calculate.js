class Product {
    name;
    price;
    quantity;
    constructor(priceOption, quantity) {
        this.name = "";
        this.price = "";
        this.quantity = parseFloat(quantity);

        if (this.quantity < 1) {
            throw new Error('Quantity cannot be less than 1');
        }
        if(Number.isInteger(this.quantity) === false) {
            throw new Error('Quantity should be a whole number');
        }

        let i=0;
        for(i; i<priceOption.length && priceOption[i]!==' '; i++) {
            this.name += priceOption[i];
        }
        i++;
        for(i; i<priceOption.length && priceOption[i]!==' '; i++) {
            this.price += priceOption[i];
        }
        this.price = parseFloat(this.price);
    }

    getFinalPrice() {
        return this.price * this.quantity;
    }
}

function onClick(event) {
    event.preventDefault();
    let productOption = document.getElementById('productOptions').value;
    let quantity = document.getElementById('quantity').value;
    try {
        let product = new Product(productOption, quantity);
        document.getElementById('result').textContent = 'Final price: ' + product.getFinalPrice() + " руб.";
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    document.getElementById('button').addEventListener('click', onClick);
});