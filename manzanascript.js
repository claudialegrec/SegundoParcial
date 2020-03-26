function agregar5() {
	total = document.getElementById("txtActual").value;
	total = parseInt(total) + 5;
	document.getElementById("txtActual").value = total;
}

function agregar15() {
	total = document.getElementById("txtActual").value;
	total = parseInt(total) + 15;
	document.getElementById("txtActual").value = total;
}

function agregar30() {
	total = document.getElementById("txtActual").value;
	total = parseInt(total) + 30;
	document.getElementById("txtActual").value = total;
}

function agregar50() {
	total = document.getElementById("txtActual").value;
	total = parseInt(total) + 50;
	document.getElementById("txtActual").value = total;
}

function mostrarActual() {
	valorActual = document.getElementById("txtActual").value;
	var rejas = parseInt(valorActual) * 45;
	alert("El número de manzanas estimadas para la producción total es de: " + rejas);
}

function mostrarTotal() {
	valorTotal = document.getElementById("txtTotal").value;
	var rejas = parseInt(valorTotal) * 45;
	alert("El número de manzanas estimadas para la producción total es de:" + rejas);
}

function Calcular() {
	valorActual = parseInt(document.getElementById("txtActual").value) * 45;
	var num = 350 * 45;
	var porcentaje = (valorActual*100)/num;
	document.getElementById("txtPorcentaje").value = porcentaje;

	if(porcentaje >= 70){
		document.getElementById("image").src = "camion.png";
	}
}

function Reiniciar(){
	location.reload();
}