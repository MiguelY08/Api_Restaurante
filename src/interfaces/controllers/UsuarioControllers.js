/**
 * Controlador para operaciones sobre usuarios.
 * @module UsuarioControllers
 */
import CreateUsuario from "../../application/use-cases/usuario/CreateUsuario.js";
import GetUsuario from "../../application/use-cases/usuario/GetUsuario.js";
import GetUsuarioById from "../../application/use-cases/usuario/GetUsuarioById.js";
import UpdateUsuario from "../../application/use-cases/usuario/UpdateUsuario.js";
import DeleteUsuario from "../../application/use-cases/usuario/DeleteUsuario.js";
import UsuarioRepositoryMongo from "../../infrastructure/UsuarioRepositoryMongo.js";

const usuarioRepository = new UsuarioRepositoryMongo();
     
/**
 * Crea un nuevo usuario.
 * @function createUsuario
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const createUsuario = async (req, res) => {
    try {
        const useCase = new CreateUsuario(usuarioRepository);
        const usuario = await useCase.execute(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Obtiene todos los usuarios.
 * @function getUsuarios
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getUsuarios = async (req, res) => {
    try {
        const useCase = new GetUsuario(usuarioRepository);
        const usuarios = await useCase.execute();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
/**
 * Obtiene un usuario por su ID.
 * @function getUsuarioById
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getUsuarioById = async (req, res) => {
    try {
        const useCase = new GetUsuarioById(usuarioRepository);
        const usuario = await useCase.execute(req.params.id);
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Actualiza un usuario existente.
 * @function updateUsuario
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const updateUsuario = async (req, res) => {
    try {
        const useCase = new UpdateUsuario(usuarioRepository);
        const usuario = await useCase.execute(req.params.id, req.body);
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
/**
 * Elimina un usuario existente.
 * @function deleteUsuario
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const deleteUsuario = async (req, res) => {
    try {
        const useCase = new DeleteUsuario(usuarioRepository);
        const result = await useCase.execute(req.params.id);
        if (result) return res.json({ message: "Usuario eliminado" });
        res.status(404).json({ message: "Usuario no encontrado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

