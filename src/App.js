import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login.js'
import Footer from './components/Footer/Footer.js'
import Main from './components/Main/Main.js'
import Register from './components/Register/Register.js'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="site">
      <Header />
        <Switch>
        <Route path="/" exact component={Main}/>
           <Route path="/login" exact component={Login}/>
           <Route path="/register" exact component={Register}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
