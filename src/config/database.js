import mongoose from "mongoose";

/**
 * Conecta la aplicación a la base de datos MongoDB usando Mongoose.
 * @function connectDB
 * @returns {Promise<void>} Promesa que se resuelve cuando la conexión es exitosa.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error de conexión:", err);
    process.exit(1);
  }
};

export default connectDB;
