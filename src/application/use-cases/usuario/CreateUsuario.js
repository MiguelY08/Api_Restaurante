import bycrypt from 'bcrypt';

export default class CreateUsuario {

    /**
     * Caso de uso para crear un usuario.
     * @class CreateUsuario
     */
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

      /**
       * Ejecuta la creación de un usuario, encriptando la contraseña antes de guardar.
       * @param {Object} usuarioData - Datos del usuario a crear.
       * @param {string} usuarioData.password - Contraseña en texto plano.
       * @returns {Promise<Object>} Usuario creado con contraseña encriptada.
       */
    async execute(usuarioData) {
        const {password ,...restData} = usuarioData;

        const hashedPassword = await bycrypt.hash(password, 8);

        const nuevoUsuarioData = {
            ...restData,
            password: hashedPassword
        };
        
        return await this.usuarioRepository.create(nuevoUsuarioData);
    } 
}
