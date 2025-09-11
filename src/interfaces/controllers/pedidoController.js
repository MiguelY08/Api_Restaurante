/**
 * Controlador para operaciones sobre pedidos.
 * @module pedidoController
 */
import CreatePedido from '../../application/use-cases/pedido/CreatePedido.js';
import GetPedidos from '../../application/use-cases/pedido/GetPedidos.js';
import GetPedidoById from '../../application/use-cases/pedido/GetPedidoById.js';
import UpdatePedido from '../../application/use-cases/pedido/UpdatePedido.js';
import DeletePedido from '../../application/use-cases/pedido/DeletePedido.js';
import PedidoRepositoryMongo from '../../infrastructure/repositories/PedidoRepositoryMongo.js';

const pedidoRepository = new PedidoRepositoryMongo();

/**
 * Crea un nuevo pedido.
 * @function createPedido
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const createPedido = async (req, res) => {
  try {
    const useCase = new CreatePedido(pedidoRepository);
    const pedido = await useCase.execute(req.body);
    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene todos los pedidos.
 * @function getPedidos
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getPedidos = async (req, res) => {
  try {
    const useCase = new GetPedidos(pedidoRepository);
    const pedidos = await useCase.execute();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene un pedido por su ID.
 * @function getPedidoById
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getPedidoById = async (req, res) => {
  try {
    const useCase = new GetPedidoById(pedidoRepository);
    const pedido = await useCase.execute(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Actualiza un pedido existente.
 * @function updatePedido
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const updatePedido = async (req, res) => {
  try {
    const useCase = new UpdatePedido(pedidoRepository);
    const pedido = await useCase.execute(req.params.id, req.body);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Elimina un pedido existente.
 * @function deletePedido
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const deletePedido = async (req, res) => {
  try {
    const useCase = new DeletePedido(pedidoRepository);
    const result = await useCase.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
