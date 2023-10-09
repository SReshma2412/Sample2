import { Header } from './components/Header';
import Navi from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div >
     <h1>Hello world</h1>
     <Header name="reshma" role="Trainer" />
     <Navi></Navi>
     <Footer color="green" shape="round"></Footer>
    </div>
  );
}

export default App;
