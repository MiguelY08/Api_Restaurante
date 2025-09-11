/**
 * Caso de uso para crear un pedido.
 * 
 * @class CreatePedido
 * @description Esta clase se encarga de recibir los datos de un pedido y 
 * delegar la creación al repositorio correspondiente dentro de la arquitectura limpia.
 */
export default class CreatePedido {
  /**
   * @constructor
   * @param {Object} pedidoRepository - Repositorio encargado de manejar la persistencia de pedidos.
   * @param {Function} pedidoRepository.create - Método que guarda un pedido en la base de datos.
   */
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  /**
   * Ejecuta la acción de crear un pedido.
   * 
   * @async
   * @function execute
   * @param {Object} pedidoData - Datos del pedido a crear.
   * @param {string} pedidoData.cliente - Nombre del cliente.
   * @param {string} pedidoData.telefono - Número de teléfono del cliente.
   * @param {Date} pedidoData.fecha - Fecha del pedido.
   * @param {Array<{producto: string, cantidad: number}>} pedidoData.items - Lista de productos con sus cantidades.
   * @param {boolean} pedidoData.domicilio - Indica si el pedido es a domicilio.
   * @param {string} pedidoData.direccion - Dirección de entrega (si aplica).
   * @param {number} pedidoData.total - Total del pedido.
   * @returns {Promise<Object>} El pedido creado con su respectivo ID generado por el repositorio.
   */
  async execute(pedidoData) {
    return await this.pedidoRepository.create(pedidoData);
  }
}
