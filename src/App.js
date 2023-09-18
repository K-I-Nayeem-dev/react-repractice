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

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      typ : type,
    })

    setTimeout(setAlert, 2000);
    
  }


  return (
    <>
      <Navbar title='RePractice' home='Home' link='Link' about='About' darkMode={darkMode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <Textutils heading='Enter Your Text Here' darkMode={darkMode} showAlert={showAlert} />
      <Accrodian/>
    </>
  );
}

export default App;
