import useRevealAll from './hooks/useReveal'
import Navbar from './components/Navbar'
import Altimetro from './components/Altimetro'
import Hero from './components/Hero'
import Origen from './components/Origen'
import Ritual from './components/Ritual'
import Galeria from './components/Galeria'
import Visita from './components/Visita'

export default function App() {
  useRevealAll()

  return (
    <>
      <Navbar />
      <Altimetro />
      <main>
        <Hero />
        <Origen />
        <Ritual />
        <Galeria />
      </main>
      <Visita />
    </>
  )
}