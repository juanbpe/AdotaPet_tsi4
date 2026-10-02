import { Routes, Route, Navigate } from 'react-router'
import ProtectedRoute from './components/protectedRoute'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import Animais from './pages/animais'
import AnimalDetalhes from './pages/animalDetalhes'
import MinhasSolicitacoes from './pages/minhasSolicitacoes'

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
                element={
                    <ProtectedRoute>
                        <Animais />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/animais/:id"
                element={
                    <ProtectedRoute>
                        <AnimalDetalhes />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/minhas-solicitacoes"
                element={
                    <ProtectedRoute>
                        <MinhasSolicitacoes />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default App