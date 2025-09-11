/**
 * Representa un pedido en el sistema.
 * @class Pedido
 * @property {string} id - ID del pedido
 * @property {string} cliente - Nombre del cliente
 * @property {string} telefono - Teléfono del cliente
 * @property {string} fecha - Fecha del pedido
 * @property {Array} items - Lista de items del pedido
 * @property {boolean} domicilio - Si es pedido a domicilio
 * @property {string} direccion - Dirección de entrega
 * @property {number} total - Total del pedido
 */
class Pedido {
  /**
   * @param {Object} params
   * @param {string} params.id
   * @param {string} params.cliente
   * @param {string} params.telefono
   * @param {string} params.fecha
   * @param {Array} params.items
   * @param {boolean} params.domicilio
   * @param {string} params.direccion
   * @param {number} params.total
   */
  constructor({ id, cliente, telefono, fecha, items, domicilio, direccion, total }) {
    this.id = id;
    this.cliente = cliente;
    this.telefono = telefono;
    this.fecha = fecha;
    this.items = items;
    this.domicilio = domicilio;
    this.direccion = direccion;
    this.total = total;
  }
}

export default Pedido;
