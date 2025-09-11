/**
 * Representa un usuario en el sistema.
 * @class Usuario
 * @property {string} id - ID del usuario
 * @property {string} email - Correo electrónico del usuario
 * @property {string} password - Contraseña del usuario
 * @property {string} role - Rol del usuario (admin o user)
 * @property {string} status - Estado del usuario (active o inactive)
 */
export default class Usuario {
  /**
   * @param {Object} params
   * @param {string} params.id
   * @param {string} params.email
   * @param {string} params.password
   * @param {string} params.role
   * @param {string} params.status
   */
    constructor({ id, email, password, role,status }) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;   
    }
}