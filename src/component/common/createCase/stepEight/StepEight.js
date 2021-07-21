import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepEight.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';
import { Select } from '@material-ui/core';


class StepEight extends Component {
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
                        <span className="heading">Agency/Representative</span>
                    </div>
                                

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={300} selectorButtonHeight={104}
                                buttonName='Automated Assignment' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={235} selectorButtonHeight={104}
                                buttonName='Assign Agency' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={394} selectorButtonHeight={104}
                                buttonName='Assign Independant Representative' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                 
                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Select Agency</span>
                    </div>
                    <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeading">Select Agency</span>
                        <span className="input-fields1">
                            <InputField width={20} label='Select Agency' inputType='' inputIcon='' inputPlaceholder='Select Agency' />
                        </span>
                    </div>
                </div>
                
                <br />
                
                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className='subHeading' style={{marginLeft: '-55px'}}>Select Agency</span>
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={320} selectorButtonHeight={104}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                    <span className="subHeading"></span>
                        <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={320} selectorButtonHeight={104}
                                buttonName='Doler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeading"></span>
                         <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={320} selectorButtonHeight={104}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>
                <br />

                <div className="addPolicyDetailsBody">
                <div className="inputItem">
                        <span className="subHeading" style={{marginLeft: '-36px'}}>Email</span>
                        <span className="input-fields1">
                            <InputField width={20} label='Email' inputType='' inputIcon='' inputPlaceholder='Email' />
                        </span>
                    </div>
                    <div className="inputItem">
                        <span className="subHeading">Business phone</span>
                        <span className="input-fields1">
                            <InputField width={16} label='Business phone' inputType='' inputIcon='' inputPlaceholder='Business phone' />
                        </span>
                    </div>
                    <div className="inputItem">
                        <span className="subHeading">Mobile phone</span>
                        <span className="input-fields1">
                            <InputField width={10} label='Mobile phone' inputType='' inputIcon='' inputPlaceholder='Mobile phone' />
                        </span>
                    </div>
                    <div className="inputItem">
                        <span className="subHeading">Ext</span>
                        <span className="input-fields1">
                            <InputField width={6} label='Ext' inputType='' inputIcon='' inputPlaceholder='Ext' />
                        </span>
                    </div>
                </div> 
                <br />
                <br />
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

StepEight.propTypes = {

};

export default StepEight;