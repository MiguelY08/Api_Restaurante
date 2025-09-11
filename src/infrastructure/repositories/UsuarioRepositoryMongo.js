import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);

    /**
     * Repositorio MongoDB para la entidad Usuario.
     * @class UsuarioRepositoryMongo
     */
    class UsuarioRepositoryMongo {  
      /**
       * Crea un nuevo usuario en la base de datos.
       * @param {Object} data - Datos del usuario.
       * @returns {Promise<Object>} Usuario creado.
       */
    async create(data) {    
        return await new UsuarioModel(data).save();
    }
      /**
       * Obtiene todos los usuarios.
       * @returns {Promise<Array>} Lista de usuarios.
       */
    async findAll() {
        return await UsuarioModel.find();
    }
      /**
       * Busca un usuario por su ID.
       * @param {string} id - ID del usuario.
       * @returns {Promise<Object|null>} Usuario encontrado o null.
       */
    async findById(id) {
        return await UsuarioModel.findById(id);
    }
      /**
       * Busca un usuario por su email.
       * @param {string} email - Email del usuario.
       * @returns {Promise<Object|null>} Usuario encontrado o null.
       */
    async findByEmail(email) {
        return await UsuarioModel.findOne
            ({ email: email });
    }
      /**
       * Actualiza un usuario por su ID.
       * @param {string} id - ID del usuario.
       * @param {Object} data - Datos a actualizar.
       * @returns {Promise<Object|null>} Usuario actualizado o null.
       */
    async update(id, data) {
        return await UsuarioModel.findByIdAndUpdate(id, data, { new: true });
    }   
      /**
       * Elimina un usuario por su ID.
       * @param {string} id - ID del usuario.
       * @returns {Promise<Object|null>} Usuario eliminado o null.
       */
    async delete(id) {
        return await UsuarioModel.findByIdAndDelete(id);
    }   
}
export default UsuarioRepositoryMongo;