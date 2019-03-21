import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { loginUser } from "../actions/authActions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookLogin from '../components/social/FacebookLogin';
import GoogleLogin from '../components/social/GoogleLogin';
// import LinkedinLogin from '../components/social/LinkedinLogin';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
		email:'',
		password:'',
        errors: {},
        emailError:'',
        passwordError:''
		};
		this.onSubmit = this.onSubmit.bind(this);
	  }
	 
	
	  componentDidMount() {
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push("/dashboard");
		}
	  }
	
	  componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
		  this.props.history.push("/dashboard");
		}
	  }

      validateLogin = () => {
        let isError = false;
        const errors = {
          emailError: "",
          passwordError: ""
        };
        if (this.state.email === "") {
          isError = true;
          errors.emailError = "Please select question first";
        }
        if (this.state.password === "") {
          isError = true;
          errors.passwordError = "This field may not be blank.";
        }
        this.setState({
          ...this.state,
          ...errors
        });
        return isError;
      };

	  onSubmit (e) {
		e.preventDefault();	  
		// const userData = {
		// email: this.state.email,
		// password: this.state.password,
    //     };	  
      this.validateLogin();  	  
	  };


  render() {
	const { email, password  } = this.state;
	const { errors,emailError,passwordError } = this.state;
	console.log("e");
	console.log(errors);
	console.log(errors.non_field_errors);
	console.log("e");
    return (
			<div className="login-container">
			<div className="login-content">
					<div className="login-form">
							<form onSubmit={this.onSubmit}>
									<fieldset>
											<TextField
													id="required1"
													label="Email"
													fullWidth
													margin="normal"
													onChange={e => this.setState({email: e.target.value})} value={email}
													error={emailError===""? false : true}
													helperText={errors.email}
											/>
											<TextField
													type="password"
													id="required2"
													label="Password"
													fullWidth
													margin="normal"
													onChange={e => this.setState({password: e.target.value})} value={password}
													error={passwordError===""? false : true}
													helperText={errors.password}
											/>						

											<TextField
												disabled
												InputProps={{
													disableUnderline: true,
												 }}
												  style = {{height: 10,fontWeight:400,marginBottom:20}}
													fullWidth
													error={errors.non_field_errors ===  undefined ? false : true}
													helperText={errors.non_field_errors }
											/>													

											<Button
                                            variant="contained"
											color="primary"
                                            type="submit"
                                            fullWidth
											>
											 Sign In
											</Button>
                                            
                    <p className="mb-20">or sign in with</p>
                    <Button mini variant="fab" className="mr-15 mb-20 text-white" >
                      <FacebookLogin />
                    </Button>
                    <Button mini variant="fab" className="mr-15 mb-20 text-white">
                    <GoogleLogin />
                    </Button>
					</fieldset>
				    </form>
					</div>
			</div>
			</div>
    );
  }
}


const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
  });
	
export default withRouter(connect(mapStateToProps,{ loginUser } )(Login));