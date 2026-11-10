import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Jornada from './components/Jornada/Jornada'
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Jornada />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
