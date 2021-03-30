import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login.js'
import Footer from './components/Footer/Footer.js'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
        <Route path="/login" component={Login} exact/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
