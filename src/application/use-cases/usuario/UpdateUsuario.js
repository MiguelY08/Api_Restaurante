/**
 * Caso de uso para actualizar un usuario.
 * @class UpdateUsuario
 */
export default class UpdateUsuario {
    /**
     * @param {Object} usuarioRepository - Repositorio de usuarios con método update.
     */
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    /**
     * Ejecuta la actualización de un usuario por su ID.
     * @param {string} id - ID del usuario a actualizar.
     * @param {Object} usuarioData - Datos nuevos del usuario.
     * @returns {Promise<any>} Usuario actualizado.
     */
    async execute(id, usuarioData) {
        return await this.usuarioRepository.update(id, usuarioData);
    }
}
