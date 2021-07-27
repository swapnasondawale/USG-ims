import React from 'react';
import { Carousel, ButtonComponent, SelectorButton } from '../../../shared';
import './Congratulation.css';
import { useHistory } from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LogoSvg from '../../../assets/images/logo.svg';
import SphareSvg from '../../../assets/images/Asset 3@3x.svg';
import CubeSvg from '../../../assets/images/cube.svg';
import BackgroundImage from '../../../assets/images/background.png'
import { Grid } from '@material-ui/core';



export default function Congratulation() {

    const history = useHistory();

    const navigateToLogin = () => {

        history.push('/');

    }

    return (
        // <div className="main-container">
        //     <div className="black-image1"> </div>
        //     <div className="background-image">
        //         <img src={BackgroundImage} width='100%'
        //             height='100%'></img>
        //     </div>
        //     <div className="page-container">
        //         <div><img src={SphareSvg} className="sphare-icon" /></div>
        //         <div className="login-carousel-card">
        //             <div className="card-carousel">
        //                 <Carousel />
        //             </div>
        //         </div>
        //         <div><img src={CubeSvg} className="cube-icon" /></div>
        //         <div className="reg-card1">
        //             <div><img src={LogoSvg} className="logo-login" /></div>
        //             <div className="login-header-cong">
        //                 <span className="title">Congratulations!</span>
        //                 <div>
        //                     <span className="normal-text">Already a member?</span>
        // <ButtonComponent
        //     width={153}
        //     height={46}
        //     borderColor='rgba(248,197,83,0.6)'
        //     backgroudColor='rgba(248,197,83,0.1)'
        //     value='Login'
        // />
        //                 </div>
        //             </div>
        //             <div className="login-body-cong">
        // <br />
        // <br />
        // <div className="normal-text-cong">Hey,</div>
        // <div className="normal-text-cong">Welcome onboard.</div>
        // <br />
        // <div className="normal-text-cong">We have sent your login credentials on the registred email</div>
        // <div className="normal-text-cong">address.</div>
        // <br />
        // <div className="normal-text-cong">Before you begin, you may go through the following guide</div>
        // <div className="normal-text-cong">documents and media.</div>
        // <span className="normal-text">Access best online insurence portal available.</span>
        // <br />
        // <br />
        // <div className="wrapper">
        //     <div className="selector">
        //         <div className="list1">
        //             <AssignmentIcon className="icon-class" fontSize="large" />
        //             <div className="text-class1">List of documents required for Registration</div>
        //         </div>
        //     </div>
        //     <div className="selector">
        //         <div className="list1">
        //             <AssignmentIcon className="icon-class" fontSize="large" />
        //             <div className="text-class">Some other document name</div>
        //         </div>
        //     </div>
        //     <div className="selector">
        //         <div className="list1">
        //             <VideoLibraryIcon className="icon-class" fontSize="large" />
        //             <div className="text-class">Explanatory Walkthrough Video</div>
        //         </div>
        //     </div>
        // </div>
        //             </div>
        //             <div className="login-footer-cong">
        //                 <div className="button-shadow-cong">

        //                 </div>
        // <ButtonComponent
        //     onClickFun={() => navigateToLogin()}
        //     width={270}
        //     border='1'
        //     height={60}
        //     fontSize={20}
        //     borderColor='rgba(255,236,192,0.79)'
        //     backgroudColor='#F8C553'
        //     value='Continue to Login'
        //     borderShadow={`0 2px 0 0 rgba(255,236,192,0.79)`}
        // />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Grid container className="main-congrate-container" >
            <Grid item xs={6} container className="sub-congrate_containerOne">
                <div className='inner-one-congrate'>
                    <div className="head-cogrates-container">
                        <h1>hello</h1>
                        <h3>hello</h3>
                        <h6>hello</h6>
                    </div>
                    <div className="carousel-congrates-container">
                        <Carousel
                            height='auto'
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} container className="sub-congrates-containerTwo">
                <div className="inner-congrate-two">
                    <Grid item className="logo-container">
                        <img src={LogoSvg} className="logo-congrates" />
                    </Grid>
                    <Grid item className="congrates-container">
                        <span className="congrates-title">Congratulations!</span>
                        <div className="header-register">
                            <span className="normal-text">Not a member?</span>
                            <ButtonComponent
                                width={153}
                                height={46}
                                borderColor='rgba(248,197,83,0.6)'
                                backgroudColor='rgba(248,197,83,0.1)'
                                value='Login'
                            />
                        </div>
                    </Grid>
                    <Grid item className="congrates-text">
                        <br />
                        <br />
                        <div className="congrates-normal-text">Hey,</div>
                        <div className="congrates-normal-text">Welcome onboard.</div>
                        <br />
                        <div className="congrates-normal-text">We have sent your login credentials on the registred email</div>
                        <div className="congrates-normal-text">address.</div>
                        <br />
                        <div className="congrates-normal-text">Before you begin, you may go through the following guide</div>
                        <div className="congrates-normal-text">documents and media.</div>
                        <br />
                        <span className="congrates-normal-text">Access best online insurence portal available.</span>
                        <br />
                        <br />
                    </Grid>
                    <Grid item className="congrates-list-container">
                        <div className="congrates-wrapper">
                            <div className="congrate-selector">
                                <div className="congrates-list1">
                                    <AssignmentIcon className="congrates-icon-class" fontSize="large" />
                                    <div className="congrates-text-class">List of documents required for Registration</div>
                                </div>
                            </div>
                            <div className="congrate-selector">
                                <div className="congrates-list1">
                                    <AssignmentIcon className="congrates-icon-class" fontSize="large" />
                                    <div className="congrates-text-class">Some other document name</div>
                                </div>
                            </div>
                            <div className="congrate-selector">
                                <div className="congrates-list1">
                                    <VideoLibraryIcon className="congrates-icon-class" fontSize="large" />
                                    <div className="congrates-text-class">Explanatory Walkthrough Video</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="button-footer">
                        <div className='shadow-btn'>

                        </div>
                        <ButtonComponent
                            onClickFun={() => navigateToLogin()}
                            width={270}
                            border='1'
                            height={60}
                            fontSize={20}
                            borderColor='rgba(255,236,192,0.79)'
                            backgroudColor='#F8C553'
                            value='Continue to Login'
                            borderShadow={`0 2px 0 0 rgba(255,236,192,0.79)`}
                        />
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}
