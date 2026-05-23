// ========================================
//              CAJA.JS
// ========================================

// Lista de pedidos
let pedidos = [];

// ========================================
//      FUNCIÓN PARA REGISTRAR PEDIDO
// ========================================

function registrarPedido(producto) {

    pedidos.push(producto);

    console.log(`
========================================
        PEDIDO REGISTRADO
========================================

Producto: ${producto}

Esperando respuesta de cocina...

========================================
`);
}

// ========================================
//      CALLBACK DE RESPUESTA COCINA
// ========================================

function procesarPedido(producto, callback) {

    console.log(`
Caja recibió actualización del pedido...
`);

    // Ejecutar callback
    callback(producto);
}

// ========================================
//      PEDIDO LISTO
// ========================================

function pedidoListo(producto) {

    console.log(`
========================================
            PEDIDO LISTO
========================================

El pedido de ${producto} está listo.

Entregar al cliente.

========================================
`);
}

// ========================================
//      PEDIDO CANCELADO
// ========================================

function pedidoCancelado(producto) {

    console.log(`
========================================
          PEDIDO CANCELADO
========================================

El pedido de ${producto} fue cancelado.

Motivo:
No se pudo preparar en cocina.

========================================
`);
}

// ========================================
//              PRUEBAS
// ========================================

// Registrar pedido
registrarPedido("Capuchino");

// Simular respuesta exitosa
procesarPedido("Capuchino", pedidoListo);

// Simular pedido cancelado
procesarPedido("Frappé Moka", pedidoCancelado);