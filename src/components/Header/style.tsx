import styled from "styled-components";

const HeaderStyled = styled.header`

  width: 100vw;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background-color: var(--gray-700);

  p {
    span {
      color: var(--blue);
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
    
    .second {
        color: var(--purple-dark);
      }
  }

`

export default HeaderStyled;