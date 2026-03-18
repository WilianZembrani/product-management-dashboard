import './Dashboard.css'
import addIcon from '../../assets/edit-icon.png'
import trashIcon from '../../assets/trash-icon.png'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { loadProdutos, deleteProduct } from '../../services/produtosService'

function Dashboard() {
    const navigate = useNavigate()

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        loadProdutos(setProdutos)

    }, [])

    async function handleDelete(id) {
        await deleteProduct(id)
        loadProdutos(setProdutos)
    }


    return (
        <div className='container'>
            <div className='buttons'>
                <button className='pdct' onClick={() => navigate("/produtos")}>Produtos</button>
                <button className='clt' onClick={() => navigate("/clientes")}>Clientes</button>
                <button className='pds' onClick={() => navigate("/")}>Pedidos</button>
            </div>

            <div className='table-container'>
                <table className='table'>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.estoque}</td>

                                <td className="imgs">
                                    <img onClick={() => navigate("/produtos", { state: produto })} src={addIcon} alt="" />
                                    <img onClick={() => handleDelete(produto.id)} src={trashIcon} alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div >
    )
}


export default Dashboard