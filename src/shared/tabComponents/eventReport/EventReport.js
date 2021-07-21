import React from 'react';
import './eventReport.scss'
import ComponentGenerator from "../../componentGenrator/ComponentGenerator"
const data = [
  {
    srNo: '1',
    name: "Marty",
    organization: "Bajaj",
    _id: "1",
    mobile: "9503577602",
    email: 'a@gmail.com',
    createdAt: '15/06/2020'
  },
  {
    srNo: '2',
    name: "mayur",
    organization: "Apptware",
    _id: "2",
    mobile: "12345678",
    email: 'm@gmail.com',
    createdAt: '12/06/2020'
  },
  {
    srNo: '3',
    name: "vimit",
    organization: "icici",
    _id: "3",
    mobile: "12345678",
    email: 'v@gmail.com',
    createdAt: '11/06/2020'
  },
  {
    srNo: '4',
    name: "Salman",
    organization: "Bajaj Finserv",
    _id: "4",
    mobile: "12345678",
    email: 's@gmail.com',
    createdAt: '14/06/2020'
  },
  {
    srNo: '5',
    name: "Neha",
    organization: "Bajaj",
    _id: "5",
    mobile: "12345678",
    email: 'N@gmail.com',
    createdAt: '15/06/2020'
  },
  {
    srNo: '6',
    name: "Sayali",
    organization: "Bajaj",
    _id: "6",
    mobile: "12345678",
    email: 'sayali@gmail.com',
    createdAt: '15/06/2020'
  },
]
/**
* @param {*} columns contains table column name
*/
const columns = [
  { title: "Sr.No", field: "srNo" },
  { title: "Name", field: "name" },
  { title: "Organisation", field: "organization" },
  { title: "Visitor Id", field: '_id' },
  { title: "Contact", field: 'mobile' },
  { title: "Email Id", field: 'email' },
  { title: "Date", field: 'createdAt' },
]
/** This function will used to display EventReport tab contents  */
export default function EventReport(props) {
  const title = "Recent Event"
  return (
    <div className="row">
      <div className="col-12 eventReportContent">
        <div className="row">
          <div className="col-1 eventName text-left">Recent Event :</div>
          <div className="col-1 eventA text-right">Event A</div>
          <div className="col-1 eventName text-right">Event B</div>
          <div className="col-1 eventName text-right">Event C</div>
          <div className="col-3">
            <div className="eventType">
              <label className="eventSelectName">Select Date</label>
              <div className="eventDropdown">
                <ComponentGenerator type="searchableDropdown" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="eventType">
              <label className="eventSelectName">Select Event </label>
              <div className="eventDropdown">
                <ComponentGenerator type="searchableDropdown" />
              </div>
            </div>
          </div>
          <div className="col-2 exportEvent"><span class="icon-export"></span>export</div>
        </div>
      </div>
      <div className="col-12 eventReport">
        <ComponentGenerator title={title} type="table" data={data} columns={columns} />
      </div>
    </div>
  );
}