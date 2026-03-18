import('./Sidebar.css')

import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate()
    return (
        <div className='sb-container'>
            <div><h1 className='title'>Bem vindo</h1></div>
            <div className='sb-body'>
                <button onClick={() => navigate('/')}>Inicio</button>
                <button onClick={() => navigate('/produtos')}>Produtos</button>
                <button onClick={() => navigate('/clientes')}>Clientes</button>
            </div>
        </div>
    )
}

export default Sidebar