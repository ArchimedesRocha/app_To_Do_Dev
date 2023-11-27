// Styled Imports
import GlobalStyle from './globalStyle';

// Components Imports
import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  )
}

export default App