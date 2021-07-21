import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepThree.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';


class StepThree extends Component {
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
                    <span className="headingThree">Add Insured Details</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">Insurance Name</span>
                        <span className="input-fields1">
                            <InputField width={20} label='Insurance Name' inputType='' inputIcon='' inputPlaceholder='Insurance Name' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Insured DBA`}</span>
                        <span className="input-fields1">

                            <InputField width={20} label='Insured DBA' inputType='' inputIcon='' inputPlaceholder='Insured DBA' />
                        </span>
                    </div>

                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                    <span className="headingThree">Insured Contact Info</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeadingThree">Email</span>
                        <span className="input-fields1">
                            <InputField width={15} label='Email' inputType='' inputIcon='' inputPlaceholder='Email' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Website`}</span>
                        <span className="input-fields1">

                            <InputField width={15} label='Website' inputType='' inputIcon='' inputPlaceholder='Website' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Business Phone`}</span>
                        <span className="input-fields1">

                            <InputField width={15} label='Business Phone' inputType='' inputIcon='' inputPlaceholder='Business Phone' />
                        </span>
                    </div>



                </div>
                <div className="addPolicyDetailsBody">

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Mobile Phone`}</span>
                        <span className="input-fields1">

                            <InputField width={15} label='Mobile Phone' inputType='' inputIcon='' inputPlaceholder='Mobile Phone' />
                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="subHeadingThree">  {`Ext`}</span>
                        <span className="input-fields1" style={{marginLeft:'-10rem'}}>

                            <InputField width={5} label='Ext' inputType='' inputIcon='' inputPlaceholder='Ext' />
                        </span>
                    </div>
                </div>
                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                    <span className="headingThree">Insured Address</span>
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

                <div className="mapThree">
                    <span className="subHeadingThree" style={{
                        position: 'absolute',
                        marginLeft: '-16.7rem',
                        marginTop: '-2.5rem',
                    }}>Preview on Map</span>
                </div>

            </div>
        );
    }
}

StepThree.propTypes = {

};

export default StepThree;