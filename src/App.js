import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login.js'
import Footer from './components/Footer/Footer.js'
import Main from './components/Main/Main.js'
import Register from './components/Register/Register.js'
import AddAlbum from './components/AddAlbum/AddAlbum.js'
import { auth } from './utils/firebase'
import { Route, Switch, Redirect } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';
import { useEffect, useState } from 'react';

function App() {
  const[user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);
  return (
    <div className="site">
      <Header email={user?.email} isAuthenticated={Boolean(user)}/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/add-album" exact component={AddAlbum} />
        <Route path="/logout" render={props => {
          auth.signOut()
          return <Redirect to='/' />
        }} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
