import React from 'react';
import LoginComponent from './assets/LoginForm';
import CadastroComponent from './assets/CadastroForm';
import './App.css';

const App =() => {
    return (
      <div className="app-container">
      <h1 className="title">Login</h1> 
      <div className="form-container">
          <LoginComponent />
          <CadastroComponent /> 
      </div>
      <footer className="footer">
    <div className="footer-content">
      <p>Lucas Martinez Lopes</p>
      <p>RM553816</p>
    </div>
  </footer>
  </div>
  
    );
}

export default App;

