import { obtenerMonedas, cargarCambios } from "./exchange.js";

const $botonObtenerDatos = document.querySelector('#botonObtenerDatos')

export function mostrarMonedas(){
    obtenerMonedas().then(monedas => {
        monedas.forEach(moneda => {
            const form = document.querySelector('#inputSelectorMoneda')
            const eleccion = document.createElement('option');
            eleccion.setAttribute('value', moneda[0]);
            eleccion.textContent = `${moneda[0]} ${moneda[1]}`;
            form.appendChild(eleccion);
        });
    });
}

function mostrarTabla(){
    document.querySelector('#tablaCambios').classList.remove('invisible')
}

export function manejarClickBoton(){
    $botonObtenerDatos.onclick = function (e){
        const tabla = document.querySelector('#tablaCambios');
        controlarAlertas('');
    
        const monedaSeleccionada = document.querySelector('#inputSelectorMoneda').options[document.querySelector('#inputSelectorMoneda').selectedIndex].value;
        if(validarMoneda(monedaSeleccionada)){
            cargarCambios(monedaSeleccionada).then(datos => {
                generarTabla(datos);
                mostrarTabla();
            });
        } else {
            controlarAlertas('Elija una opcion valida');
            tabla.classList.add('invisible');
        }
        e.preventDefault();
    }
}

function generarTabla(data){
    const tabla = document.querySelector('#tablaCambios');
    const cuerpoTabla = tabla.querySelector('tbody');

    cuerpoTabla.innerText = '';

    Object.entries(data.conversion_rates).forEach(parMoneda => {
        const fila = document.createElement('tr');
        const columna1 = document.createElement('td');
        columna1.textContent = parMoneda[0];
        const columna2 = document.createElement('td');
        columna2.textContent = parMoneda[1];
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        cuerpoTabla.appendChild(fila);
    });
}

function validarMoneda(moneda){
    return moneda !== 'Escoja una moneda...'
}

function controlarAlertas(mensaje){
    const alertas = document.querySelector('#espacioAlertas')
    if(mensaje !== ''){
        alertas.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert">' + mensaje + 
        '</div>'
    } else {
        alertas.innerHTML = ''
    }
    
}