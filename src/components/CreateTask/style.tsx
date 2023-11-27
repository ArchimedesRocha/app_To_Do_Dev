import styled from 'styled-components'

const CreateTask = styled.div`


display: flex;
align-items:center;
justify-content:center;

margin-top: -3.2rem;
margin-bottom: 6.4rem;

.container {
  width: 73.6rem;

  display: flex;
  align-items:center;
  justify-content:center;

  gap: 0.8rem;

  input {
    width: 63.8rem;
    padding: 1.6rem;
    
    border-radius: 8px;
    border: 1px solid var(--gray-700, #0D0D0D);
    background: var(--gray-500, #262626);
    outline: none;
    &.contain{    
      border: 0.1rem solid var(--purple-dark, #5E60CE);
    }
  }

  button {    
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
  }
}
`

export default CreateTask;