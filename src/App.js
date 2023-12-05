import './App.css';
import AppHeader from './component/Header.js/AppHeader';
import AppHero from './component/Header.js/AppHero';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
      </main>
    </div>
  );
}

export default App;
