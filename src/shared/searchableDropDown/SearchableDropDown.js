import React from 'react'
import Select from 'react-select';

/**
 * This function will be used to bind values of array to searchable dropdown.
 * @param {*} props used to get searchableList array
 */
export default function SearchableDropDown(props) {
    const searchableList = props.searchableList
      return (
       <div>
         <Select options={searchableList} />
       </div>
    )
}