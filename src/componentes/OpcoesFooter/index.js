import styled from 'styled-components'

const Informacao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Informacoes = styled.ul`
    display: flex;
`

const textoInformacoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesFooter() {
    return (
        <Informacoes>
            {textoInformacoes.map( (texto) => (
                <Informacao><p>{texto}</p></Informacao>
            ) ) }
      </Informacoes>
    )
}

export default OpcoesFooter