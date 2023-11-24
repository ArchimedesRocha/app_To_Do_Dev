// Styled Imports
import GlobalStyle from './globalStyle';

// Components Imports
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Progress } from './components/Progress';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <Progress />
    </>
  )
}

export default App