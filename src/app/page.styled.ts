import styled from "styled-components";

export const Father = styled.div<{valor: string}>`
    background-image: url('./map.png');
    height: 480px;
    width: 480px;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: repeat(16,1fr);
    justify-items: center;
    .a0{
        height: 30px;
    }
    .a1{
        transition: all;
        height: 30px;
        .persona{
        overflow: hidden;
         width:30px;
         height: 30px;
         position: relative;
         img{
            margin: ${props => props.valor} 0;
         }
    }
    }
   
`
