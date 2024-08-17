import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Appreciation from './components/Appreciation';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Appreciation />
      <Contact />
    </main>
  )
}
