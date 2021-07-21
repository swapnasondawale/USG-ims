import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { FieldControl } from "react-reactive-form";

/**
 * This function will be used to bind values to checkbox.
 * @param {*} props used to get checkboxData object
 */
export default function CheckBox(props) {
    return (
       <div>
         <FieldControl
         name={props.name}
         render={({ handler }) => (
          <>
         <Checkbox  {...handler("checkbox")} />
         <label>{props.title}</label>
          </>
         )}
         />
       </div>
    )
}