import CreateCliente from '../../application/use-cases/cliente/CreateCliente.js'
import DeleteCliente from '../../application/use-cases/cliente/DeleteCliente.js'
import GetCliente from '../../application/use-cases/cliente/GetCliente.js'
import GetClienteById from '../../application/use-cases/cliente/GetClienteById.js'
import GetClienteById from '../../application/use-cases/cliente/GetClienteById.js'
import UpdateCliente from '../../application/use-cases/cliente/UpdateCliente.js'
import ClienteRepositoryMongo from '../../infrastructure/repositories/ClienteRepositoryMongo.js'

const clienteRepository = new ClienteRepositoryMongo()
/**
 * Crea un nuevo cliente.
 * @function createCliente  
 *  @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 *  
 */
export const createCliente = async (req, res) => {
  try {
    const useCase = new CreateCliente(clienteRepository)
    const cliente = await useCase.execute(req.body)
    res.status(201).json(cliente)
  } catch (err) {
    res.status(500).json({ error: err.message })
    }
}
    /** Obtiene todos los clientes.
/** * @function getClientes
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getClientes = async (req, res) => {
  try {
    const useCase = new GetCliente(clienteRepository)   
    const clientes = await useCase.execute()
    res.json(clientes)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

/** * Obtiene un cliente por su ID.
 * * @function getClienteById
 *  @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */ 
export const getClienteById = async (req, res) => {
  try {
    const useCase = new GetClienteById(clienteRepository)
    const cliente = await useCase.execute(req.params.id)
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' })
    res.json(cliente)
  } 
    catch (err) {
    res.status(500).json({ error: err.message })
  }
}
    /** Actualiza un cliente existente.
/** * @function updateCliente
 *  @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export  const updateCliente = async (req, res) => {
    try {   
    const useCase = new UpdateCliente(clienteRepository)
    const cliente = await useCase.execute(req.params.id, req.body)
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' })
    res.json(cliente)
  } catch (err) {
    res.status(500).json({ error: err.message })
  } 
}

/** * Elimina un cliente por su ID.
 *  * @function deleteCliente
 *  @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.  
 *  */

export const deleteCliente = async (req, res) => {
  try {
    const useCase = new DeleteCliente(clienteRepository)    
    const cliente = await useCase.execute(req.params.id)
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' })
    res.json({ message: 'Cliente eliminado correctamente' })
  } catch (err) {       
    res.status(500).json({ error: err.message })
  } 
}
