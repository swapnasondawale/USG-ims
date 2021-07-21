// import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

/**
 * used To select the date and Time
 * @param {selectedDate} selectedDate are used to select the value from date picker
 * @param {setSelectedDate} setSelectedDate  the date which are selected by user
 * @prop {value} select the date which is set in parentcomponent
 */

export default function TimePicker(props) {

  const [selectedDate, setSelectedDate] = React.useState(props.value);
console.log(selectedDate)

/**
 * function are used to select the date
 * @param {handleDateChange} date  user selected date are set in this function
 */

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

    </MuiPickersUtilsProvider>
  );
}
