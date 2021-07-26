import React from 'react';
import { Carousel, ButtonComponent, InputField } from '../../../shared';
import { useHistory } from "react-router-dom";
import './Login.css';
import LogoSvg from '../../../assets/images/logo.svg';
import SphareSvg from '../../../assets/images/Asset 3@3x.svg';
import CubeSvg from '../../../assets/images/cube.svg';
import BackgroundImage from '../../../assets/images/background.png';
import * as LoginActions from '../../../store/actions/LoginActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from '../../../store/store';
import { Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

function Login() {
    const history = useHistory();
    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');
    const navigateToRegistation = () => {

        history.push('/registration');

    }

    const navigateToDashboard = () => {
        let data = {
            "email": email,
            "password": password
        }

        store.dispatch(LoginActions.getLogin(data, history))

        // axios.post('https://4anmeb9dke.execute-api.us-west-2.amazonaws.com/Prod/api/login', {
        //     "email": email,
        //     "password": password
        // }, config)
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.status === 200) {
        //             history.push('/dashboard');
        //         } else {
        //             alert('Please check login credentials!')

        //         }

        //     })
        //     .catch(function (error) {
        //         alert('Please check login credentials!');
        //         console.log(error);
        //     });

    }

    const handleEmail = (event) => {

        setEmail(event.target.value);

    };

    const handlePassword = (event) => {

        setPassword(event.target.value);

    };

    return (
        <Grid container className="main-container">
            <Grid item xs={6} container className="sub-main_containerOne">
                <div className='inner-one'>
                    <div className="head-container">
                        <h1>hello</h1>
                        <h3>hello</h3>
                        <h6>hello</h6>
                    </div>
                    <div className="carousel-container">
                        <Carousel
                            height='auto'
                        />
                    </div>
                </div>
            </Grid>
            <div><img src={CubeSvg} className="icon-cube" /></div>
            <div><img src={SphareSvg} className="icon-sphare" /></div> 
            <Grid item xs={6} container className="sub-main-containerTwo">
                <div className="inner-two">
                    <Grid item className="logo-container">
                        <img src={LogoSvg} className="logo-login" />
                    </Grid>
                    <Grid item className="welcome-container">
                        <span className="head-title">Welcome!</span>
                        <div className="header-register">
                            <span className="normal-text">Not a member?</span>
                            <ButtonComponent
                                onClickFun={() => navigateToRegistation()}
                                width={153}
                                border='1'
                                height={46}
                                borderColor='rgba(248,197,83,0.6)'
                                backgroudColor='rgba(248,197,83,0.1)'
                                value='Register Now'
                            />
                        </div>
                    </Grid>
                    <Grid item >
                        <div className="login-form" >
                            <span className="sub-text">Access best online insurence portal available.</span>
                        </div>
                    </Grid>
                    <Grid item className="login-container">
                        {/* <div className="login-form" >
                            <span className="sub-text">Access best online insurence portal available.</span>
                        </div> */}
                        <span className="input-container">
                            <InputField onChangeText={handleEmail} inputValue={email} width={95} label='Email' inputType='' inputIcon='mail' inputPlaceholder='Email' />
                        </span>
                        <span className="input-container">
                            <InputField onChangeText={handlePassword} inputValue={password} fullWidth width={95} label='Password' inputType='password' inputIcon='password' inputPlaceholder='Password' />
                        </span>
                    </Grid>
                    <Grid item className="button-footer">
                        <div className='shadow-btn'>

                        </div>
                        <ButtonComponent
                            onClickFun={() => navigateToDashboard()}
                            width={270}
                            border='1'
                            height={60}
                            fontSize={20}
                            borderColor='rgba(255,236,192,0.79)'
                            backgroudColor='#F8C553'
                            value='Login'
                            borderShadow={`0 2px 0 0 rgba(255,236,192,0.79)`}
                        />
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        LoginActions: bindActionCreators(LoginActions, dispatch)
    }
}


function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        LoginReducer: state.LoginReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

