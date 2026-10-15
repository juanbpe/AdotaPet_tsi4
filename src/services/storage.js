const USUARIOS_KEY = 'adotapet_usuarios'
const USUARIO_LOGADO_KEY = 'adotapet_usuario_logado'

export function buscarUsuarios(){
    const usuarios = localStorage.getItem(USUARIOS_KEY)
    if(!usuarios){
        return[]
    }
    return JSON.parse(usuarios)
}

export function salvarUsuarios(usuarios){
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios))
}

export function salvarUsuarioLogado(usuario){
    localStorage.setItem(USUARIO_LOGADO_KEY, JSON.stringify(usuario))
}

export function buscarUsuarioLogado(){
    const usuario = localStorage.getItem(USUARIO_LOGADO_KEY)
    if(!usuario){
        return null
    }

    return JSON.parse(usuario)
}


export function removerUsuarioLogado(){
    localStorage.removeItem(USUARIO_LOGADO_KEY)
}

const SOLICITACOES_KEY = 'adotapet_solicitacoes'


export function buscarSolicitacoes() {
    try {
        const dados = localStorage.getItem(SOLICITACOES_KEY)
        const solicitacoes = dados ? JSON.parse(dados) : []
        return Array.isArray(solicitacoes) ? solicitacoes : []
    } catch {
        return []
    }
}

// Salva a lista de solicitações.
export function salvarSolicitacoes(solicitacoes) {
    localStorage.setItem(
        SOLICITACOES_KEY,
        JSON.stringify(solicitacoes)
    )
}

// Cria uma solicitação vinculada ao usuário logado.
export function criarSolicitacao(animal) {
    const usuario = buscarUsuarioLogado()

    if (!usuario) {
        throw new Error('É necessário estar logado.')
    }

    const novaSolicitacao = {
        id: crypto.randomUUID(),
        usuarioId: usuario.id,
        animalId: animal.id,
        nomeAnimal: animal.nome,
        status: 'Pendente',
        data: new Date().toISOString()
    }

    salvarSolicitacoes([
        ...buscarSolicitacoes(),
        novaSolicitacao
    ])

    return novaSolicitacao
}

// Lista apenas as solicitações do usuário atual.
export function buscarMinhasSolicitacoes() {
    const usuario = buscarUsuarioLogado()

    if (!usuario) return []

    return buscarSolicitacoes().filter(
        solicitacao =>
            String(solicitacao.usuarioId) === String(usuario.id)
    )
}

// Cancela somente solicitações pendentes do usuário.
export function cancelarSolicitacao(id) {
    const usuario = buscarUsuarioLogado()

    if (!usuario) return false

    const solicitacoes = buscarSolicitacoes()
    let cancelada = false

    const atualizadas = solicitacoes.map(solicitacao => {
        if (
            String(solicitacao.id) === String(id) &&
            String(solicitacao.usuarioId) === String(usuario.id) &&
            solicitacao.status === 'Pendente'
        ) {
            cancelada = true
            return { ...solicitacao, status: 'Cancelada' }
        }

        return solicitacao
    })

    if (cancelada) salvarSolicitacoes(atualizadas)

    return cancelada
}
