/*EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar,y  con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado
*/
function mostrarConsola(){
    console.log("hola")
}
function mostrar()
{ 
	let tipoDeRaza;
	let respuesta;
	let nombreIngresado;
	let edad;
	let peso;
	let precioDeConsulta;
	let pesoMaximoIngresadoDeGalgo;
	let nombreGalgoMasPesado;
	let promedioDePesoGalgo;
	let promedioDePesoPastor;
	let promedioDePesoSharpei;
	let cantidadPerrosIngresada;
	let contadorPerrosGalgo;
	let acumuladorPesoGalgo;
	let banderaGalgoMasPesado;
	let banderaSegunda;
	let nombrePerroMasViejo;
	let razaMasVieja;
	let edadMasViejo;
	let importeTotalAPagar;	
	let acumuladorPrecios;
	let porcentaje;
	let contadorDePerros;

	
	respuesta = "si" ;
	contadorPerrosGalgo = 0 ;
	acumuladorPesoGalgo = 0 ;
	contadorPerrosPastor = 0 ;
	acumuladorPesoPastor  = 0 ;
	contadorPerrosSharpei = 0 ;
	acumuladorPesoSharpei = 0 ;
	banderaSegunda = "arriba";
	banderaGalgoMasPesado = "arriba";
	porcentaje = 0 ;
	contadorDePerros = 0;
	promedioDePesoSharpei = 0;
	promedioDePesoPastor = 0;
	promedioDePesoGalgo =0;


	while(respuesta == "si")
	{
		contadorDePerros++;
		tipoDeRaza = prompt("ingrese tipo de raza");

		while(tipoDeRaza!= "sharpei" && tipoDeRaza != "galgo" && tipoDeRaza!= "pastor")
		{
			tipoDeRaza = prompt("error reingrese el tipo de raza: galgo , sharpei o pastor");

		}

		nombreIngresado = prompt("ingrese el nombre");
		
		edad = prompt("ingrese la edad");
		edad = parseInt(edad);

		while(edad<1 || edad>25)
		{
			edad = prompt("error ,ingrese la edad");
			edad = parseInt(edad);
		}

		pesoIngresado = prompt("ingrese el peso");
		pesoIngresado = parseInt(pesoIngresado);
		
		while(pesoIngresado<1)
		{
			pesoIngresado = prompt("error reingrese el peso nuevamente");
			pesoIngresado = parseInt(pesoIngresado);

		}
		precioDeConsulta = prompt("ingrese el precio de consulta");
		precioDeConsulta = parseInt(precioDeConsulta);
		while(precioDeConsulta<500 || precioDeConsulta>1500)
		{
			precioDeConsulta = prompt("error reingrese el precio de consulta");
			precioDeConsulta = parseInt(precioDeConsulta);
		}
		switch(tipoDeRaza)
		{ 
			case"galgo":
			contadorPerrosGalgo = contadorPerrosGalgo + 1 ;
			acumuladorPesoGalgo = acumuladorPesoGalgo + contadorPerrosGalgo;
			if(banderaGalgoMasPesado == "arriba")//a)El mas pesados de los galgos.
			{	

				pesoMaximoIngresadoDeGalgo = pesoIngresado;
				nombreGalgoMasPesado = nombreIngresado;
				banderaGalgoMasPesado = "abajo";
			}
			else
			{ 
				if(pesoMaximoIngresadoDeGalgo<pesoIngresado)
				{
					pesoMaximoIngresadoDeGalgo = pesoIngresado;
					nombreGalgoMasPesado = nombreIngresado;

				}
			}
			break;
			case"sharpei":			 
				contadorPerrosSharpei = contadorPerrosSharpei + 1 ;
				acumuladorPesoSharpei = acumuladorPesoSharpei + contadorPerrosSharpei;
			break;
			case"pastor":
				contadorPerrosPastor = contadorPerrosPastor + 1 ;
				acumuladorPesoPastor = acumuladorPesoPastor + contadorPerrosPastor;
			break;
		}
		if(banderaSegunda == "arriba")//d)Nombre, raza y edad del perro más viejo ingresado
		{
			nombrePerroMasViejo = nombreIngresado ;
			razaMasVieja = tipoDeRaza ;
			edadMasViejo = edad;
			banderaSegunda = "abajo";
		}
		else
		{
			if(edad>edadMasViejo)
			{
				nombrePerroMasViejo = nombreIngresado;
				razaMasVieja = tipoDeRaza ;
				edadMasViejo = edad;
			}
				
		}
		acumuladorPrecios = acumuladorPrecios + precioDeConsulta;
		respuesta = prompt("desea seguir ingresando?");
	}//fin del while              
		
		if(cantidadPerrosIngresada>2 && cantidadPerrosIngresada<5)
		{
			descuento = 5 ;
		}
		else
		{
			if(cantidadPerrosIngresada>4)
			{
				descuento = 10 ;
			}
			else
			{
				descuento = 0;
			}
		}

		descuento = acumuladorPrecios * porcentaje/100;
     	precioConDescuento = acumuladorPrecios - descuento;


		cantidadPerrosIngresada = contadorPerrosGalgo + contadorPerrosPastor + contadorPerrosSharpei;
		if(contadorPerrosGalgo>0)
		{	
			promedioDePesoGalgo = acumuladorPesoGalgo/cantidadPerrosIngresada;
			
		}
		if(contadorPerrosPastor>0)
		{
			promedioDePesoPastor = acumuladorPesoPastor/cantidadPerrosIngresada;
		}
		if(contadorPerrosSharpei=0)
		{
			promedioDePesoSharpei = acumuladorPesoSharpei/cantidadPerrosIngresada;
		}
		
	
	alert("el mas pesado de los galgos es " + pesoMaximoIngresadoDeGalgo + " y el nombre es " + nombreGalgoMasPesado);
	alert("el importe total a pagar es " + acumuladorPrecios );
	alert("el valor con descuento es " + descuento );
	alert("el promedio de peso de los galgos es " + promedioDePesoGalgo);
	alert("el promedio de peso del sharpei es  " + promedioDePesoSharpei);
	alert("el promedio de peso del pastor es  " + promedioDePesoPastor);
	alert("el nombre del perro mas viejo es " + nombrePerroMasViejo + " y su edad es " + edadMasViejo + "y la raza es " + razaMasVieja);



		
}
