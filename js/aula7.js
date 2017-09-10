/*
	Autor: Giomerito Alves de Souza

	Descrição: Estudo dos Operadores JavaScript

*/
function calcularIMC()
{
	var formulario = document.getElementById("formulario");
	
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;
	
	var altura = (metros * 100 + centimetros)/100;
	
	var imc = kilos / (altura * altura);
	
	formulario.imc.value = imc.toFixed(2);
	
	if (imc < 20)
	{
		alert("Abaixo do Peso");
	}
	else if (imc > 20 && imc <= 25)
	{
		alert("Peso ideal");
	}
	else if(imc > 25)
	{
		alert("Acima do peso");
	}
}