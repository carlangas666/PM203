// Lista donde se guardarán los pedidos
let pedidos = [];

// Variable para guardar el total acumulado
let totalAcumulado = 0;

// Función para agregar pedidos
function agregarPedido(nombreProducto, precio) {

    // Crear objeto del pedido
    const pedido = {
        producto: nombreProducto,
        precio: precio
    };

    // Agregar pedido al array
    pedidos.push(pedido);

    // Sumar al total acumulado
    totalAcumulado = totalAcumulado + precio;

    // Mostrar información
    console.log("Pedido agregado:");
    console.log(nombreProducto + " - $" + precio);

    console.log("Total acumulado: $" + totalAcumulado);

    console.log("Lista de pedidos:");
    console.log(pedidos);
}

// Pruebas
agregarPedido("Café", 45);
agregarPedido("Pan", 30);
agregarPedido("Frappé", 65);
agregarPedido("Té", 25);
agregarPedido("Galletas", 20);  