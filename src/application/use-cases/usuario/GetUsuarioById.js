/**
 * Caso de uso para obtener un usuario por su ID.
 * @class GetUsuarioById
 */
export default class GetUsuarioById {
    /**
     * @param {Object} usuarioRepository - Repositorio de usuarios con método findById.
     */
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    /**
     * Ejecuta la búsqueda de un usuario por su ID.
     * @param {string} id - ID del usuario a buscar.
     * @returns {Promise<any>} Usuario encontrado o null si no existe.
     */
    async execute(id) {
        return await this.usuarioRepository.findById(id);
    }
}