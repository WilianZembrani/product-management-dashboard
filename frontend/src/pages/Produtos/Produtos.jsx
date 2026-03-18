import { useState, useEffect } from "react"
import './Produtos.css'
import { createProduct } from "../../services/produtosService"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLocation } from "react-router-dom"
import { updateProduct } from "../../services/produtosService"
import { useNavigate } from "react-router-dom"





function Produtos() {
    const location = useLocation()
    const produtoEditando = location.state
    const isEdit = produtoEditando ? true : false
    const navigate = useNavigate()


    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [estoque, setEstoque] = useState("")
    const [categoria, setCategoria] = useState("")




    useEffect(() => {
        if (produtoEditando) {
            setNome(produtoEditando.nome)
            setDescricao(produtoEditando.descricao)
            setPreco(produtoEditando.preco)
            setEstoque(produtoEditando.estoque)
            setCategoria(produtoEditando.categoria)
        }
    }, [produtoEditando])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const produto = { nome, descricao, preco, estoque, categoria }

        try {
            if (!nome || !descricao || !preco || !estoque || !categoria) {
                throw new Error("Preencha todos os campos")
            }

            if (isEdit) {
                await updateProduct(produtoEditando.id, produto)
                toast.success("Produto atualizado com sucesso!")
            } else {
                await createProduct(produto)
                toast.success("Produto criado com sucesso!")
            }

            navigate("/")

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (

        <div className="form">
            <form className="form-container" onSubmit={handleSubmit}>

                <p>Nome</p>
                <input
                    placeholder="Digite o nome do produto..."
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <p>Descrição</p>
                <textarea
                    rows={4}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />

                <p>Preço</p>
                <input
                    placeholder="Digite o preço..."
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />

                <p>Estoque</p>
                <input
                    placeholder="Digite o estoque..."
                    type="number"
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                />

                <p>Categoria</p>
                <input
                    placeholder="Digite a categoria..."
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <button type="submit">
                    {isEdit ? "Atualizar" : "Salvar"}
                </button>
            </form>
        </div>
    )
}


export default Produtos