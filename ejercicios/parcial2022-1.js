/*
1.	Se ingresan 10 importes, marca del producto y pais de origen (China, Argentina o Chile).
Calcular y mostrar:
a.	El producto mas caro de ArgentinaX
b.
c.	Promedio importe X
d.	Cantidad de productos de ChileX
e.	Sobre el maximo encontrado aplicar un incremento del 10% a dicho importe.
*/

function mostrar()
{
	let importe;
	let marcaDelProducto;
	let paisDelOrigen;
	let contadorImportes;
 	let	banderaMasCaroArgentina;
 	let importeMasCaroArgentina;
 	let maximoImporte;
 	let promedioImporte;
 	let contadorProductosChile;
 	let acumuladorProductosChile;
 	let respuesta;
 	let marcaMasCaroArgentina;
 	let maximoImporteConAumento;
 	let banderaMaximoImporte;

	contadorImportes = 0 ;
	contadorProductosChile = 0 ;
	contadorProductosChile = 0;
	acumuladorProductosChile = 0 ;


	while(contadorImportes<3)
	{
		importe = prompt("ingrese el importe");
		importe = parseInt(importe);
		
		while(importe<0)
		{
			importe = prompt("error ,re-ingrese el importe");
			importe = parseInt(importe);
		}

		marcaDelProducto = prompt("ingrese marca Del Producto");

		paisDelOrigen = prompt("ingrese pais de origen");

		while(paisDelOrigen!="china" && paisDelOrigen!="argentina" && paisDelOrigen!="chile" )
		{
			paisDelOrigen = prompt("error ingrese pais : china , argentina , chile");
		}
		if(banderaMasCaroArgentina == "arriba")
		{
			importeMasCaroArgentina = importe ;
			marcaMasCaroArgentina = marcaDelProducto;
			banderaMasCaroArgentina = "abajo";

		}
		else
		{
			if(importeMasCaroArgentina>importe)
			{
				importeMasCaroArgentina = importe;
				marcaMasCaroArgentina=marcaDelProducto;
			}
		}
		if(banderaMaximoImporte == "arriba")
		{	
			maximoImporte = importe;
			marcaMaximoImporte = marcaDelProducto;
			banderaMaximoImporte ="abajo";

		}
		else
		{
			if(maximoImporte>importe)
			{
				maximoImporte = importe;
				marcaMaximoImporte = marcaDelProducto;
			}
			maximoImporteConAumento = maximoImporte*10 / 100;
		}
		if(paisDelOrigen == "chile")
		{
			contadorProductosChile = contadorProductosChile +1;
			
		}
		

		respuesta = prompt("desea seguir ingresando?");

	}

	promedioImporte = importe / contadorImportes;





	document.write("el producto mas caro de Argentina es "+ marcaDelProducto + importeMasCaroArgentina);
	document.write("el maximo importe es " + maximoImporteConAumento);
	document.write("la cantidad de productos de chile es " + acumuladorProductosChile);
	document.write("el promedio es " + promedioImporte);
	document.write("el maximo precio con un 10% es" + maximoImporteConAumento);

	
}