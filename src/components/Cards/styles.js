import styled from "styled-components";

export const Card = styled.article`
    background-color: ${props => props.primary? "palevioletred" : "white"};
    /* border: solid red; */
    width: fit-content;
    margin: 20px;
`