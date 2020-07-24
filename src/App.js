import React from 'react';
import Search from './components/Search'
import './App.scss'

function App() {
  return (
    <div className='app-container'>
      <img src={require('./static/images/nearsoft_logo.png')} />
      <Search />
    </div>
  );
}

export default App;
