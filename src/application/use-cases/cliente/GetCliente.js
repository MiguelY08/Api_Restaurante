export default class GetCliente {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }   
    async execute() {
        return await this.clienteRepository.findAll();
    }
}