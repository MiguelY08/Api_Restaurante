/**
 * Caso de uso para eliminar un usuario.
 * @class DeleteUsuario
 */
export default class DeleteUsuario {
  /**
   * @param {Object} usuarioRepository - Repositorio de usuarios con método delete.
   */
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
  /**
   * Ejecuta la eliminación de un usuario por su ID.
   * @param {string} id - ID del usuario a eliminar.
   * @returns {Promise<any>} Resultado de la operación de borrado.
   */
    async execute(id) {
        return await this.usuarioRepository.delete(id);
    }
}