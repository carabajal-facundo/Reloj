setInterval(setearFecha,1000);
let fecha = new Date();
let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let pFecha = document.getElementById('pFecha');
let hora = document.getElementById('hora');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let tipo = document.getElementById('tipo');

function setearFecha(){
    pFecha.textContent = `${dias[fecha.getDay()-1]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
    minutos.textContent = fecha.getMinutes();
    segundos.textContent = fecha.getSeconds();
    if(fecha.getHours() > 12){
        hora.textContent = 12 - (24 - fecha.getHours() );
        tipo.textContent = 'PM';
    }
    else {
        hora.textContent = fecha.getHours();
        tipo.textContent = 'AM';
    }
}
