/**
 * Caso de uso para obtener un pedido por su ID.
 * @class GetPedidoById
 */
export default class GetPedidoById {
  /**
   * @param {Object} pedidoRepository - Repositorio de pedidos con método findById.
   */
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }
  /**
   * Ejecuta la búsqueda de un pedido por su ID.
   * @param {string} id - ID del pedido a buscar.
   * @returns {Promise<any>} Pedido encontrado o null si no existe.
   */
  async execute(id) {
    return await this.pedidoRepository.findById(id);
  }
}
