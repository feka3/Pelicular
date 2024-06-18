const CarritoCompra = require('../index.js');

const carrito = new CarritoCompra();
describe('Comrpobar que sea una clase y sus metodos', () => {
    it('que sea una instacia de la clase', () => {
        expect(new CarritoCompra()).toBeInstanceOf(CarritoCompra);
    });
    // it('que tenga un metodo para agregar productos', () => {
        
    //     carrito.agregarProducto({
    //         titulo: 'Pelicula 1',
    //         precio: 1000,
    //     });
    //     expect(carrito.carrito.length).toBe(1);
    // });

    it('comprobar que se aplique el descuento', () => {
        const total = 200;
        const descuento = 20;
        const totalDescuento = total * (descuento / 100);

        carrito.agregarProducto({
            precio: 200,
            nombre: 'birra'
        })

        const totalConDescuento = carrito.aplicarDescuento(descuento);

        expect(totalConDescuento).toBe(total-totalDescuento);

    })

})