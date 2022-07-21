import styled from "styled-components";

export const Card = styled.article`
    background-color: #EBD8C3;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);
    border-radius: 8px;
    /* border: solid red; */
    width: 15vw;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5vw;
   
    @media (max-width: 768px) {
      width: 40vw; 
    }
    @media (max-width: 375px) {
      width: 60vw;
   }
     :hover{
        background-color: #F7E9D7;
     }

    `