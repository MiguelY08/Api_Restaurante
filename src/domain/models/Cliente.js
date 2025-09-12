class Cliente {
    constructor({ id, nome, address,telefone,status }) {
        this.id = id;
        this.documento = id; 
        this.name = nome;
        this.date = new Date().toISOString();
        this.address = address;
        this.telefone = telefone;
        this.status = status ;


    }
}

export default Cliente;