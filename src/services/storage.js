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