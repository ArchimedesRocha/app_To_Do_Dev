import styled from "styled-components";

const ProgressStyled = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2.4rem;

  .progress {
    width: 73.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      span {
        padding: 0.2rem 0.8rem;

        border-radius: 99.9rem;
        background: var(--gray-400, #333);
      }

      &:first-child{
        color: var(--blue, #4EA8DE)
      }
      &:last-child{
        color: var(--purple, #8284FA)        
      }
      
      
    }
  }
`

export default ProgressStyled;