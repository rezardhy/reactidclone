import Jumbotron from './components/Molecule/Jumbotron'
import Content from './components/Organism/Content'
import Kelas from './service/card';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Jumbotron />
      <Content>{Kelas}</Content>

    </div>
  );
}

export default App;
