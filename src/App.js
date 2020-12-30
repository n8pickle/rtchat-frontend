import { LoginPageContainer } from './area/login/LoginPageContainer';
import './App.css';
import { withStyles} from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function AppComponent({classes}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' />
          <Route path='/signin' component={LoginPageContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const styles = {
  background: {
    backgroundSize: 'fit'
  }
}

export const App = withStyles(styles)(AppComponent);
