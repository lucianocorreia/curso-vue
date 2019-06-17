export const getNome = state => {
    return state.nome;
}

export const getNomeCompleto = state => state.nome + state.sobrenome;