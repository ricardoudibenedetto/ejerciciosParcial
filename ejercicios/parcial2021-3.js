/*
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el tipo con la mayor cantidad de cajas.
b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada origen 
[ej: 30% nacional ,30% mercosur, 40% resto del mundo ( debe sumar 100)]
*/

function mostrar()
{
	let productoIngresado;
	let marcaIngresada;
	let tipoDeGalletita;
	let cantidadDeCajas
	let cantidadDeKilosPorCaja;
	let nombreDeProveedor;
	let origenIngresado;
	let banderaOrigen;
	let menosKilosIngresados;
	let acumuladorCajasNacional;
	let acumuladorCajasMercosur;
	let acumuladorCajasRestoDelMundo;
	let totalCajasIngresadas;
	let promedioPorCajasNacionales;
	let promedioPorCajasMercosur;
	let promedioPorCajasRestoDelMundo;
	let mensaje;
	let contadorProductos;


	contadorProductos = 0;
	acumuladorSinSal = 0 ;
	acumuladorConSal =0 ;
	acumuladorDulces = 0;
	banderaOrigen = "arriba";
	acumuladorCajasNacional =0 ;
	acumuladorCajasMercosur = 0;
	acumuladorCajasRestoDelMundo = 0;

	while(contadorProductos<10)
	{	
		contadorProductos ++ ;
		marcaIngresada = prompt("ingresar marca");
		tipoDeGalletita= prompt("ingresar tipo de galletita");		
		while(tipoDeGalletita!="con sal"&& tipoDeGalletita!="sin sal"&&tipoDeGalletita!="dulces")
		{
			tipoDeGalletita= prompt("error re-ingresar tipo de galletita");
		}
		cantidadDeCajas = prompt("ingresar cantidad de cajas");
		cantidadDeCajas = parseInt(cantidadDeCajas);
		while(cantidadDeCajas<1)
		{
			cantidadDeCajas = prompt("error re-ingresar cantidad de cajas")
			cantidadDeCajas = parseInt(cantidadDeCajas);
		}
		cantidadDeKilosPorCaja = prompt("ingresar cantidad de kilos por caja")
		cantidadDeKilosPorCaja = parseInt(cantidadDeKilosPorCaja);
		while(cantidadDeCajas<1)
		{
			cantidadDeKilosPorCaja = prompt("ingresar cantidad de kilos por caja")
			cantidadDeKilosPorCaja = parseInt(cantidadDeKilosPorCaja);

		}
		nombreDeProveedor = prompt("ingresar proveedor")
		origenIngresado = prompt("ingresar origen del producto")
		while(origenIngresado!="nacional"&&origenIngresado!="mercosur"&&origenIngresado!="resto del mundo")
		{
			origenIngresado = prompt("error re-ingresar origen del producto")
		}
		//a) el tipo con la mayor cantidad de cajas.
		switch(cantidadDeCajas)
		{
			case"con sal":
			acumuladorConSal=acumuladorConSal+cantidadDeCajas;
			break;
			case"sin sal":
			acumuladorSinSal=acumuladorSinSal+cantidadDeCajas;
			break;
			case"dulces":
			acumuladorDulces=acumuladorDulces + cantidadDeCajas;
			break;

		}
		switch(origenIngresado)
		{
			case"nacional":
			acumuladorCajasNacional = acumuladorCajasNacional + cantidadDeCajas;

				if(banderaOrigen="arriba")
				{
					menosKilosIngresados = cantidadDeKilosPorCaja;
					banderaOrigen="abajo";
				}
				else
				{
					if(menosKilosIngresados<cantidadDeKilosPorCaja)
					{
						menosKilosIngresados = cantidadDeKilosPorCaja;

					}
				}

			break;
			case"mercosur":
				acumuladorCajasMercosur = acumuladorCajasMercosur + cantidadDeCajas;
			break;
			case"resto del mundo":
				acumuladorCajasRestoDelMundo = acumuladorCajasRestoDelMundo + cantidadDeCajas;
			break;
		}

	}//fin del while
		if(acumuladorSinSal>acumuladorConSal && acumuladorSinSal>acumuladorDulces)
		{
			mensaje = "el tipo con mayor cajas es sin sal , compro la cantidad de cajas " + acumuladorSinSal;
		}
		else
		{
			if(acumuladorDulces>acumuladorConSal)
			{
				mensaje = "el tipo con mayor cajas son las dulces y compro " + acumuladorDulces + " cajas"; 
			}
			else
			{
				mensaje = "el tipo con mayor cajas son con sal y compro " + acumuladorConSal + "cajas" ;
			}
		}

	//c) que porcentaje de cajas hay sobre el total de cada origen 
		totalCajasIngresadas = acumuladorCajasMercosur + acumuladorCajasNacional + acumuladorCajasRestoDelMundo;
		promedioPorCajasMercosur = acumuladorCajasMercosur*100/totalCajasIngresadas;
		promedioPorCajasNacionales = acumuladorCajasNacional*100/totalCajasIngresadas;
		promedioPorCajasRestoDelMundo = acumuladorCajasRestoDelMundo*100/totalCajasIngresadas;

		
		document.write("De origen nacional la menor cantidad es " + menosKilosIngresados + " kilos " + "<br" )
		document.write("el promedio de galletitas por mercosur es " + promedioPorCajasMercosur + "<br>");
		document.write("el promedio de galletitas nacionales es " + promedioPorCajasNacionales + "<br>");
		document.write("el promedio de galletitas en el resto del mundo es " + promedioPorCajasRestoDelMundo + "<br>");
		document.write(mensaje);
	
}