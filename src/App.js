import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
