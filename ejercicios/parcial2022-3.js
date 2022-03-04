/*
3.	De los empleados de una PYME, no se sabe cuantos, se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado masculino con menos cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar
   *Si tiene un hijo le corresponde 10000
   *Si tiene entre dos y cinco hijos le corresponde 15000 por sus dos hijos
   *Y si tiene más de cinco hijos le corresponde 20000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/

function mostrar()
{
	let nombreIngresado;
	let apellidoIngresado;
	let generoDelEmpleado;
	let cantidadDeHijos;
	let respuesta;
	let banderaMasculino;
	let banderaSinHijos;
	let nombreSinHijos;
	let apellidoSinHijos;

	contadorGeneroMasculino = 0 ;
	respuesta = "si";
	banderaMasculino = "arriba";
	banderaSinHijos = "arriba";

	while(respuesta == "si")
	{

		nombreIngresado = prompt("ingrese su nombre");
		apellido = prompt("ingrese su apellido");
		generoDelEmpleado = prompt("ingrese su genero");
		while(generoDelEmpleado!="masculino" && generoDelEmpleado!="femenino" && generoDelEmpleado!="no binario")
		{
			generoDelEmpleado = prompt("error re-ingrese su genero");
		}
		cantidadDeHijos = prompt("ingrese cantidad de hijos");
		cantidadDeHijos = parseInt(cantidadDeHijos);
		while(cantidadDeHijos<0)
		{
			cantidadDeHijos = prompt("error re-ingrese cantidad de hijos");
			cantidadDeHijos = parseInt(cantidadDeHijos);
		}
		switch(generoDelEmpleado)
		{
			case"masculino":
				contadorGeneroMasculino++;
				if(banderaMasculino == "arriba")
				{
					nombreMenosCantidad = nombreIngresado;
					menosCantidadDeHijos = cantidadDeHijos;
					banderaMasculino == "abajo";
				}
				else
				{
					if(nombreMenosCantidad>nombreIngresado)
					{
						nombreMenosCantidad = nombreIngresado;
						menosCantidadDeHijos = cantidadDeHijos;
					}
				}

			break;
			case"femenino":
				contadorGeneroFemenino++;
			break;
			case"no binario":
				contadorGeneroNoBinario++;
			break;
		}
		if(cantidadDeHijos == 0)
			if(banderaSinHijos == "arriba")
			{
				nombreSinHijos = nombreIngresado;
				apellidoSinHijos = apellidoIngresado;
				banderaSinHijos = "abajo";
			}
		switch(cantidadDeHijos)
		{
			case"1"://asignacion 10000
				acumuladorAsignacionesDiezMil = acumuladorAsignacionesDiezMil + 10000;
			break;
			case"2":
			case"3":
			case"4": //asignacion 15000
			case"5":
				acumuladorAsignacionesQuinceMil = acumuladorAsignacionesQuinceMil + 15000;
			break;
			default://asignacion 20000
				acumuladorAsignacionesVeinteMil =acumuladorAsignacionesVeinteMil + 20000;
			break;
		}
		respuesta = prompt("desea seguir ingresando?");
	}//fin del while

	totalPersonasIngresadas = contadorGeneroMasculino + contadorGeneroNoBinario + contadorGeneroFemenino;
	promedioPersonasFemeninas = contadorGeneroFemenino*100/totalPersonasIngresadas;
	promedioPersonasMasculinas = promedioPersonasMasculinas *100/totalPersonasIngresadas;
	promedioPersonasNoBinarias = promedioPersonasNoBinarias*100/totalPersonasIngresadas;
	totalDelDineroAPagar = acumuladorAsignacionesVeinteMil + acumuladorAsignacionesQuinceMil + acumuladorAsignacionesDiezMil;
	
	document.write("el promedio de femeninas es " + promedioPersonasFemeninas + "<br>");
	document.write("el promedio de masculinos es " + promedioPersonasMasculinas + "<br>");
	document.write("el promedio de no binarios es " + promedioPersonasNoBinarias + "<br>");
	document.write("el nombre del empleado masculino con menos cantidad de hijos es " + nombreMenosCantidad + "y tiene" + menosCantidadDeHijos + "hijos" + "<br>");
	document.write("")


}	