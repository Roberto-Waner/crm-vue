import api from '../lib/axios'

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    
    agregarCliente(data) {
        return api.post('/clientes', data)
    },

    obtenerCliente(id) {
        return api.get(`/clientes/${id}`)
    },

    // actualizarCliente(id, data) {
    //     return api.put(`/clientes/${id}`, data)
    // }
    /*
        PUT: Reemplaza el recurso completo. Debes enviar el objeto entero 
        del cliente, incluso si solo cambiaste un campo. Si omites un campo, 
        el servidor podría interpretarlo como que quieres borrarlo o dejarlo 
        nulo.
    */

    actualizarCliente(id, data) {
        return api.patch(`/clientes/${id}`, data)
    },
    /*
        PATCH: Actualiza parcialmente el recurso. Solo necesitas enviar los 
        campos que cambiaron. Los demás campos del cliente en el servidor 
        permanecerán intactos.
    */

    cambiarEstado(id, data) {
        console.log(data)
        return api.patch(`/clientes/${id}`, data)
    },

    eliminarCliente(id) {
        return api.delete(`/clientes/${id}`)
    }
}

/*
    ¿Cómo afecta a tu código?
    En tu función actualizarCliente, estás creando la lógica para editar un cliente existente.

    Con PUT (el código comentado): Si un usuario edita solo el número de teléfono de un cliente, 
        tendrías que enviar el objeto completo del cliente (nombre, apellido, email, telefono, etc.) 
        en la petición. Si solo envías { telefono: 'nuevo-numero' }, el PUT podría borrar el nombre, 
        apellido y el resto de los datos del cliente en la base de datos.

    Con PATCH (el código que estás usando): Puedes enviar únicamente la información que cambió. 
        Si el usuario solo modifica el teléfono, tu objeto data puede ser simplemente { telefono: 'nuevo-numero' }. 
        El servidor recibirá esta petición y entenderá que solo debe actualizar el campo telefono del cliente con el 
        id especificado, dejando todos los demás datos como estaban.

    Conclusión: Usar PATCH para la función actualizarCliente es la decisión correcta y más segura. 
    Hace tu API más flexible y previene la pérdida accidental de datos, ya que solo modificas lo 
    que explícitamente quieres cambiar.
*/