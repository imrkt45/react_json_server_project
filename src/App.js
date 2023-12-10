import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './components/Home';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    
    <Switch>
      <Route exact path="/" component={SigninPage}/>
      <Route  path="/SignupPage" component={SignupPage}/>
      <Route  path="/Home" component={Home}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
// local storage,  private route,  authentication flow, 