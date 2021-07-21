import React from 'react';
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import {
    ArrowDownward,
    AddBox,
    Check,
    ChevronRight,
    ChevronLeft,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn
} from '@material-ui/icons';

/**
 * This function are used to material table action
 * @param {*} props data and columns are passed from parent component
 */

export default function MaterialActionTable(props) {
  /**
   * @param {*} tableIcons are used to set the icons
   */
    const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  return (
    <MaterialTable
    title={props.title}
    icons={tableIcons}
    data={props.data}
            columns={props.columns}
    editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              oldData = props.data;
              if (oldData) {
                props.update(newData)
              }
            }, 600);
          }),
          
        onRowDelete: (newData,oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              oldData=props.data;
              props.delete(newData);
            }, 600);
           })
        }}
    options={{
      actionsColumnIndex: -1
    }}
  />
  );
}
