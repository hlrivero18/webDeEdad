let final;
let boton = document.getElementById('enter');
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('mes');
const daysInput = document.getElementById('dia');

boton.addEventListener('click', valores);




function valores(){
	const year = parseInt(yearInput.value);
	const month = parseInt(monthInput.value);
	const days = parseInt(daysInput.value);
	final = result(year, month, days);

	mostrar()

	yearInput.value = '';
	monthInput.value = '';
	daysInput.value = '';
}

function mostrar(){
	//variables selectoras
	let resultado = document.getElementById('resultado')
	let hijosDeResultado = resultado.children;

	//iterar los resultados en el html
	
	for(let i = 0; i < hijosDeResultado.length; i++){
		hijosDeResultado[i].children[0].innerHTML = final[i]
	}

}

function result(year, mes, dia){
	const nacimiento = new Date(year,mes-1,dia);
	const fecha = new Date();

	let anios = fecha.getFullYear() - nacimiento.getFullYear();	
	let meses = fecha.getMonth() - nacimiento.getMonth();
	let dias = fecha.getDate() - nacimiento.getDate();

	if(meses < 0 || (meses === 0 && dias < 0)){
		anios--;
		meses += 12;
	}

	if(dias < 0){
		let monthDays = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate();
		dias += monthDays;
		meses--
	}

	return [anios, meses, dias];
}

