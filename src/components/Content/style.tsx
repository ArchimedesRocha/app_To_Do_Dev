import styled from "styled-components";

const ContentStyled = styled.div`
width: 100vw;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-bottom: 2.4rem;

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

  transition: all 0.2s;

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
  &-hidden {
    display:none;
  }
}
`

export default ContentStyled