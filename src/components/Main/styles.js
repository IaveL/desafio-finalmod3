import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    z-index: 1;
    background-color: #FFEEEE;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 65px;
    min-height: 100vh;
    overflow: hidden;
    width: 100vw;
    @media (max-width: 1024px) {
        width: 100vw;

    }
`
export const IntroText = styled.div`
    padding: 2rem;
    margin: 0 0 1rem 0;  
    border: 0.75px solid #EBD8C3;
    width: 75vw;
    background-color: #FFF6EA;
    text-align: center;
    @media (max-width: 1024px) {
        width: 100vw;
    }
`
export const SolutionsContainer = styled.section`
    /* border: solid yellow; */
    border: 0.75px solid #EBD8C3;
    background-color: #FFF6EA;
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    min-height: 75vh;
    width: 80vw;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    @media (max-width: 1024px) {
        width: 100vw;
    }
    @media (max-width: 768px) {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`