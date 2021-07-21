import React from 'react'


/**
 * Function are used to give lable to the field
 *
 * @param {*} props  value pass from parent component
 */
export default function MaterialLabel(props) {
    return (
        <div>
            <label>{props.value}</label>
        </div>
    )
}
