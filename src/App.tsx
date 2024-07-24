import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaPadrao from './themes/padrao'
import EstiloGlobal from './styles'

import { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
