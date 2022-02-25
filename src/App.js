import Jumbotron from './components/Molecule/Jumbotron'
import Content from './components/Organism/Content'
import Kelas from './service/card';
import './App.css';
import TestingAxios from './service/testing';


function App() {
  return (
    <div className="App">

      <Jumbotron />
      <Content >{Kelas}</Content>
     
     

    </div>
  );
}

export default App;
{/* <ul>
{ TestingAxios().map((item, i) => <li key={i}>{item.title}</li>)}
</ul> */}