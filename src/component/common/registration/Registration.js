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
        <div className="main-container">
            <div className="black-image1"> </div>
            {/* <div className="background-image">
      
        <img src={BackgroundImage} width='100%'
    height= '100%'></img>
    
      </div> */}
            <div className="page-container">
                <div><img src={SphareSvg} className="sphare-icon" /></div>

                <div className="login-carousel-card">
                    <div className="card-carousel">

                        <Carousel />

                    </div>
                </div>
                <div><img src={CubeSvg} className="cube-icon" /></div>

                <div className="reg-card">
                    <div><img src={LogoSvg} className="logo-login" /></div>
                    <div className="login-header-reg">
                        <span className="title"></span>
                        <div>
                            <span className="normal-text">Already a member?</span>
                            <ButtonComponent
                                onClickFun={() => navigateToLogin()}
                                width={153}
                                height={46}
                                border='1'
                                borderColor='rgba(248,197,83,0.6)'
                                backgroudColor='rgba(248,197,83,0.1)'
                                value='Login'
                            />
                        </div>
                    </div>
                    <div className="login-body-reg">
                        {/* <span className="normal-text">Access best online insurence portal available.</span> */}
                        <span className="input-fields">
                            <InputField onChangeText={handleFirstName} inputValue={firstName} width={43} label='First Name' inputType='' inputIcon='user' inputPlaceholder='First Name' />
                        </span>
                        <span className="input-fields">
                            <InputField onChangeText={handleLastName} inputValue={lastName} width={43} label='Last Name' inputType='' inputIcon='user' inputPlaceholder='Last Name' />
                        </span>
                        <span className="input-fields">
                            <InputField onChangeText={handleEmail} inputValue={email} width={43} label='Email' inputType='' inputIcon='mail' inputPlaceholder='Email' />
                        </span>
                        <span className="input-fields">
                            <InputField onChangeText={handlePassword} inputValue={password} width={43} label='Password' inputType='password' inputIcon='' inputPlaceholder='Password' />
                        </span>
                        <span className="input-fields">
                            <InputField onChangeText={handleCPassword} inputValue={confirmPassword} width={43} label='Confirm Password' inputType='password' inputIcon='' inputPlaceholder='Confirm Password' />
                        </span>
                        <span className="input-fields">
                            <InputField onChangeText={handlePhoneNumber} inputValue={phoneNumber} width={43} label='Phone Number' inputType='' inputIcon='phone' inputPlaceholder='Phone Number' />
                        </span>
                        <span className="normal-text">
                            Select Role
                        </span>
                        <div className="wrapper">
                            <div className="selector">
                                <SelectorBoxWithImage tabIndex={1}
                                    buttonName='Field Representative' boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" iconName='representative' selectedButton={representative} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                                <SelectorBoxWithImage tabIndex={2} boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" buttonName='Inspection Agency' iconName='agency' selectedButton={agency} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                            </div>
                            <div className="selector">
                                <SelectorBoxWithImage tabIndex={3} boxShadow="inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)" buttonName='Insurance Company' iconName='company' selectedButton={company} borderColor={'#43A1F6'} backgroundColor='rgba(228,230,234,0.2)' />
                            </div>

                        </div>

                    </div>

                    <div className="login-footer-reg">
                        <div className="button-shadow-reg">

                        </div>
                        <ButtonComponent
                            onClickFun={() => navigateToCongratulation()}
                            width={270}
                            border='1'
                            height={60}
                            fontSize={20}
                            borderColor='rgba(255,236,192,0.79)'
                            backgroudColor='#F8C553'
                            value='Register Now'
                            borderShadow={`0 2px 0 0 rgba(255,236,192,0.79)`}
                        />
                    </div>

                </div>
            </div>
        </div>
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



