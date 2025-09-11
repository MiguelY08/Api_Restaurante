/**
 * Caso de uso para obtener todos los pedidos.
 * @class GetPedidos
 */
export default class GetPedidos {
  /**
   * @param {Object} pedidoRepository - Repositorio de pedidos con método findAll.
   */
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }
  /**
   * Ejecuta la búsqueda de todos los pedidos.
   * @returns {Promise<Array>} Lista de pedidos encontrados.
   */
  async execute() {
    return await this.pedidoRepository.findAll();
  }
}
