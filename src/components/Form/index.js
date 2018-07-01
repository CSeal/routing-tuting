import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { login: ""};
	}
	render() {
		const { loginFormSubmitHandler } = this.props;
		return (<form style={{ border: '2px solid black', backgroundColor: 'grey' }} onSubmit={loginFormSubmitHandler}>
			<label>
				User Name <input name="login" type="text" onChange={this.setLoginInState} value={this.state.login} />
			</label><br/>
			<button type="submit" style={{ backgroundColor: 'blue', padding: 15 }}>Login</button>
		</form>)
	}

	setLoginInState = (ev) => {
		const value = ev.target.value;
		this.setState(prevState => ({ login: value }));
	}
} 