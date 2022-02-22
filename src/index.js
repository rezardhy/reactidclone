import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/Molecule/NavBar';
import Jumbotron from './components/Molecule/Jumbotron'
import Content from './components/Organism/Content'
import Kelas from './DummyData';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />  
    <Jumbotron />
    <Content>{Kelas}</Content>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
