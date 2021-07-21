import React, { Component } from 'react';
import { FormBuilder, FieldGroup, Validators } from 'react-reactive-form'
import { ComponentGenerator } from '../../../common/componentGenrator/ComponentGenerator';
import './visitorPurposeManagement.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


/** This function will used to display VisitorPurposeManagement tab contents  */

class VisitorPurposeManagement extends Component {
  visitorPurposeForm
  constructor(props) {
    super(props)
    this.state = {
      purposeOfVisit: ['Meeting', 'Event', 'Library Visit', 'Demo', 'CGB Meet', 'others']
    }
  }

  /** This function will be used to call buildForm function for input field */
  componentWillMount() {
    this.buildForm();
  }

  /** This function will be used to create a form for input field and  with validations and checkbox */
  buildForm() {
    this.visitorPurposeForm = FormBuilder.group({
      testInput: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
        ]
      ],
      internalCheckbox: false,
      externalCheckBox: false,
      notApplicableCheckbox: false,
    });
  }

  /**
   * This function will be used to get value from form and push into array
   * @param {*} e used to get the event
   */
    handleSubmit(e) {
        alert(`You submitted \n ${JSON.stringify(this.visitorPurposeForm.value)}`);
        let inputValue = this.visitorPurposeForm.value.testInput
        var newValue = this.state.purposeOfVisit.concat(inputValue);
        this.setState({ purposeOfVisit: newValue })
      }

      /**
       * This function will be used to delete element from array
       * @param {*} index used to get index of item
       */
      removeItem(index){
        const list = this.state.purposeOfVisit;
        list.splice(index, 1);
        this.setState({ purposeOfVisit: list });
      }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 container-purposeVisit">
            <div className="row">
              <div className="col-12 container-newPurpose">
                Create/Edit new Purpose of Visit
              </div>
              <div className="col-12 container-purposeOption">
                <React.Fragment>
                  <FieldGroup
                    key="visitorPurposeForm"
                    control={this.visitorPurposeForm}
                    render={({ invalid, get }) => (
                      <form onSubmit={this.handleSubmit}>
                        <div className="container-purposeOption-purpose">
                          <ComponentGenerator type="input"
                            placeholder="placeholder"
                            name="testInput"
                            label="Purpose"
                            inputType="text"
                            disabled={false}
                            maxlength={10} /></div>

                        <ComponentGenerator type="checkbox"
                          name="internalCheckbox"
                          title="Internal"
                          value={false}
                        />
                        <ComponentGenerator type="checkbox"
                          name="externalCheckBox"
                          title="External"
                          value={false}
                        />
                        <ComponentGenerator type="checkbox"
                          name="notApplicableCheckbox"
                          title="N/A"
                          value={false}
                        />
                        <div className="text-center">
                          <ComponentGenerator type="button" onClickFun={this.handleSubmit.bind(this)} disabled={!this.visitorPurposeForm.valid}  value="Apply" /> 
                        </div>
                      </form>
                    )}
                  />
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className="col-7 container-cardList">
            <div className="row">
              <div className="col-12 container-visitPurpose">Purpose of visit list</div>
              {this.state.purposeOfVisit.map((visitList, i) => (
                <div className="col-6">
                  <div className=" col-12 container-smallcards">
                    <div className="col-9">{visitList}</div>
                    <div className="col-3 container-editCheckIcon text-right">
                      <span className="icon-edit-1"></span>
                      <span class="icon-cross" onClick={() => this.removeItem(i)}></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitorPurposeManagement;
