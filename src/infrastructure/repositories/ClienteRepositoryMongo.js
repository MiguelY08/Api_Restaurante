import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    documento: { type: String, required: true, unique: true },  
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    address: { type: String, required: true },
    telefone: { type: String, required: true },
    status: { type: String, enum: ['cumplidos', 'porCumplir'], default: 'porCumplir' }
});

const ClienteModel = mongoose.model("Cliente", ClienteSchema)

    class ClienteRepositoryMongo {
        async create(data) {
            return await new ClienteModel(data).save();
        }
        async findAll() {
            return await ClienteModel.find();
        }   
        async findById(id) {
            return await ClienteModel.findById(id);
        }   
        async findByDocumento(documento) {
            return await ClienteModel.findOne({ documento: documento });
        }
        async update(id, data) {
            return await ClienteModel.findByIdAndUpdate(id, data, { new: true });
        }   
        async delete(id) {
            return await ClienteModel.findByIdAndDelete(id);
        }   

        async findByStatus(status) {
            return await ClienteModel.find({ status: status });
        }   
    }

export default ClienteRepositoryMongo;
        

