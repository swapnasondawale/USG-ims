import React, { Component } from "react";
import BarChart from "../barChart/BarChart";
import LineChart from "../lineChart/LineChart";
import DatePicker from "../datePicker/Datepicker";
import TimePicker from "../timePicker/TimePicker";
import TabPanel from "../tabPanelComponent/TabPanelComponent";
import RadioButtons from "../radioButton/RadioButton";
import MaterialTables from "../materialTable/MaterialTable";
import MaterialCard from "../materialCard/MaterialCard";
import MaterialLabel from "../materialLabel/MaterialLabel";
import MaterialPopUP from "../materialPopUp/MaterialPopUp";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import MaterialActionTable from "../materialActionTable/MaterialActionTable";
import Input from "../inputField/InputField";
import DropDown from "../dropDown/DropDown";
import CheckBox from "../checkBox/CheckBox";
import SearchableDropDown from "../searchableDropDown/SearchableDropDown";

export class ComponentGenerator extends Component {
  render() {
    switch (this.props.type) {
      case "line":
        return <LineChart />;
      case "tab":
        return <TabPanel tabData={this.props.tabData} />;
      case "dates":
        return <DatePicker value={this.props.value} />;
      case "time":
        return <TimePicker value={this.props.value} />;
      case "barChart":
        return (
          <BarChart
            data={this.props.data}
            width={this.props.width}
            height={this.props.height}
          />
        );

      case "radio":
        return <RadioButtons value={this.props.value} />;
      case "table":
        return (
          <MaterialTables data={this.props.data} columns={this.props.columns} />
        );

      case "card":
        return <MaterialCard value={this.props.value} />;
      case "label":
        return <MaterialLabel value={this.props.value} />;
      case "popup":
        return (
          <MaterialPopUP value={this.props.value} modal={this.props.title} />
        );
      case "button":
        return (
          <ButtonComponent
            onClickFun={this.props.onClickFun}
            value={this.props.value}
            color={this.props.color}
            disabled={this.props.disabled}
          />
        );
      case "actionTable":
        return (
          <MaterialActionTable
            data={this.props.data}
            columns={this.props.columns}
            title={this.props.title}
          />
        );
      case "input":
        return <Input inputData={this.props} />;
      case "dropdown":
        return <DropDown dropDownData={this.props} />;
      case "checkbox":
        return <CheckBox name={this.props.name} title={this.props.title} value={this.props.value} />;
      case "searchableDropdown":
        return (
          <SearchableDropDown searchableList={this.props.searchableList} />
        );
            case "radio":
                return <RadioButtons value={this.props.value} />
         

      default:
        return ""


    }

  }
}

export default ComponentGenerator;
