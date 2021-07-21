import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepFive.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';


class StepFive extends Component {
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
                    <span className="headingThree">Add Order Details</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">Case Priority</span>

                        <span className="input-fields-selector">
                            <SelectorButton selectorButtonWidth={235} selectorButtonHeight={135} subHeading={'14 Days / $5'}
                                buttonName='Normal' iconName='flash' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree"></span>

                        <span className="input-fields-selector">

                            <SelectorButton
                                selectedButton={1}
                                selectorButtonWidth={235} selectorButtonHeight={132}
                                buttonName='Very High' border='0.8px solid' subHeading={'3 Days / $15'} boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='flashVeryHigh' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree"></span>

                        <span className="input-fields-selector">

                            <SelectorButton
                                selectorButtonWidth={235} selectorButtonHeight={132} subHeading={'3 Days / $15'}
                                buttonName='High' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='flashHigh' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                    <span className="headingThree">Inspection Address</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">Street Address</span>
                        <span className="input-fields1">
                            <InputField width={34} label='Street Address' inputType='' inputIcon='' inputPlaceholder='Street Address' />
                        </span>
                    </div>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">US Zip</span>
                        <span className="input-fields1">
                            <InputField width={15} label='US Zip' inputType='' inputIcon='' inputPlaceholder='US Zip' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`City`}</span>
                        <span className="input-fields1">

                            <InputField width={15} label='City' inputType='' inputIcon='' inputPlaceholder='City' />
                        </span>
                    </div>


                </div>


                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">State</span>
                        <span className="input-fields1">
                            <InputField width={15} label='State' inputType='' inputIcon='' inputPlaceholder='State' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Country`}</span>
                        <span className="input-fields1">

                            <InputField width={15} label='Country' inputType='' inputIcon='' inputPlaceholder='Country' />
                        </span>
                    </div>


                </div>
                <div style={{ marginBottom: '15rem' }}></div>
                <div className="mapFive">
                    <span className="subHeadingThree" style={{
                        position: 'absolute',
                        left: '-4.2rem',
                        top: '-2.5rem',
                    }}>Preview on Map</span>
                </div>

            </div>
        );
    }
}

StepFive.propTypes = {

};

export default StepFive;