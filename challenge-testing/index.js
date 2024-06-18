class CarritoCompra{
    constructor(){
        this.carrito = [];
    }

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    calcularTotal(){
        let total = 0;
        this.carrito.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(porcentaje){
        let total = this.calcularTotal();
        let descuento = total * (porcentaje / 100);
        return total - descuento;
    }

}

module.exports = CarritoCompra;