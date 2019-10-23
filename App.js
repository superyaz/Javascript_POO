class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

let product = {
    name,
    price,
    year
}

if (localStorage.getItem('product') === null) {
    let products = [];
    products.push(product);
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Producto</strong>: ${product.name}
            <strong>Producto</strong>: ${product.price}
            <strong>Producto</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        </div>
        </div>
        `;
        productList.appendChild(element);
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado correctamente', 'success');
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //MOSTRAR EN EL DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)

    }
}

//EVENTOS DEL DOM

document.getElementById('product-form').addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    localStorage.setItem('name', 'price', 'year');

    const product = new Product(['name', 'price', 'year']);

    const ui = new UI();
    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Completa todos los campos para continuar', 'danger')
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto agregado correctamente', 'success')

    event.preventDefault();
});


document.getElementById('product-list').addEventListener('click', (event) => {
    const ui = new UI();
    ui.deleteProduct(event.target);
});