import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepFour.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';


class StepFour extends Component {
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
                    <span className="headingStepFour">Add Business and Contact Details </span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeading" style={{marginLeft:'-18px'}}>Business ID</span>
                        <span className="input-fields1">
                            <InputField width={15} label='Business ID' inputType='' inputIcon='' inputPlaceholder='Business ID' />
                        </span>
                    </div>

                </div>

                <div className="addPolicyDetailsHeader">
                    
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeading" style={{marginLeft:'8px'}}>Business Description</span>
                        <span className="input-fields1">
                            <InputField width={46} multiline={true} rows={6} label='Multiline' inputType='' inputIcon='' inputPlaceholder='Business Description' />
                        </span>
                    </div>

                </div>
                <br />
                <br />
                
                <div className="addPolicyDetailsHeader">
                    <span className="headingStepFour">Insured Contact </span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeading" style={{marginLeft:'-11px'}}>Contact Name</span>
                        <span className="input-fields1">
                            <InputField width={20} label='Contact Name' inputType='' inputIcon='' inputPlaceholder='Contact Name' />
                        </span>
                    </div>
                </div>
                <div className="addPolicyDetailsBody">
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
                
        </div>
        );
    }
}

StepFour.propTypes = {

};

export default StepFour;