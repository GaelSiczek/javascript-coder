let carrito = [];

function checkAvailability() {
    const productName = prompt("Ingrese el nombre del producto:");

    switch (productName){
        case "Producto A":
        case "Producto B":
        case "Producto C":
            alert(`${productName} esta disponible.`);
            break;
            default:
                alert(`${productName} esta agotado`);

    }

}

function calculateTotal (){
    const price = parseInt(prompt("Ingrese el precio del producto:"));
    const quantity = parseInt(prompt("Ingrese la cantidad de productos:"));
    const total = price * quantity;

    alert(`Costo total: $${total.toFixed(2)}`);

}

function addToCart(){
    let agregarProducto = true;

    while (agregarProducto){
        const productName = prompt("Ingrese el nombre del producto para agregarlo al carrito:");
        carrito.push(productName);
        console.log(`${productName} ha sido agregado al carrito.`);

        const confirmacion = prompt("¿Desea agregar otro producto al carrito? (Si/No)").toLoweCase();
        if (confirmacion !== "si") {
            agregarProducto = false;
        }

    }

}

function displayCart(){
    console.log("Carrito de compras:", carrito)
    alert(`Carrito de compras: ${carrito.join(`, `)}`);
}