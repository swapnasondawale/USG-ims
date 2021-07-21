
import * as types from '../actionTypes/CreateCaseActionsTypes'
const initialState = {
    user: {},
    setCreateCaseData: {
        "DivisionId": '',
        "OrderedById": '',
        "SecondaryId": '',
        "CaseTypeId": '',
        "CarrierId": '',
        "PolicyNumber": '',
        "PolicyType": '',
        "PolicySubType": '',
        "CoverageId": '',
        "Insureds": {
            "InsuredName": 'mayur',
            "InsuredDBA": 'jksdkj',
            "PriorityId": '',
            "BusinessId": '',
            "BusinessDescription": '',
            "SpecialAttention": '',
            "BillingTypeId": '',
            "FormTypeId": '',
            "Correspondences": [
                {
                    "CorrespondenceTypeId": '',
                    "Email": '',
                    "Website": '',
                    "Mobile": '',
                    "Business": '',
                    "Ext": '',
                    "ContactName": ''
                },
                {
                    "CorrespondenceTypeId": '',
                    "Email": '',
                    "Website": '',
                    "Mobile": '',
                    "Business": '',
                    "Ext": '',
                    "ContactName": ''
                }
            ],
            "Addresses": [
                {
                    "AddressTypeId": '',
                    "Street": '',
                    "Zip": '',
                    "City": '',
                    "State": '',
                    "Country": '',
                    "Lat": '',
                    "Long": ''
                },
                {
                    "AddressTypeId": '',
                    "Street": '',
                    "Zip": '',
                    "City": '',
                    "State": '',
                    "Country": '',
                    "Lat": '',
                    "Long": ''
                }
            ]
        }
    }
};

const CreateCaseReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_CREATE_CASE_DIVISION_SUCCESS:

            return {
                ...state,
                divisionList: action.payload
            }

        case types.GET_CREATE_CASE_ORDER_BY_SUCCESS:

            return {
                ...state,
                orderByList: action.payload
            }

        case types.GET_CREATE_CASE_SECONDARY_SUCCESS:

            return {
                ...state,
                secondaryList: action.payload
            }

        case types.GET_CREATE_CASE_CASE_TYPE_SUCCESS:

            return {
                ...state,
                caseTypeList: action.payload
            }

        case types.GET_CREATE_CASE_CARRIER_SUCCESS:

            return {
                ...state,
                carrierList: action.payload
            }

        case types.GET_CREATE_CASE_COVERAGE_SUCCESS:

            return {
                ...state,
                coverageList: action.payload
            }

        case types.GET_CREATE_CASE_POLICY_TYPE_SUCCESS:

            return {
                ...state,
                policyTypeList: action.payload
            }

        case types.GET_CREATE_CASE_POLICY_SUB_TYPE_SUCCESS:

            return {
                ...state,
                subPolicyTypeList: action.payload
            }

        case types.GET_CREATE_CASE_CASE_PRIORITY_SUCCESS:

            return {
                ...state,
                casePriorityList: action.payload
            }

        case types.GET_CREATE_CASE_BILL_TYPE_SUCCESS:

            return {
                ...state,
                billTypeList: action.payload
            }

        case types.GET_CREATE_CASE_FORM_TYPE_SUCCESS:

            return {
                ...state,
                formTypeList: action.payload
            }

        case types.CREATE_CASE_SUCCESS:

            return {
                ...state,
                createCaseData: action.payload
            }

        case types.SET_CREATE_CASE_DATA:

            return {
                ...state,
                setCreateCaseData: action.payload
            }

        default:
            return state
    }

}
export default CreateCaseReducer;