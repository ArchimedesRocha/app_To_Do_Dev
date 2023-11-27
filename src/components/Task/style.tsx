import styled from "styled-components";

const TaskStyled = styled.div`
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
`

export default TaskStyled