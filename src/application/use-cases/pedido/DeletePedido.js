/**
 * Caso de uso para eliminar un pedido.
 * @class DeletePedido
 */
export default class DeletePedido {
  /**
   * @param {Object} pedidoRepository - Repositorio de pedidos con método delete.
   */
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  /**
   * Ejecuta la eliminación de un pedido por su ID.
   * @param {string} id - ID del pedido a eliminar.
   * @returns {Promise<any>} Resultado de la operación de borrado.
   */
  async execute(id) {
    return await this.pedidoRepository.delete(id);
  }
}
