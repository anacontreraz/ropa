const productos = [
    {
        "nombre": "Conjunto de niña",
        "Descripcion":"Conjunto para niña incluye dos piezas lijero y fresco.",
        "precio": "$128.50",
        "img": "https://e7.pngegg.com/pngimages/413/164/png-clipart-clothing-t-shirt-dress-toddler-girl-cloth-childrens-clothing-child-thumbnail.png"
    },
    {
        "nombre": "Traje niños ",
        "Descripcion":"Conjunto para niño incluye dos piezas lijero y fresco color azul hecho de algodon  .",
        "precio": "$212.50",
        "img": "https://e7.pngegg.com/pngimages/658/350/png-clipart-t-shirt-baby-toddler-one-pieces-pajamas-gymboree-clothing-t-shirt-tshirt-blue-thumbnail.png"
    },
    {
        "nombre": "Sueter dama",
        "Descripcion":"Sueter incluye una piezas total mente suave y calida",
        "precio": "$412.50",
        "img": "https://e7.pngegg.com/pngimages/663/460/png-clipart-sweater-cardigan-crop-top-clothing-fashion-women-s-gray-sweater-holidays-women-accessories-thumbnail.png"
    },
    {
        "nombre": "Vestido",
        "Descripcion":" Vestido refil para niña dos piezas. Tiene una capacidad elástica que permite que pueda estirarse sin romperse",
        "precio": "$312.50",
        "img": "https://img2.freepng.es/20181116/ply/kisspng-infant-clothing-childrens-clothing-dress-baby-clothes-png-images-transparent-free-download-5beebe5fc66bb9.6958551915423729598127.jpg"
    },
    {
        "nombre": "Sudadera",
        "Descripcion":"Sudadera calida hecha de algodon. Tiene una capacidad elástica que permite que pueda estirarse sin romperse",
        "precio": "$612.50",
        "img": "https://e7.pngegg.com/pngimages/578/823/png-clipart-black-pullover-hoodie-hoodie-t-shirt-tracksuit-bluza-jacket-hoodie-sneakers-black-thumbnail.png"
    },
    {
        "nombre": "Camisa",
        "Descripcion":"Camisa calida hecha de algodon. Tiene una capacidad elástica que permite que pueda estirarse sin romperse",
        "precio": "$429.50",
        "img": "https://e7.pngegg.com/pngimages/349/818/png-clipart-dress-shirt-oxford-white-collar-dress-shirt-white-mens-thumbnail.png"
    },
    {
        "nombre": "Sueter",
        "Descripcion":"Sudadera calida hecha de algodon. Tiene una capacidad elástica que permite que pueda estirarse sin romperse",
        "precio": "$612.50",
        "img": "https://e7.pngegg.com/pngimages/557/335/png-clipart-gray-long-sleeved-shirt-t-shirt-hoodie-sweater-crew-neck-bluza-hoodie-hat-unisex-thumbnail.png"
    },
    {
        "nombre": "Chamarra",
        "Descripcion":"Chamarra incluye una pieza es lijera y fresca color verde",
        "precio": "$1126.50",
        "img": "https://e7.pngegg.com/pngimages/292/85/png-clipart-blue-button-up-denim-jacket-leather-jacket-clothing-denim-jeans-battlefield-jeep-men-s-denim-jacket-blue-textile-thumbnail.png"
    }
];

function insertarProducto(producto) {
    const productoHTML = `<div class="col-md-3">
    <div class="card mb-4 shadow-sm">
        <img src="${producto.img}" alt="">
        <div class="card-body">
            <h1>${producto.nombre}</h1>
            <p>${producto.Descripcion}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span>${producto.precio}</span>
                <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al Carrito</button>
            </div>
        </div>
    </div>
</div>`;

    $('#prueba').append(productoHTML);
}



$(document).ready(function () { //llamamos a los elementos
    productos.forEach(prod => {
        insertarProducto(prod);
    })
});
