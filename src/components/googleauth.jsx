import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GoogleAuth(props) {
	const [loading, setLoading] = useState(false);

	const responseGoogle = async (e) => {
		setLoading(true);
		let UserData = {
			email: e.profileObj.email,
			name: e.profileObj.name,
			password: e.profileObj.googleId,
			avatar: e.profileObj.imageUrl,
		};
		await axios
			.post("https://newsapi-abipravi.herokuapp.com/auth", UserData)
			.then(
				(res) => {
					setLoading(false);
					console.log(res);
					localStorage.setItem("user", e.profileObj.email);
					localStorage.setItem("avatar", e.profileObj.imageUrl);
					localStorage.setItem("name", e.profileObj.name);
					window.location.reload();
				},
				(err) => {
					setLoading(false);
					toast.error(
						"User Does not Exists Please register or continue without Login"
					);
				}
			);
	};

	const Register = async (e) => {
		setLoading(true);
		let UserData = {
			email: e.profileObj.email,
			name: e.profileObj.name,
			password: e.profileObj.googleId,
			avatar: e.profileObj.imageUrl,
		};
		await axios
			.post(
				"https://newsapi-abipravi.herokuapp.com/auth/createuser/",
				UserData
			)
			.then(
				(res) => {
					setLoading(false);
					toast.success("User Created Sucessfully now you can login");
				},
				(err) => {
					setLoading(false);
					toast.info(
						"User Already Exists Click Login or use the App without login"
					);
					console.log(err);
				}
			);
		setLoading(false);
		localStorage.setItem("user", e.profileObj.email);
		localStorage.setItem("avatar", e.profileObj.imageUrl);
		localStorage.setItem("name", e.profileObj.name);
	};

	const loginlater = async () => {
		localStorage.setItem("user", "loginlater");
		localStorage.setItem(
			"avatar",
			"https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"
		);
		localStorage.setItem("name", "User");
		window.location.href = `${window.location.host}/home`;
		window.location.reload();
	};

	return (
		<>
			<div>
				{loading === false ? (
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								height: "100vh",
								width: "100%",
								justifyContent: "center",
								alignItems: "center",
								overflowX: "hidden",
							}}
						>
							<h4
								style={{
									margin: 10,
								}}
								className="alert alert-danger"
							>
								You Have Not Logged In please login with your
								google account here
							</h4>

							<GoogleLogin
								clientId={props.authid}
								onSuccess={Register}
								render={(renderProps) => (
									<button
										style={{
											marginTop: 20,
										}}
										className="btn btn-outline-primary"
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										Register to News App
									</button>
								)}
								theme="dark"
								icon="false"
								className="btn btn-outline-primary"
								buttonText="Register With Google Account"
								onFailure={Register}
							/>

							<GoogleLogin
								clientId={props.authid}
								onSuccess={responseGoogle}
								render={(renderProps) => (
									<button
										style={{
											marginTop: 20,
										}}
										className="btn btn-outline-primary"
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										Login 😜
									</button>
								)}
								theme="dark"
								icon="false"
								onFailure={responseGoogle}
							/>
							<button
								className="btn btn-outline-primary"
								style={{ marginTop: 20 }}
								onClick={loginlater}
							>
								Continue Without Login
							</button>
						</div>
						<div
							className="d-grid gap-3"
							style={{
								margin: 20,
								height: "100%",
								width: "50%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
							}}
						>
							<div class="form-floating mb-3">
								<input
									type="email"
									class="form-control"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">Email address</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="user name"
								/>
								<label for="floatingInput">Name</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="floatingInput"
									placeholder="password"
								/>
								<label for="floatingInput">Password</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="floatingInput"
									placeholder="password"
								/>
								<label for="floatingInput">Password</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="url"
									class="form-control"
									id="floatingInput"
									placeholder="https:www.avatar.com/useravatar"
								/>
								<label for="floatingInput">Avatar Image</label>
							</div>
							<button>Submit</button>
						</div>
					</div>
				) : (
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							padding: "100px",
						}}
					>
						<div
							className="spinner-border text-primary"
							role="status"
						>
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
