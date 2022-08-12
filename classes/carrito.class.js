class Carrito {
	constructor(productos) {
		this.productos = productos;
	}

	agregarProducto(cantidadSeleccionada, producto) {
		const productoRepetido = productosCarrito.some(
			(prod) => prod.nombre === producto.nombre
		);

		if (productoRepetido) {
			productosCarrito.forEach((prod) => {
				if (prod.nombre === producto.nombre) {
					prod.cantidad = prod.cantidad + cantidadSeleccionada;
					carrito.totalizar();
				}
			});
		} else {
			producto.cantidad = Number(cantidadSeleccionada);
			this.productos.push(producto);
			carrito.totalizar();
		}
	}

	quitarProducto(producto) {
		const index = this.productos.findIndex((element) => element === producto);
		this.productos.splice(index, 1);
	}

	totalizar() {
		let cantidades = 0;
		let suma = 0;

		for (let i = 0; i < this.productos.length; i++) {
			let producto = this.productos[i];
			cantidades += parseFloat(producto.cantidad);
			suma += parseFloat(producto.precio * producto.cantidad);
		}
		contadorCarrito.innerText = cantidades;
		return suma;
	}
}
