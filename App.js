
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Home } from './component/Home';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Header } from './component/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { NotFound } from './component/NotFound';
import { AddUser } from './component/users/AddUser';
import { EditUser } from './component/users/EditUser';
import { View } from './component/users/View';



function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/about'component={About}/>
        <Route exact path='/contact'component={Contact}/>
        <Route exact path='/users/add'component={AddUser}/>
        <Route exact path="/users/edit/:id"component={EditUser}/>
        <Route exact path="/users/:id" component={View}/>
        <Route component={NotFound}/> 
      </Switch>
      </div>
    </Router>

  );
}

export default App;
