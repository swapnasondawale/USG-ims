import React from 'react'
import TextField from '@material-ui/core/TextField';
import { FieldControl } from "react-reactive-form";
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import SearchIcon from '@material-ui/icons/Search';


/**
 * This function will be used to get data from props and bind to TextField.
 * also set the form validation for TextField if text is not enter in TextField then error message will display on screen.
 * @param {*} props used to get imput field object
 */
export default function InputField(props) {
  // const {label, inputType,} = props.inputData;
  return (
    // <FieldControl
    // name={name}
    // render={({ handler, hasError }) => (
    //   <div>
    <TextField
      // label={props.label}
      id={props.inputId}
      type={props.inputType}
      multiline={props.multiline}
      rows={props.rows}
      placeholder={props.inputPlaceholder}
      style={{
        width: `${props.width}%`, backgroundColor: `white`,
        boxShadow: `inset -4px -4px 5px 0 rgba(255,255,255,0.3), inset 1px 1px 5px 1px rgba(202,214,220,0.5), inset 0 4px 10px 0 rgba(255,255,255,0.3), inset 0 0 3px 0 rgba(202,214,220,0.6)`
      }}
      // className={clsx(classes.margin, classes.textField)}
      InputProps={{
        startAdornment: <InputAdornment position="start">{props.inputIcon == 'mail' ? <MailOutlineIcon /> : props.inputIcon == 'user' ? <PersonOutlineOutlinedIcon /> : props.inputIcon == 'phone' ? <PhoneOutlinedIcon /> : props.inputIcon == 'phone' ? <LockIcon /> : props.inputIcon == 'search-box' ? <SearchIcon style={{ 'color': '#72809D' }} /> : ''}</InputAdornment>,
        endAdornment: props.inputIcon == 'password' ? <InputAdornment position="end"><a href="#">Reset Password</a></InputAdornment> : <></>
      }}
      value={props.inputValue}
      variant="outlined"
      onChange={props.onChangeText}
    />
    //   <div style={{fontSize:"12px",color: "red"}}>
    //     {(hasError("required") && (
    //       <div>Some input is required </div>
    //     )) ||
    //     (hasError("maxLength") && (
    //       <div> number should not be more than {maxlength}</div>
    //     ))}
    //   </div>
    // </div>
    //   )}
    // />
  )
}