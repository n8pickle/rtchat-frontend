import { Button, Paper, TextField, Typography } from "@material-ui/core"
import {withStyles} from '@material-ui/core/styles';

const LoginPageComponent = ({classes, signin, signinvalue, setsignin}) => {
	return (
		<Paper className={classes.paper}>
			<form>
				<div><Typography className={classes.title}>RTChat</Typography></div>
				<div>
					<TextField 
						required id="standard-required" 
						label="Login" 
						onChange={(e) =>{
								let value = {...signinvalue}
								value = {...signinvalue, UserName: e.target.value};
								setsignin(value);
							}
						}
					/>	
				</div>
				<div>
					<TextField
						id="standard-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						onChange={(e) => {
								let value = {...signinvalue}
								value = {...signinvalue, Password: e.target.value};
								setsignin(value);
							}	
						}
					/>
				</div>
				<div>
					<Button variant="contained" color="primary" className={classes.buttonMargin}>
						Sign Up
					</Button>
					<Button variant="contained" color="primary" className={classes.buttonMargin} onClick={(e) => signin(signinvalue) }>
						Log In
					</Button>
				</div>
			</form>
		</Paper>
	);
}

const styles = {
	title: {
		fontSize: '2em'
	},
	paper: {
		margin: 'auto',
		marginTop: '4em',
		marginBottom: '4em',
		maxWidth: '20em',
		minHeight: '15em',
		layout: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	buttonMargin: {
		margin: '3%'
	}
}

export const LoginPage = withStyles(styles)(LoginPageComponent);