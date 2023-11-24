import styled from 'styled-components'

const InputStyled = styled.input`
  width: 63.8rem;
  padding: 1.6rem;
  
  border-radius: 8px;
  border: 1px solid var(--gray-700, #0D0D0D);
  background: var(--gray-500, #262626);
  outline: none;
  &.contain{    
    border: 0.1rem solid var(--purple-dark, #5E60CE);
  }
`

export default InputStyled;