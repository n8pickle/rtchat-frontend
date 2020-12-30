import { LoginPageContainer } from './area/login/LoginPageContainer';
import './App.css';
import { withStyles} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

function AppComponent({classes}) {
  return (
    <div className="App">
      <LoginPageContainer></LoginPageContainer>
    </div>
  );
}

const styles = {
  background: {
    backgroundSize: 'fit'
  }
}

export const App = withStyles(styles)(AppComponent);
