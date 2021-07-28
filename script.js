let date = new Date();
let hora = date.getHours();
let min = date.getMinutes();

let hora_Site = document.getElementById("horas");
let minuto_Site = document.getElementById("minutos");
hora.toString();
min.toString();
hora_Site.innerHTML = hora;
minuto_Site.innerHTML = min;