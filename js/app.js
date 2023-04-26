const productos = [
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    },
    {
        "nombre": "Producto 1",
        "precio": "$12.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    }
];

function insertarProducto(producto) {
    const productoHTML = `<div class="algo" style="border: 1px solid">
        <h1>${producto.nombre}</h1>
        <p>${producto.precio}</p>
        <img src="${producto.img}"/>
    </div>`;

    $('#prueba').append(productoHTML);
}



$(document).ready(function () { //llamamos a los elementos
    productos.forEach(prod => {
        insertarProducto(prod);
    })
});
