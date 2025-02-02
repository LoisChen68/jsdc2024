import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage';
import HostSection from './components/HostSection';
import SponsorsSection from './components/SponsorsSection';
import SpeakersSection from './components/SpeakersSection';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <HomePage />
          <HostSection id="hosts" />
          <SponsorsSection id="sponsors" />
          <SpeakersSection id="speakers" />
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
