import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null), 1500)
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#031f3a"
      showAlert("Dark theme has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Theme has been enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
