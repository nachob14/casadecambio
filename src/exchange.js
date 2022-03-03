const BASE_URL = 'https://v6.exchangerate-api.com/v6/' 
const API_KEY = '230d955d9e3d5a7df9037eb8';

export async function obtenerMonedas(){
    try{
        const respuesta = await fetch(`${BASE_URL + API_KEY}/codes`);
        const datos = await respuesta.json();
        return datos.supported_codes;
    } catch (error) {
        console.error('Error', error);
    }    
}


export async function cargarCambios(moneda){
    try{
        const respuesta = await fetch(`${BASE_URL + API_KEY}/latest/${moneda}`)
        return await respuesta.json();
    } catch (error){
        console.error('Error', error);
    }
}