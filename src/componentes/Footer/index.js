import OpcoesHeader from '../OpcoesFooter'
import styled from 'styled-components'

const FooterContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Footer() {
    return (
        <FooterContainer>
            <OpcoesFooter/>
        </FooterContainer>
    )
}

export default Footer