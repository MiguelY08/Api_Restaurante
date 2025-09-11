/**
 * Caso de uso para actualizar un pedido.
 * @class UpdatePedido
 */
export default class UpdatePedido {
  /**
   * @param {Object} pedidoRepository - Repositorio de pedidos con método update.
   */
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }
  /**
   * Ejecuta la actualización de un pedido por su ID.
   * @param {string} id - ID del pedido a actualizar.
   * @param {Object} pedidoData - Datos nuevos del pedido.
   * @returns {Promise<any>} Pedido actualizado.
   */
  async execute(id, pedidoData) {
    return await this.pedidoRepository.update(id, pedidoData);
  }
}
