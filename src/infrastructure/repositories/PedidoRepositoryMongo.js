import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  
});

const PedidoSchema = new mongoose.Schema({
  cliente: String,
  telefono: String,
  fecha: { type: Date, default: Date.now },
  items: [ItemSchema],
  domicilio: Boolean,
  direccion: {
    calle: String,
    ciudad: String,
  },
  total: Number,
});

const PedidoModel = mongoose.model("Pedido", PedidoSchema);

/**
 * Repositorio MongoDB para la entidad Pedido.
 * @class PedidoRepositoryMongo
 */
class PedidoRepositoryMongo {
  /**
   * Crea un nuevo pedido en la base de datos.
   * @param {Object} data - Datos del pedido.
   * @returns {Promise<Object>} Pedido creado.
   */
  async create(data) { return await new PedidoModel(data).save(); }
  /**
   * Obtiene todos los pedidos.
   * @returns {Promise<Array>} Lista de pedidos.
   */
  async findAll() { return await PedidoModel.find(); }
  /**
   * Busca un pedido por su ID.
   * @param {string} id - ID del pedido.
   * @returns {Promise<Object|null>} Pedido encontrado o null.
   */
  async findById(id) { return await PedidoModel.findById(id); }
  /**
   * Actualiza un pedido por su ID.
   * @param {string} id - ID del pedido.
   * @param {Object} data - Datos a actualizar.
   * @returns {Promise<Object|null>} Pedido actualizado o null.
   */
  async update(id, data) { return await PedidoModel.findByIdAndUpdate(id, data, { new: true }); }
  /**
   * Elimina un pedido por su ID.
   * @param {string} id - ID del pedido.
   * @returns {Promise<Object|null>} Pedido eliminado o null.
   */
  async delete(id) { return await PedidoModel.findByIdAndDelete(id); }
}

export default PedidoRepositoryMongo;
