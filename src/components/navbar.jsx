import { Link, useNavigate } from 'react-router'
import { buscarUsuarioLogado, removerUsuarioLogado } from '../services/storage'

import '../styles/navbar.css'


function Navbar(){
    const navigate = useNavigate()
    const usuario = buscarUsuarioLogado()

    function handleLogout(){
        removerUsuarioLogado()
        navigate('/login')
    }

    return(
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/animais" className="navbar-logo">
                    🐾 AdotaPet
                </Link>

                <nav className="navbar-menu">
                    <Link to="/animais">
                        Animais
                    </Link>

                    <Link to="/minhas-solicitacoes">
                        Minhas solicitações
                    </Link>
                </nav>

                <div className="navbar-usuario">
                    <span>
                        Olá, {usuario?.nome}
                    </span>
                    <button type="button" onClick={handleLogout} className="navbar-sair">
                        Sair
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar