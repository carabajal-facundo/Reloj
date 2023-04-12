
function setearFecha(){
    let fecha = new Date();
    let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    let pFecha = document.getElementById('pFecha');
    let hora = document.getElementById('hora');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let tipo = document.getElementById('tipo');
    pFecha.textContent = `${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
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


window.setInterval(setearFecha,1000);