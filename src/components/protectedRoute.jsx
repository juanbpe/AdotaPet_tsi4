import { Navigate } from 'react-router'
import { buscarUsuarioLogado } from '../services/storage'


function ProtectedRoute({ children }){
    const usuario = buscarUsuarioLogado()

    if(!usuario){
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute