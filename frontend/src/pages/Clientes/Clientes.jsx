import './Clientes.css'
import { useState } from 'react'
import { createCliente } from '../../services/clientesService'
import { toast } from "react-toastify"


function Clientes() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")


    async function handleSubmit() {


        const cliente = {
            nome,
            email,
            telefone,
            endereco
        }


        try {
            if (!cliente.nome || !cliente.email || !cliente.telefone || !cliente.endereco) {
                throw new Error("Preencha todos os campos")
            }

            await createCliente(cliente)
            toast.success('Cliente criado com sucesso')

        } catch (error) {
            toast.error(error.message)

        }

    }

    return (
        <div className="form">
            <form className="form-container" onSubmit={handleSubmit}>

                <p>Nome</p>
                <input
                    placeholder="Digite seu nome..."
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <p>Email</p>
                <input
                    placeholder='Digite seu email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p>Telefone</p>
                <input
                    placeholder="Digite seu telefone..."
                    type="number"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <p>Endereço</p>
                <input
                    placeholder="Digite seu endereço..."
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />

                <button type="submit">Salvar</button>

            </form>

        </div>
    )
}

export default Clientes;