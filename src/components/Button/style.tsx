import styled from "styled-components";

const ButtonStyled = styled.button`
display: flex;
align-items:center;
justify-content:center;

gap: 0.8rem;
padding: 1.6rem;

border-radius: 0.8rem;
background: var(--blue-dark, #1E6F9F);

transition: all 0.2s;

&:hover {  
  background: var(--blue, #4EA8DE);
}
`

export default ButtonStyled;