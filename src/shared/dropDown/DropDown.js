import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './DropDown.css';

/**
 * This function will be used to bind values to DropDown.
 * @param {*} props used to get DropDown object
 */
export default function DropDown(props) {
  const [open, setOpen] = React.useState(false);
  const { placeholder, label, dropDownData } = props;
  const [dropDownValue, setDropDown] = React.useState(label);
  console.log('dropDownValue', dropDownValue);
  /** This function will be used to handle change event of dropdown and set current value to dropdown */
  const handleChange = (event) => {
    setDropDown(event.target.value);
    // props.dropDownValue = event.target.value;
    console.log('event.target.value', event.target.value);
  };
  /** This function will be used to handle handleClose event of dropdown */
  const handleClose = () => {
    setOpen(false);
  };
  /** This function will be used to handle handleOpen event of dropdown */
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <FormControl variant="outlined">
        {/* <InputLabel htmlFor="outlined-age-native-simple">Ages</InputLabel> */}
        {/* <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={dropDownValue}
          placeholder={placeholder}
          onChange={handleChange}
          className="select-box-class"
        // input={"select-text//-input"}
        >
          <MenuItem value={placeholder}>
            <em>{placeholder}</em>
          </MenuItem>
          {dropDownData
            ? dropDownData.map(category => {
              return (
                <MenuItem key={category.id} value={category.description}>
                  {category.description}
                </MenuItem>
              );
            })
            : ""}
        </Select>
      </FormControl>
    </div>
  )
}