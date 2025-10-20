import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export default api

/*
    El propósito de este archivo es crear una instancia de Axios con una URL base preconfigurada.
    Esto permite centralizar la configuración de la API y reutilizar la instancia en toda la aplicación,
    evitando tener que escribir la URL completa en cada petición.
*/