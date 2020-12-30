import { useState } from "react";
import { LoginPage } from "./LoginPage";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { ErrorBanner } from "../../components/error/ErrorBanner";

export const LoginPageContainer = () => {
	const [signIn, setSignIn] = useState({UserName: '', Password: ''});
	const [redirect, setRedirect] = useState(undefined);

	return (
		<div>
			{onRedirectDashboard(redirect)}
			<LoginPage signin={SignIn} signinvalue={signIn} setsignin={setSignIn} setredirect={setRedirect} ></LoginPage>
		</div>
	);
}

const onRedirectDashboard = (redirect) => {
	if(redirect) {
		return <Redirect push to='/' />;
	} else if(redirect != undefined) {
		return <ErrorBanner>The Username or Password entered was incorrect</ErrorBanner>;
	}
}

const SignIn = async (signIn, setRedirect) => {
		await axios({
			method: 'post',
			url: 'http://localhost:5000/api/Authentication/signin',
			data: signIn,
			withCredentials: true
		}).then((res) => {
			if(res.status == "200") {
				setRedirect(true);
			}
		}, [])
		.catch((err) => {
			console.log(err.status);
			setRedirect(false);
		});
}