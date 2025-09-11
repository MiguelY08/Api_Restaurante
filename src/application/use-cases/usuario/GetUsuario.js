/**
 * Caso de uso para obtener todos los usuarios.
 * @class GetUsuario
 */
export default class GetUsuario {
  /**
   * @param {Object} usuarioRepository - Repositorio de usuarios con método findAll.
   */
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
  /**
   * Ejecuta la búsqueda de todos los usuarios.
   * @returns {Promise<Array>} Lista de usuarios encontrados.
   */
    async execute() {
        return await this.usuarioRepository.findAll();
    }
}