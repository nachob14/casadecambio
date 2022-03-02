const BASE_URL = 'https://v6.exchangerate-api.com/v6/' 
const API_KEY = '230d955d9e3d5a7df9037eb8';


//ejemplo de uso https://v6.exchangerate-api.com/v6/230d955d9e3d5a7df9037eb8/latest/USD // base default USD (dolar) y fecha default (ultima disponible)
// estructura = `${BASE_URL}${API_KEY}/${FECHA}/{$BASE}`
// codigos soportados https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes


function obtenerMonedas(){
    //fetch(`${BASE_URL}${API_KEY}/codes`);

    return console.log(`${BASE_URL}${API_KEY}/codes`)
}
