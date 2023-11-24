import styled from "styled-components";

const TaskAreaStyled = styled.div`
width: 100vw;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-bottom: 2.4rem;

.with-task {  
  width: 73.6rem;
  padding: 1.6rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;

  border-radius: 8px;
  border: 1px solid var(--gray-400, #333);
  background: var(--gray-500, #262626);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  input type[checkbox] {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.3273rem;
    background: transparent;
  }

  p {
    width: 63.2rem;
    color: var(--gray-100, #F2F2F2);
    font-size: 1.4rem;
    line-height: 140%;

    &.done {
      color: var(--gray-300, #808080);
      text-decoration: line-through;
    }
  }

  button {
    svg {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0.5rem 0.5522rem 0.5rem 0.6rem;

      fill: var(--gray-300, #808080);

      border-radius: 0.4rem;
      background: transparent;

      &:hover {
      background: var(--gray-400, #333333);
        
      fill: var(--danger, #E25858);
      }
    }
  }
}

.without-task {
  width: 73.6rem;
  height: 24.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-top: 1px solid var(--grey-400, #333);

  gap: 1.6rem;

  .messages {
    p {
      color: var(--gray-300, #808080);
      
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 140%;

      &:last-child {
        font-weight: 400;
      }
    }
  }
}
`

export default TaskAreaStyled