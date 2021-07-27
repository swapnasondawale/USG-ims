import React from 'react';
import { Carousel, ButtonComponent, InputField, SelectorBoxWithImage } from '../../../shared';
import { useHistory } from "react-router-dom";
import './Registration.css';
import LogoSvg from '../../../assets/images/logo.svg';
import SphareSvg from '../../../assets/images/Asset 3@3x.svg';
import CubeSvg from '../../../assets/images/cube.svg';
import BackgroundImage from '../../../assets/images/background.png';
import * as LoginActions from '../../../store/actions/LoginActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from '../../../store/store';
import { Grid } from '@material-ui/core';


function Registration() {

    const history = useHistory();
    const [representative, setRepresntative] = React.useState(0);
    const [agency, setAgency] = React.useState(0);
    const [company, setCompany] = React.useState(0);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');


    const [phoneNumber, setPhoneNumber] = React.useState('');


    const onSelectButton = (id) => {

        id == 'representative' ? setRepresntative(1) : setRepresntative(0);
        id == 'agency' ? setAgency(1) : setAgency(0);
        id == 'company' ? setCompany(1) : setCompany(0);
    }

    const navigateToCongratulation = () => {
        console.log('info reg', email, firstName);
        let data = JSON.stringify({
            "roleId": 1,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNumber": phoneNumber
        });

        store.dispatch(LoginActions.registerUser(data, history))

        // let config = {
        //     headers: {
        //               'Access-Control-Allow-Origin': '*',
        //               'Accept': 'application/json',
        //               'Content-Type': 'application/json',
        //               'Content-Length': data.length
        //         }
        //   }
        // axios.post('https://4anmeb9dke.execute-api.us-west-2.amazonaws.com/Prod/api/users', data, config )
        //   .then(function (response) {
        //     console.log(response);
        //     if(response.status === 200) {
        //         history.push('/congratulation')
        //     } else {
        //         alert('User already exist!')
        //     }
        //   })
        //   .catch(function (error) {
        //     alert('User already exist!')
        //     console.log(error);
        //   });

    }

    const navigateToLogin = () => {

        history.push('/');

    }

    const handleFirstName = (event) => {

        setFirstName(event.target.value);

    };

    const handleLastName = (event) => {

        setLastName(event.target.value);

    };

    const handleEmail = (event) => {

        setEmail(event.target.value);

    };

    const handlePassword = (event) => {

        setPassword(event.target.value);

    };

    const handleCPassword = (event) => {

        setConfirmPassword(event.target.value);

    };

    const handlePhoneNumber = (event) => {

        setPhoneNumber(event.target.value);

    };

    return (
        <Grid container className='register-main-container'>
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
            {/* <div><img src={CubeSvg} className="cube-icon-container" /></div> */}
            <div><img src={SphareSvg} className="sphare-icon-container" /></div> 
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
                                onClickFun={() => navigateToLogin()}
                                width={153}
                                border='1'
                                height={46}
                                borderColor='rgba(248,197,83,0.6)'
                                backgroudColor='rgba(248,197,83,0.1)'
                                value='Login'
                            />
                        </div>
                    </Grid>
                    <Grid item >
                        <div className="login-form" >
                            <span className="sub-text">Access best online insurence portal available.</span>
                        </div>
                    </Grid>
                    <Grid item className="registration-container ">
                        <span className="input-container-reg">
                            <InputField onChangeText={handleFirstName} inputValue={firstName} width={100} label='First Name' inputType='' inputIcon='user' inputPlaceholder='First Name' />
                        </span>
                        <span className="input-container-reg">
                            <InputField onChangeText={handleLastName} inputValue={lastName} width={100} label='Last Name' inputType='' inputIcon='user' inputPlaceholder='Last Name' />
                        </span>
                        <span className="input-container-reg">
                            <InputField onChangeText={handleEmail} inputValue={email} width={100} label='Email' inputType='' inputIcon='mail' inputPlaceholder='Email' />
                        </span>
                        <span className="input-container-reg">
                            <InputField onChangeText={handlePassword} inputValue={password} width={100} label='Password' inputType='password' inputIcon='' inputPlaceholder='Password' />
                        </span>
                        <span className="input-container-reg">
                            <InputField onChangeText={handleCPassword} inputValue={confirmPassword} width={100} label='Confirm Password' inputType='password' inputIcon='' inputPlaceholder='Confirm Password' />
                        </span>
                        <span className="input-container-reg">
                            <InputField onChangeText={handlePhoneNumber} inputValue={phoneNumber} width={100} label='Phone Number' inputType='' inputIcon='phone' inputPlaceholder='Phone Number' />
                        </span>
                    </Grid>
                    <Grid item className="select-role-container">
                        <span className="select-role-text">
                            Select Role
                        </span>
                        <div className="select-role-box">
                            <div className="selector">
                                <SelectorBoxWithImage tabIndex={1}
                                    buttonName='Field Representative' boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" iconName='representative' selectedButton={representative} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                                <SelectorBoxWithImage tabIndex={2} boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" buttonName='Inspection Agency' iconName='agency' selectedButton={agency} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                                <SelectorBoxWithImage tabIndex={3} boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" buttonName='Insurance Company' iconName='company' selectedButton={company} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                            </div>
                        </div>

                    </Grid>
                    <Grid item className="button-footer">
                        <div className='shadow-btn'>

                        </div>
                        <ButtonComponent
                            onClickFun={() => navigateToCongratulation()}
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

    return {
        LoginReducer: state.LoginReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)



