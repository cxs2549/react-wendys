import GlobalStyles from './globalStyles'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100vh;
`

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <Footer />
    </StyledApp>
  )
}

export default App
