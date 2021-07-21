import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepSix.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';


class StepSix extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
                <div>
                                <div className="addPolicyDetailsHeader">
                                    <span className="heading">Review Requirements</span>
                                </div>
                                

                                <div className="addPolicyDetailsBody">
                                <div className="inputItem">
                                        <span className="subHeading">Special Attension</span>
                                        <span className="input-fields1">
                                            <InputField width={46} multiline={true} rows={6} label='Special Attention' inputType='' inputIcon='' inputPlaceholder='Special Attension' />
                                        </span>
                                    </div>

                                

                                </div>
                                <br />
                                <br />
                 
                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Billing Type</span>
                    </div>
                

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={179} selectorButtonHeight={104}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={148} selectorButtonHeight={104}
                                buttonName='Deler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={166} selectorButtonHeight={104}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>

                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={129} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                        <span className="heading">Form Type</span>
                    </div>
                

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={166} selectorButtonHeight={104}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={151} selectorButtonHeight={104}
                                buttonName='Deler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={179} selectorButtonHeight={104}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>

                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={146} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={174} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={209} selectorButtonHeight={104}
                                buttonName='+ Add New Form' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>
             <br />
             <br />   
             <br />
             <br /> 
             <br />
             <br />      
            </div>

            );
    }
}

StepSix.propTypes = {

};

export default StepSix;