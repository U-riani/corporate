import './App.css';
import About from './component/Header.js/About';
import AppHeader from './component/Header.js/AppHeader';
import AppHero from './component/Header.js/AppHero';
import Pricing from './component/Header.js/Pricing';
import Services from './component/Header.js/Services';
import Team from './component/Header.js/Team';
import Testimonials from './component/Header.js/Testimonials';
import Works from './component/Header.js/Works';



function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <About />
        <Services />
        <Works />
        <Team />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
