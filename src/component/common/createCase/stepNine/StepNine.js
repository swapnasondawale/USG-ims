import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepNine.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';
import { Select } from '@material-ui/core';


class StepNine extends Component {
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
                                <span className="heading"> Select Representative</span>
                            </div>
                        <div className="addPolicyDetailsBody">
                            <div style={{ 'paddingLeft': '46px' }}></div>
                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton 
                                    selectedButton={1}
                                    selectorButtonWidth={320} selectorButtonHeight={80}
                                        buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton
                                        selectorButtonWidth={320} selectorButtonHeight={80}
                                        buttonName='Doler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                                </span>
                            </div>

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton
                                        selectorButtonWidth={320} selectorButtonHeight={80}
                                        buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                                </span>
                            </div>
                        </div>
                        
                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={320} selectorButtonHeight={80}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={320} selectorButtonHeight={80}
                                buttonName='Doler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={320} selectorButtonHeight={80}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

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

StepNine.propTypes = {

};

export default StepNine;