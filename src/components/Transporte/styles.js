import styled from "styled-components";

export const SolutionContainer = styled.section`
    min-height: 100vh;

`

export const TextWrapper = styled.section`
    min-height: 70vh;
    border: 0.75px solid #EBD8C3;
    background-color: #FFF6EA;
    margin: 2rem;
    font-size: 1.4rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 320px) {
        width: 90vw;
    }
`
export const Paragraph = styled.p`
    margin: 0.5rem;
`