const BASE_URL = 'https://v6.exchangerate-api.com/v6/' 
const API_KEY = '230d955d9e3d5a7df9037eb8';


//ejemplo de uso https://v6.exchangerate-api.com/v6/230d955d9e3d5a7df9037eb8/latest/USD // base default USD (dolar) y fecha default (ultima disponible)
// estructura = `${BASE_URL}${API_KEY}/${FECHA}/{$BASE}`
// codigos soportados https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes

function inicializar(){
    mostrarMonedas();
}


async function obtenerMonedas(){
    try{
        const respuesta = await fetch(`${BASE_URL + API_KEY}/codes`);
        const datos = await respuesta.json();
        return datos.supported_codes;
    } catch (error) {
        console.error('Error', error);
    }    
}

function mostrarMonedas(){
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

inicializar();