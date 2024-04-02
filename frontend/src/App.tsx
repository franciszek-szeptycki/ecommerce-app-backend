import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HomeFeatured from './components/HomeFeatured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HomeFeatured />
      <Footer />
    </div>
  )
}

export default App
