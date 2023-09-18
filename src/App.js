import './App.css';
import Accrodian from './components/Accrodian';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import React, {useState} from 'react';

function App() {

  const [darkMode, setDarkMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const toggleMode = ()=>{
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = 'black';
      setModeText('Enable Light Mode')
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      setModeText('Enable Dark Mode')
    }
  }

  return (
    <>
      <Navbar title='RePractice' home='Home' link='Link' about='About' darkMode={darkMode} toggleMode={toggleMode} modeText={modeText} />
      <Alert/>
      <Textutils heading='Enter Your Text Here' darkMode={darkMode} />
      <Accrodian/>
    </>
  );
}

export default App;
