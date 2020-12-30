import { useState } from "react";
import { LoginPage } from "./LoginPage";
import axios from "axios";

export const LoginPageContainer = () => {
	const [signIn, setSignIn] = useState({UserName: '', Password: ''});

	return (
		<LoginPage signin={SignIn} signinvalue={signIn} setsignin={setSignIn} ></LoginPage>
	);
}

const SignIn = async (signIn) => {
		await axios({
			method: 'post',
			url: 'http://localhost:5000/api/Authentication/signin',
			data: signIn,
			withCredentials: true
		}).then((res) => {
			if(res.status == "200") {
				
			}
		}, [])
		.catch((err) => {
			console.log(err.status);
		});
}