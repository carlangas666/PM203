// ========================================
//              CAJA.JS
// ========================================

// Catálogo de productos
const catalogo = [

    {
        id: 1,
        nombre: "Capuchino",
        precio: 55,
        categoria: "Bebida caliente"
    },

    {
        id: 2,
        nombre: "Latte",
        precio: 60,
        categoria: "Bebida caliente"
    },

    {
        id: 3,
        nombre: "Americano",
        precio: 40,
        categoria: "Bebida caliente"
    },

    {
        id: 4,
        nombre: "Frappé Moka",
        precio: 75,
        categoria: "Bebida fría"
    },

    {
        id: 5,
        nombre: "Cheesecake",
        precio: 65,
        categoria: "Postre"
    },

    {
        id: 6,
        nombre: "Frappuchino de Caramelo",
        precio: 70,
        categoria: "Bebida fría"
    },

    {
        id: 7,
        nombre: "Té Verde",
        precio: 45,
        categoria: "Bebida caliente"
    },

    {
        id: 8,
        nombre: "Galleta de chocolate",
        precio: 50,
        categoria: "Postre"
    },

    {
        id: 9,
        nombre: "Refresher de Frutas",
        precio: 55,
        categoria: "Bebida fría"
    },

    {
        id: 10,
        nombre: "Croissant",
        precio: 30,
        categoria: "Postre"
    }

];

// ========================================
//          PEDIDOS DEL CLIENTE
// ========================================

let pedidos = [];

// ========================================
//          AGREGAR PEDIDOS
// ========================================

function agregarPedido(idProducto) {

    // Buscar producto en catálogo
    const productoEncontrado = catalogo.find(
        producto => producto.id === idProducto
    );

    // Validar si existe
    if(productoEncontrado) {

        pedidos.push(productoEncontrado);

        console.log(`
========================================
      PRODUCTO AGREGADO
========================================

Producto: ${productoEncontrado.nombre}

Precio: $${productoEncontrado.precio}

Categoría: ${productoEncontrado.categoria}

========================================
`);
    }

    else {

        console.log("Producto no encontrado");

    }
}

// ========================================
//          CALCULAR SUBTOTAL
//          usando reduce()
// ========================================

function calcularSubtotal() {

    const subtotal = pedidos.reduce(
        (acumulador, producto) => acumulador + producto.precio,
        0
    );

    return subtotal;
}

// ========================================
//              CALCULAR IVA
// ========================================

function calcularIVA(subtotal) {

    const iva = subtotal * 0.16;

    return iva;
}

// ========================================
//              CALCULAR TOTAL
// ========================================

function calcularTotal(subtotal, iva) {

    const total = subtotal + iva;

    return total;
}

// ========================================
//              MOSTRAR TICKET
// ========================================

function mostrarTicket() {

    console.log(`
========================================
            TICKET FINAL
========================================
`);

    // Recorrer pedidos
    pedidos.forEach((producto, index) => {

        // Destructuring
        const { nombre, precio, categoria } = producto;

        console.log(`
${index + 1}. ${nombre}

Precio: $${precio}

Categoría: ${categoria}

----------------------------------------
`);

    });

    // Calcular subtotal
    const subtotal = calcularSubtotal();

    // Calcular IVA
    const iva = calcularIVA(subtotal);

    // Calcular total
    const total = calcularTotal(subtotal, iva);

    console.log(`
========================================

Subtotal: $${subtotal.toFixed(2)}

IVA (16%): $${iva.toFixed(2)}

TOTAL: $${total.toFixed(2)}

========================================
`);
}

// ========================================
//              PRUEBAS
// ========================================

agregarPedido(1);
agregarPedido(4);


mostrarTicket();