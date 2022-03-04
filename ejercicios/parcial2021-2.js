/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza  de la carta tipo "trampa" con mayor precio."

B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.

C) El promedio de precio de las cartas de por tipo.
*/

function mostrar()
{
	let tipoDeCarta;
	let rareza;
	let precioCarta;
	let nombreDeLaCarta;
	let contadorCarta;
	let banderaCarta ;
	let contadorCartaMagicaOMonstruo;
	let contadorCartasIngresadas;
	let promedioDePrecioMagica;
	let promedioDePrecioMonstruo;
	let promedioDePrecioTrampa;
	let contadorCartasTrampa;
	let contadorCartaMonstruo;
	let contadorCartasMagica;
	let respuesta;
	let acumuladorCartaMagica;
	let contadorCartaMagica;
	let acumuladorCartaMonstruo;
	let acumuladorCartaTrampa;
	let nombreCartaMayorPrecio;
	let cartaMayorPrecio;





	acumuladorCartaMagica= 0;
	acumuladorCartaTrampa = 0;
	acumuladorCartaMonstruo= 0;
	contadorCartaMagicaOMonstruo= 0 ;
	banderaCarta ="arriba";
	contadorCartasIngresadas = 0;
	contadorCartaTrampa = 0;
	contadorCartaMonstruo =0;
	contadorCartaMagica = 0;
	respuesta = "si";

  while(respuesta == "si")
	{	
		contadorCartasIngresadas++;
		nombreDeLaCarta = prompt("ingrese nombre de la carta");
		
		tipoDeCarta = prompt("ingrese tipo de carta");

		while(tipoDeCarta!= "trampa" && tipoDeCarta != "magica" && tipoDeCarta!= "monstruo")
		{
			tipoDeCarta = prompt("error reingrese el tipo de carta: monstruo ,magica ,trampa");

		}
		
		rareza = prompt("ingrese la rareza");
		
		while(rareza != "super rara" && rareza != "ultra rara" && rareza!= "rara")
		{
			rareza = prompt("error ,ingrese la rareza");
		}
		precioCarta = prompt("ingrese el precio");
		precioCarta = parseInt(precioCarta);
		
		while(precioCarta<1)
		{
			precioCarta = prompt("error reingrese el precio nuevamente");
			precioCarta = parseInt(precioCarta);

		}

		switch(tipoDeCarta) //A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.
		{
			case"trampa":
			contadorCartaTrampa=contadorCartaTrampa +1 ;
			acumuladorCartaTrampa = acumuladorCartaTrampa + precioCarta;

				if(banderaCarta == "arriba")
				{
					nombreCartaMayorPrecio = nombreDeLaCarta;
					cartaMayorPrecio = precioCarta;
					banderaCarta = "abajo";
				}
				else
				{
					if(cartaMayorPrecio<precioCarta)
					{
						nombreCartaMayorPrecio = nombreDeLaCarta;						
						cartaMayorPrecio = precioCarta;
					}
					//B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo"
					//fueron vendidas.
				}
			break;
			case"magica":
			case"monstruo":
				if(rareza == "ultra rara")
				{
					contadorCartaMagicaOMonstruo++;
				}
				if(tipoDeCarta == "magica")
				{
					contadorCartaMagica= contadorCartaMagica + 1;
					acumuladorCartaMagica = acumuladorCartaMagica + precioCarta;

				}
				else
				{

					contadorCartaMonstruo = contadorCartaMonstruo +1 ;
					acumuladorCartaMonstruo = acumuladorCartaMonstruo + precioCarta;

				}

			break;	


		}
	
	respuesta = prompt("desea seguir ingresando?");

		
	}//fin del while
	promedioDePrecioMonstruo = acumuladorCartaMonstruo / contadorCartaMonstruo;
	promedioDePrecioTrampa = acumuladorCartaTrampa /contadorCartaTrampa;
	promedioDePrecioMagica = acumuladorCartaMagica/ contadorCartaMagica;



	document.write("El nombre y rareza  de la carta tipo trampa con mayor precio es : " + nombreCartaMayorPrecio +"<br>");
	document.write("La cantidad de cartas ultra rara y de tipo magica o monstruo son " + contadorCartaMagicaOMonstruo +"<br>");
	document.write("El promedio de precio de las cartas monstruo es " + promedioDePrecioMonstruo +"<br>");
	document.write("El promedio de precio de las cartas magica es " + promedioDePrecioMagica +"<br>");
	document.write("El promedio de precio de las cartas trampa es " + promedioDePrecioTrampa +"<br>");


}