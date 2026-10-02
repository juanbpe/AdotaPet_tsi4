import { Navigate } from 'react-router'
import { buscarUsuarioLogado } from '../services/storage'


function PublicRoute({ children }){
    const usuario = buscarUsuarioLogado()

    if(usuario){
        return <Navigate to="/animais" replace />
    }

    return children
}

export default PublicRoute