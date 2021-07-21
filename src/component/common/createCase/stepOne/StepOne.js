import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepOne.css';
import { ButtonComponent, DropDown, InputField, MaterialCard, SelectorButton } from '../../../../shared';
import * as CreateCaseActions from '../../../../store/actions/CreateCaseActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from '../../../../store/store';


class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {

            divisionList: [],

            divisionListForSelect: [{
                id: 1,
                description: ' California 1'
            },

            {
                id: 2,
                description: 'Florida 1'
            },
            {
                id: 3,
                description: 'Louisiana'
            },
            {
                id: 4,
                description: 'Michigan'
            },
            {
                id: 5,
                description: 'Texas 1'
            },
            {
                id: 6,
                description: 'Corporate'
            },
            {
                id: 7,
                description: 'South Carolina'
            }],

            caseTypeList: [{
                id: 1,
                buttonName: 'Physical Inspection',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 2,
                buttonName: 'Physical Audit',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 3,
                buttonName: 'Phone Audit',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 4,
                buttonName: 'Phone Inspection',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 5,
                buttonName: 'Virtual Audit',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 6,
                buttonName: 'Virtual Inspection',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            }],

            orderByList: [{
                id: 1,
                description: 'Debbie Reese',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''
            },
            {
                id: 2,
                description: 'Jodie Pugh',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            },
            {
                id: 3,
                description: 'Kendra Lackey',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: ''

            }],
            orderByListForSelect: [,
                {
                    value: 'Lisa begeny',
                    id: 1

                },
                {
                    value: 'Rachel Sanders',
                    id: 2

                }],
            secondaryList: [{
                buttonName: 'Debbie Reese',
                buttonWidth: '179',
                buttonHeight: '80',
                buttonIcon: ''
            },
            {
                buttonName: 'Jodie Pugh',
                buttonWidth: '179',
                buttonHeight: '80',
                buttonIcon: ''

            },
            {
                buttonName: 'Kendra Lackey',
                buttonWidth: '179',
                buttonHeight: '80',
                buttonIcon: ''

            }],
            secondaryByListForSelect: [,
                {
                    value: 'Lisa begeny',
                    id: 1

                },
                {
                    value: 'Rachel Sanders',
                    id: 2

                }],
            carrierList: [{
                id: 1,
                buttonName: 'American Family Insurance',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',
                leftName: 'ID: 151'
            },
            {
                id: 2,
                buttonName: 'American Financial Corporation',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',
                leftName: 'ID: 165'

            },
            {
                id: 3,
                buttonName: 'Auto Financers Group',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',
                leftName: 'ID: 365'

            }],

            carrierListForSelect: [,
                {
                    value: 'Farmers Insurance Company',
                    id: 1

                },
                {
                    value: 'Kinsale Insurance',
                    id: 2

                }],
            coverageList: [{
                id: 1,
                buttonName: 'General Liability',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: false,
                borderName: '0.8px solid #D2E3E9'
            },
            {
                id: 2,
                buttonName: 'Property',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: false,
                borderName: '0.8px solid #D2E3E9'

            },
            {
                id: 3,
                buttonName: 'Premises GL',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: false,
                borderName: '0.8px solid #D2E3E9'

            },
            {
                id: 4,
                buttonName: 'Garage Keepers',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: false,
                borderName: '0.8px solid #D2E3E9'


            },
            {
                id: 5,
                buttonName: 'Garage Liability',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: false,
                borderName: '0.8px solid #D2E3E9'

            },
            {
                id: 6,
                buttonName: '+ Add New',
                buttonWidth: '172',
                buttonHeight: '64',
                buttonIcon: '',

                addNew: true,
                borderName: '2.6px dashed #D2E3E9'

            }],
            policyTypeList: [],
            subPolicyTypeList: [],
            selectedDivision: '',
            selectedOrderBy: '',
            selectedSecondary: '',
            selectedCaseType: '',
            selectedCoverage: '',
            selectedCarrier: '',
            showIndicator: false,
            setPolicyNumber: '',
            setPolicyType: 1,
            setPolicySubType: 1,
            setCreateCaseData: {}



        }


    }

    componentDidMount() {

        const token = this.props.LoginReducer.loginData.data;
        console.log('token value', token);

        store.dispatch(CreateCaseActions.getDivision(token));
        // store.dispatch(CreateCaseActions.getOrderBy(token));
        // store.dispatch(CreateCaseActions.getSecondary(token));
        store.dispatch(CreateCaseActions.getCaseType(token));
        store.dispatch(CreateCaseActions.getCarrier(token));
        store.dispatch(CreateCaseActions.getPolicyType(token));
        store.dispatch(CreateCaseActions.getSubPolicyType(token));
        store.dispatch(CreateCaseActions.getCoverage(token));
        this.setState({ showIndicator: true, setCreateCaseData: this.props.CreateCaseReducer.setCreateCaseData })
        console.log('setcreatecasedata', this.props.CreateCaseReducer.setCreateCaseData);


    }

    componentDidUpdate(prevProps, nextProps) {
        if (nextProps.selectedCoverage !== this.state.selectedCoverage) {
            console.log('component updatedxs', this.state.setPolicyType);

            this.setState({
                setCreateCaseData: {
                    ...this.state.setCreateCaseData,
                    "DivisionId": this.state.selectedDivision,
                    "OrderedById": this.state.selectedOrderBy,
                    "SecondaryId": this.state.selectedSecondary,
                    "CaseTypeId": this.state.selectedCaseType,
                    "CarrierId": this.state.selectedCarrier,
                    "PolicyNumber": this.state.setPolicyNumber,
                    "PolicyType": this.state.setPolicyType,
                    "PolicySubType": this.state.setPolicySubType,
                    "CoverageId": this.state.selectedCoverage,
                }
            }, () => {
                store.dispatch(CreateCaseActions.setCreateCaseData(this.state.setCreateCaseData))
            })

        }

        if (prevProps.CreateCaseReducer.divisionList != this.props.CreateCaseReducer.divisionList) {
            this.setState({ divisionList: this.props.CreateCaseReducer.divisionList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.caseTypeList != this.props.CreateCaseReducer.caseTypeList) {
            this.setState({ caseTypeList: this.props.CreateCaseReducer.caseTypeList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.carrierList != this.props.CreateCaseReducer.carrierList) {
            this.setState({ carrierList: this.props.CreateCaseReducer.carrierList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.policyTypeList != this.props.CreateCaseReducer.policyTypeList) {
            this.setState({ policyTypeList: this.props.CreateCaseReducer.policyTypeList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.subPolicyTypeList != this.props.CreateCaseReducer.subPolicyTypeList) {
            this.setState({ subPolicyTypeList: this.props.CreateCaseReducer.subPolicyTypeList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.coverageList != this.props.CreateCaseReducer.coverageList) {
            this.setState({ coverageList: this.props.CreateCaseReducer.coverageList.data.responseList })
        }

        if (prevProps.CreateCaseReducer.divisionList != this.props.CreateCaseReducer.divisionList) {
            this.setState({ divisionList: this.props.CreateCaseReducer.divisionList.data.responseList })
        }

    }

    handleChangeForPolicyType = (event) => {
        console.log('policy type', event);
    }


    handlePolicyNumber = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({ setPolicyNumber: event.target.value });

    }

    render() {
        return (
            <div>
                <div className="white-background">
                    <div className="addPolicyDetailsHeader">
                        <span className="main-heading">Case Details</span>
                    </div>
                </div>
                <div className="gray-background">
                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Division</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div style={{ 'paddingLeft': '46px' }}></div>
                        {this.state.divisionList.map((item, index) => (

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton selectorButtonWidth={172} id={item.id} selectorButtonHeight={64} selectClick={() => { this.setState({ selectedDivision: item.id }) }} selectedButton={this.state.selectedDivision}
                                        buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='#FFFFFF' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                        ))}

                        <div className="inputItem">
                            <span className="input-fields2">
                                <DropDown label="Select other" placeholder="Select other" dropDownData={this.state.divisionList} />
                            </span>
                        </div>

                    </div>


                    <br />
                    <br />



                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Order By</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div style={{ 'paddingLeft': '46px' }}></div>
                        {this.state.orderByList.map((item, index) => (

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton selectorButtonWidth={172} id={item.id} selectorButtonHeight={64} selectClick={() => { this.setState({ selectedOrderBy: item.id }) }} selectedButton={this.state.selectedOrderBy}
                                        buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                        ))}

                        <div className="inputItem">
                            <span className="input-fields2">
                                <DropDown label="Select other" placeholder="Select other" dropDownData={this.state.orderByList} />
                            </span>
                        </div>

                    </div>



                    <br />
                    <br />

                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Secondary</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div style={{ 'paddingLeft': '46px' }}></div>
                        {this.state.orderByList.map((item, index) => (

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64} id={item.id} selectClick={() => { this.setState({ selectedSecondary: item.id }) }} selectedButton={this.state.selectedSecondary}
                                        buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                        ))}

                        <div className="inputItem">
                            <span className="input-fields2">
                                <DropDown label="Select other" placeholder="Select other" dropDownData={this.state.secondaryList} />
                            </span>
                        </div>


                    </div>

                    <br />
                    <br />
                </div>
                <div className="addPolicyDetailsHeader">
                    <span className="heading">Case Type</span>
                </div>

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    {this.state.caseTypeList.map((item, index) => (

                        <div className="inputItem">
                            <span className="input-fields2">
                                <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64} selectorButtonHeight={64} id={item.id} selectClick={() => { this.setState({ selectedCaseType: item.id }) }} selectedButton={this.state.selectedCaseType}
                                    buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                            </span>
                        </div>

                    ))}

                </div>



                <br />
                <br />
                <div className="gray-background">

                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Carrier</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div style={{ 'paddingLeft': '46px' }}></div>
                        {this.state.carrierList.map((item, index) => (

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64} leftName={item.leftName} id={item.id} selectClick={() => { this.setState({ selectedCarrier: item.id }) }} selectedButton={this.state.selectedCarrier}
                                        buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                        ))}

                        <div className="inputItem">
                            <span className="input-fields2">
                                <DropDown label="Select other" placeholder="Select other" dropDownData={this.state.carrierList} />
                            </span>
                        </div>


                    </div>


                    <br />
                    <br />

                    <div className="addPolicyDetailsBody">
                        <div className="inputItem">
                            <span className="subHeading">Policy Number</span>
                            <span className="input-fields1">
                                <InputField width={20} label='Policy Number' onChangeText={this.handlePolicyNumber} inputType='' inputIcon='' inputPlaceholder='Policy Number' value />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeading">  {`Policy Type`}</span>
                            <span className="input-fields1">

                                <DropDown label="Select" placeholder="Select" dropDownData={this.state.policyTypeList} value={this.state.setPolicyType} />
                            </span>
                        </div>

                        <div className="inputItem">
                            <span className="subHeading">  {`Policy Subtype`}</span>
                            <span className="input-fields1">

                                <DropDown label="Select" placeholder="Select" dropDownData={this.state.subPolicyTypeList} />
                            </span>
                        </div>

                    </div>

                    <br />
                    <br />
                    {/* <div className="addPolicyDetailsHeader">
                        <span className="heading">Coverage</span>
                    </div> */}

                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Coverage</span>
                    </div>

                    <div className="addPolicyDetailsBody">
                        <div style={{ 'paddingLeft': '46px' }}></div>
                        {this.state.coverageList.map((item, index) => (

                            <div className="inputItem">
                                <span className="input-fields2">
                                    <SelectorButton selectorButtonWidth={172} selectorButtonHeight={64}
                                        // addNew={item.addNew} 
                                        id={item.id} selectClick={() => { this.setState({ selectedCoverage: item.id }) }} selectedButton={this.state.selectedCoverage}
                                        buttonName={item.description} iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='white' borderColor={'#D2E3E9'} />

                                </span>
                            </div>

                        ))}

                    </div>
                    <br />
                    <br />
                </div>

            </div>
        );
    }
}

StepOne.propTypes = {

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



export default connect(mapStateToProps, mapDispatchToProps)(StepOne)