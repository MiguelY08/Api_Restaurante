export default class UpdateCliente {
    constructor(clienteRepository) {        
        this.clienteRepository = clienteRepository;
    }       
    async execute(id, clienteData) {
        return await this.clienteRepository.update(id, clienteData);
    }
}