import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
/**
 *Radio buttons allow the user to select one option from a set.
 * @param {value} props  label for radio button
 */

export default function RadioButtons(props) {
  const [value, setValue] = React.useState('female');

  /**
   * function are use to select correct value
   * @param {handleChange} event 
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Radio Button</FormLabel>
      <RadioGroup aria-label="name" name="name" value={value} onChange={handleChange}>
        <FormControlLabel value="name" control={<Radio />} label={props.value} />
      </RadioGroup>
    </FormControl>
  );
}
