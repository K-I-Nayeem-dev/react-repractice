import './App.css';
import Accrodian from './components/Accrodian';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import Links from './components/Links';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [darkMode, setDarkMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const toggleMode = ()=>{
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = 'black';
      setModeText('Enable Light Mode');
      document.title = 'TextUtils - Dark Mode'; 
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
      showAlert('Dark Mode Enable', 'success');
    }

    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      setModeText('Enable Dark Mode');
      document.title = 'TextUtils - Light Mode';
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 500);
      showAlert('Light Mode Enable', 'success');
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

  <Router>
    <Navbar title='RePractice' home='Home' link='Link' about='About' darkMode={darkMode} toggleMode={toggleMode} modeText={modeText} showAlert={showAlert} />
    <Alert alert={alert} />
      <Routes>
          <Route exact path="/" element={<>
          <Textutils heading='Enter Your Text Here' darkMode={darkMode} showAlert={showAlert} /><Links darkMode={darkMode}/></>}/>
          <Route exact path="/about" element={<Accrodian darkMode={darkMode}/>} />
          {/* <Route exact path="/links" element={<Links/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
