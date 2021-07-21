import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepTwo.css';
import { ButtonComponent, InputField, MaterialCard, SelectorBoxWithImage, SelectorButton } from '../../../../shared';
import * as CreateCaseActions from '../../../../store/actions/CreateCaseActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from '../../../../store/store';

class StepTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {

            selectedCasePriority: '',
            selectedBillType: '',
            selectedFormType: '',
            policyTypeList: [{
                buttonName: 'General Liability',
                buttonWidth: '179',
                buttonHeight: '104',
                buttonIcon: ''
            },
            {
                buttonName: 'Property',
                buttonWidth: '179',
                buttonHeight: '104',
                buttonIcon: ''

            },
            {
                buttonName: 'Garage Liability',
                buttonWidth: '179',
                buttonHeight: '104',
                buttonIcon: ''

            },
            {
                buttonName: 'Liquor Liability',
                buttonWidth: '179',
                buttonHeight: '104',
                buttonIcon: ''

            },
            {
                buttonName: 'Inland Marine',
                buttonWidth: '179',
                buttonHeight: '104',
                buttonIcon: ''

            }],
            billTypeList: [],
            formTypeList: [],
            insuredName: '',
            insuredDBA: '',
            insuredEmail: '',
            insuredWebsite: '',
            insuredBusinessPhone: '',
            insuredMobilePhone: '',
            insuredExt: 0,
            pointOfContactEmail: '',
            pointOfContactWebsite: '',
            pointOfContactBusinessPhone: '',
            pointOfContactMobilePhone: '',
            pointOfContactExt: 0,
            insuredStreetAddress: '',
            insuredUSZip: '',
            insuredCity: '',
            insuredState: '',
            insuredCountry: '',
            inspectionStreetAddress: '',
            inspectionUSZip: '',
            inspectionCity: '',
            inspectionState: '',
            inspectionCountry: '',
            businessDetailsID: '',
            businessDetailsDescription: '',
            specialAttention: '',
            setCreateCaseData: {}
        }

    }

    componentDidMount() {

        const token = this.props.LoginReducer.loginData.data;
        console.log('token value', token);
        store.dispatch(CreateCaseActions.getBillType(token));
        store.dispatch(CreateCaseActions.getFormType(token));
        this.setState({ setCreateCaseData: this.props.CreateCaseReducer.setCreateCaseData })
        console.log('setcreatecasedata', this.props.CreateCaseReducer.setCreateCaseData);

    }

    componentDidUpdate(prevProps, nextProps) {

        if (nextProps.selectedFormType !== this.state.selectedFormType) {
            console.log('here updated');
            this.setState({
                setCreateCaseData: {
                    ...this.state.setCreateCaseData,
                    "Insureds": {
                        "InsuredName": this.state.insuredName,
                        "InsuredDBA": this.state.insuredDBA,
                        "PriorityId": this.state.selectedCasePriority,
                        "BusinessId": this.state.businessDetailsID,
                        "BusinessDescription": this.state.businessDetailsDescription,
                        "SpecialAttention": this.state.specialAttention,
                        "BillingTypeId": this.state.selectedBillType,
                        "FormTypeId": this.state.selectedFormType,
                        "Correspondences": [
                            {
                                "CorrespondenceTypeId": 1,
                                "Email": this.state.insuredEmail,
                                "Website": this.state.insuredWebsite,
                                "Mobile": this.state.insuredMobilePhone,
                                "Business": this.state.insuredBusinessPhone,
                                "Ext": this.state.insuredExt,
                                "ContactName": this.state.insuredName
                            },
                            {
                                "CorrespondenceTypeId": 2,
                                "Email": this.state.pointOfContactEmail,
                                "Website": this.state.pointOfContactWebsite,
                                "Mobile": this.state.pointOfContactMobilePhone,
                                "Business": this.state.pointOfContactBusinessPhone,
                                "Ext": this.state.pointOfContactExt,
                                "ContactName": this.state.insuredName
                            }
                        ],
                        "Addresses": [
                            {
                                "AddressTypeId": 1,
                                "Street": this.state.insuredStreetAddress,
                                "Zip": this.state.insuredUSZip,
                                "City": this.state.insuredCity,
                                "State": this.state.insuredState,
                                "Country": this.state.insuredCountry,
                                "Lat": '19.43224',
                                "Long": '19.43224'
                            },
                            {
                                "AddressTypeId": 2,
                                "Street": this.state.inspectionStreetAddress,
                                "Zip": this.state.inspectionUSZip,
                                "City": this.state.inspectionCity,
                                "State": this.state.inspectionState,
                                "Country": this.state.inspectionCountry,
                                "Lat": '19.43224',
                                "Long": '19.43224'
                            }
                        ]
                    }

                }
            }, () => {
                store.dispatch(CreateCaseActions.setCreateCaseData(this.state.setCreateCaseData))
            })

        }

        if (prevProps.CreateCaseReducer.billTypeList != this.props.CreateCaseReducer.billTypeList) {
            this.setState({ billTypeList: this.props.CreateCaseReducer.billTypeList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.formTypeList != this.props.CreateCaseReducer.formTypeList) {
            this.setState({ formTypeList: this.props.CreateCaseReducer.formTypeList.data.responseList })
        }

    }



    render() {
        return (
            <div>
                <div className="addPolicyDetailsHeader">
                    <span className="main-heading">Insured Details</span>

                </div>
                <br />
                <div className="gray-background">

                    <div className="addPolicyDetailsHeader">
                        <span className="headingThree">Insured Details</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">Insurance Name</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ insuredName: e.target.value })} width={20} label='Insurance Name' inputType='' inputIcon='' inputPlaceholder='Insurance Name' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Insured DBA`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredDBA: e.target.value })} width={20} label='Insured DBA' inputType='' inputIcon='' inputPlaceholder='Insured DBA' />
                            </span>
                        </div>

                    </div>

                    <br />
                    <br />

                    <div className="addPolicyDetailsHeader">
                        <span className="headingThree">Insured Correspondence</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">Email</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ insuredEmail: e.target.value })} width={15} label='Email' inputType='' inputIcon='' inputPlaceholder='Email' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Website`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredWebsite: e.target.value })} width={15} label='Website' inputType='' inputIcon='' inputPlaceholder='Website' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Business Phone`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredBusinessPhone: e.target.value })} width={15} label='Business Phone' inputType='' inputIcon='' inputPlaceholder='Business Phone' />
                            </span>
                        </div>



                    </div>
                    <div className="addPolicyDetailsBody">

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Mobile Phone`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredMobilePhone: e.target.value })} width={15} label='Mobile Phone' inputType='' inputIcon='' inputPlaceholder='Mobile Phone' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Ext`}</span>
                            <span className="input-fields1" style={{ marginLeft: '-10rem' }}>

                                <InputField onChangeText={(e) => this.setState({ insuredExt: Number(e.target.value) })} width={5} label='Ext' inputType='number' inputIcon='' inputPlaceholder='Ext' />
                            </span>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="addPolicyDetailsHeader">
                        <span className="headingThree">Point of Contact</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">Email</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ pointOfContactEmail: e.target.value })} width={15} label='Email' inputType='' inputIcon='' inputPlaceholder='Email' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Website`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ pointOfContactWebsite: e.target.value })} width={15} label='Website' inputType='' inputIcon='' inputPlaceholder='Website' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Business Phone`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ pointOfContactBusinessPhone: e.target.value })} width={15} label='Business Phone' inputType='' inputIcon='' inputPlaceholder='Business Phone' />
                            </span>
                        </div>



                    </div>
                    <div className="addPolicyDetailsBody">

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Mobile Phone`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ pointOfContactMobilePhone: e.target.value })} width={15} label='Mobile Phone' inputType='' inputIcon='' inputPlaceholder='Mobile Phone' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Ext`}</span>
                            <span className="input-fields1" style={{ marginLeft: '-10rem' }}>

                                <InputField onChangeText={(e) => this.setState({ pointOfContactExt: Number(e.target.value) })} width={5} label='Ext' inputType='number' inputIcon='' inputPlaceholder='Ext' />
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
                                <InputField onChangeText={(e) => this.setState({ insuredStreetAddress: e.target.value })} width={34} label='Street Address' inputType='' inputIcon='' inputPlaceholder='Street Address' />
                            </span>
                        </div>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">US Zip</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ insuredUSZip: e.target.value })} width={15} label='US Zip' inputType='' inputIcon='' inputPlaceholder='US Zip' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`City`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredCity: e.target.value })} width={15} label='City' inputType='' inputIcon='' inputPlaceholder='City' />
                            </span>
                        </div>


                    </div>


                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">State</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ insuredState: e.target.value })} width={15} label='State' inputType='' inputIcon='' inputPlaceholder='State' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Country`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ insuredCountry: e.target.value })} width={15} label='Country' inputType='' inputIcon='' inputPlaceholder='Country' />
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
                    <br />
                    <br />

                    <div className="addPolicyDetailsHeader">
                        <span className="headingThree">Inspection Address</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">Street Address</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ inspectionStreetAddress: e.target.value })} width={34} label='Street Address' inputType='' inputIcon='' inputPlaceholder='Street Address' />
                            </span>
                        </div>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">US Zip</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ inspectionUSZip: e.target.value })} width={15} label='US Zip' inputType='' inputIcon='' inputPlaceholder='US Zip' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`City`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ inspectionCity: e.target.value })} width={15} label='City' inputType='' inputIcon='' inputPlaceholder='City' />
                            </span>
                        </div>


                    </div>


                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeadingThree">State</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ inspectionState: e.target.value })} width={15} label='State' inputType='' inputIcon='' inputPlaceholder='State' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeadingThree">  {`Country`}</span>
                            <span className="input-fields1">

                                <InputField onChangeText={(e) => this.setState({ inspectionCountry: e.target.value })} width={15} label='Country' inputType='' inputIcon='' inputPlaceholder='Country' />
                            </span>
                        </div>


                    </div>

                    <div className="mapFour">
                        <span className="subHeadingThree" style={{
                            position: 'absolute',
                            marginLeft: '-16.7rem',
                            marginTop: '-2.5rem',
                        }}>Preview on Map</span>
                    </div>
                    <br />
                    <br />

                </div>

                <div className="addPolicyDetailsHeader">
                    <span className="headingThree">Case Priority</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        {/* <span className="subHeadingThree">Case Priority</span> */}
                        {/* <span className="subHeadingThree"></span> */}

                        <span className="input-fields-selector">
                            <SelectorBoxWithImage selectorButtonWidth={235} selectorButtonHeight={92} subHeading={'14 Days / $5'} id={1} selectClick={() => { this.setState({ selectedCasePriority: 1 }) }} selectedButton={this.state.selectedCasePriority}
                                buttonName='Normal' iconName='flash' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        {/* <span className="subHeadingThree"></span> */}

                        <span className="input-fields-selector">

                            <SelectorBoxWithImage id={2} selectClick={() => { this.setState({ selectedCasePriority: 2 }) }} selectedButton={this.state.selectedCasePriority}
                                selectorButtonWidth={235} selectorButtonHeight={92}
                                buttonName='Very High' border='0.8px solid #D2E3E9' subHeading={'3 Days / $15'} boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='flashVeryHigh' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        {/* <span className="subHeadingThree"></span> */}

                        <span className="input-fields-selector">

                            <SelectorBoxWithImage id={3} selectClick={() => { this.setState({ selectedCasePriority: 3 }) }} selectedButton={this.state.selectedCasePriority}
                                selectorButtonWidth={235} selectorButtonHeight={92} subHeading={'3 Days / $15'}
                                buttonName='High' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='flashHigh' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                </div>

                <br />
                <br />
                <div className="gray-background">

                    <div className="addPolicyDetailsHeader">
                        <span className="headingThree">Business Details</span>
                    </div>
                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeading" style={{ marginLeft: '-18px' }}>Business ID</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ businessDetailsID: e.target.value })} width={15} label='Business ID' inputType='' inputIcon='' inputPlaceholder='Business ID' />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeading" style={{ marginLeft: '8px' }}>Business Description</span>
                            <span className="input-fields1">
                                <InputField onChangeText={(e) => this.setState({ businessDetailsDescription: e.target.value })} width={46} multiline={true} rows={1} label='Multiline' inputType='' inputIcon='' inputPlaceholder='Business Description' />
                            </span>
                        </div>

                    </div>


                    {/* <div className="addPolicyDetailsBody">
                    <div className="inputItem">
                        <span className="subHeading" style={{marginLeft:'8px'}}>Business Description</span>
                        <span className="input-fields1">
                            <InputField width={46} multiline={true} rows={6} label='Multiline' inputType='' inputIcon='' inputPlaceholder='Business Description' />
                        </span>
                    </div>

                </div> */}
                    <br />
                    <br />
                </div>

                <div className="addPolicyDetailsHeader">
                    <span className="headingThree">Special Attention </span>
                </div>
                <div className="addPolicyDetailsBody">

                    <div className="inputItem">
                        {/* <span className="subHeading" style={{marginLeft:'8px'}}>Business Description</span> */}
                        <span className="input-fields1">
                            <InputField onChangeText={(e) => this.setState({ specialAttention: e.target.value })} width={46} multiline={true} rows={4} label='Multiline' inputType='' inputIcon='' inputPlaceholder='Special Attention' />
                        </span>
                    </div>

                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                    <span className="heading">Bill Type</span>
                </div>


                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>

                    {this.state.billTypeList.map((item, index) => (

                        <div className="inputItem">
                            <span className="input-fields2">
                                <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64} leftName={item.leftName} id={item.id} selectClick={() => { this.setState({ selectedBillType: item.id }) }} selectedButton={this.state.selectedBillType}
                                    buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                            </span>
                        </div>

                    ))}

                    {/* <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton
                                id={1} selectClick={() => { this.setState({ selectedBillType: 1 }) }} selectedButton={this.state.selectedBillType}
                                selectorButtonWidth={179} selectorButtonHeight={62}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                id={2} selectClick={() => { this.setState({ selectedBillType: 2 }) }} selectedButton={this.state.selectedBillType}
                                selectorButtonWidth={148} selectorButtonHeight={62}
                                buttonName='Doler Sit' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                           
                        </span>
                    </div>


                    

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                id={3} selectClick={() => { this.setState({ selectedBillType: 3 }) }} selectedButton={this.state.selectedBillType}
                                selectorButtonWidth={166} selectorButtonHeight={62}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                    </div> */}
                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                    <span className="heading">Form Type</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>

                    {this.state.formTypeList.map((item, index) => (

                        <div className="inputItem">
                            <span className="input-fields2">
                                <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64} leftName={item.leftName} id={item.id} selectClick={() => { this.setState({ selectedFormType: item.id }) }} selectedButton={this.state.selectedFormType}
                                    buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                            </span>
                        </div>

                    ))}


                    {/* <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton
                                id={1} selectClick={() => { this.setState({ selectedFormType: 1 }) }} selectedButton={this.state.selectedFormType}
                                // selectedButton={1}
                                selectorButtonWidth={166} selectorButtonHeight={62}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton
                                id={2} selectClick={() => { this.setState({ selectedFormType: 2 }) }} selectedButton={this.state.selectedFormType}
                                selectorButtonWidth={151} selectorButtonHeight={62}
                                buttonName='doler Sit' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton
                                id={3} selectClick={() => { this.setState({ selectedFormType: 3 }) }} selectedButton={this.state.selectedFormType}
                                selectorButtonWidth={179} selectorButtonHeight={62}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                    </div> */}


                </div>
                <br />
                <br />

            </div>
        );
    }
}

StepTwo.propTypes = {

};

function mapDispatchToProps(dispatch) {
    return {
        CreateCaseActions: bindActionCreators(CreateCaseActions, dispatch)
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        CreateCaseReducer: state.CreateCaseReducer,
        LoginReducer: state.LoginReducer
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)