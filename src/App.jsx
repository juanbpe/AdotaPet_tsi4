import { Routes, Route, Navigate } from 'react-router'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Animais from './pages/Animais'
import AnimalDetalhes from './pages/AnimalDetalhes'
import MinhasSolicitacoes from './pages/MinhasSolicitacoes'

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/cadastro"
                element={<Cadastro />}
            />

            <Route
                path="/animais"
                element={<Animais />}
            />

            <Route
                path="/animais/:id"
                element={<AnimalDetalhes />}
            />

            <Route
                path="/minhas-solicitacoes"
                element={<MinhasSolicitacoes />}
            />

        </Routes>
    )
}

export default App