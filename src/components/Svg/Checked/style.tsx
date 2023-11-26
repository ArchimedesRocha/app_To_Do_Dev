import styled from "styled-components";

const SvgCheckedStyled = styled.svg`
transition: all .2s;
  path {
    fill:#5E60CE;

    &:last-child{
      fill:#F2F2F2;
    }
  }
  &:hover {      
    path {
      fill:#8284FA;       
    
      &:last-child {
        fill:#F2F2F2
      }
    }
  }
`

export default SvgCheckedStyled;