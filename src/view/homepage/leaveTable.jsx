import React, { useState } from "react";
import "./leavePage.css";
import Card from "../../component/Card/Card";

import ViewListIcon from '../../assets/viewListIcon.svg'


const LeaveTable = ({ data, handleModalData, handleStatus }) => {


  const dataLength = data.filter((data, i) => (data.hr_approval && data.reporting_person_approval))

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <Card heading={'People On Leaves'} content={dataLength.length} onOnlick={handleShow}  link="/astrologer"/>
      {/* <Card heading={'Total Astrologers'} content={'200'} link="/astrologer" /> */}

      {show && <>
        <div className="w-25 mt-5 mb-5">
          <div className="blog-heading-content">
            People on Leaves
          </div>
        </div>


        <table className="table table-responsive text-start">
          <thead className="table-head-color">
            <tr>
              <th scope="col" className="th-container">S.no.</th>
              <th scope="col" className="th-container">User</th>

              <th scope="col" className="th-container">Leave Desc</th>
              <th scope="col" className="th-container">From Date</th>
              <th scope="col" className="th-container">To Date</th>


              <th scope="col" className="th-container">Hr Approval</th>
              <th scope="col" className="th-container">Head Approval</th>
              {/* <th scope="col" className="th-container">My Status</th> */}

            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              if (data.hr_approval && data.reporting_person_approval) {
                return (
                  <tr>
                    <td scope="row">{i + 1}</td>
                    <td> {data.user_id}</td>
                    <td>{data.leave_desc}</td>

                    <td>{data.from_date}</td>
                    <td>{data.to_date}</td>

                    <td>
                      {/* {data.status === 'Progess'  && <span class="badge text-bg-warning">{data.status}</span>} */}
                      {!data.hr_approval && <span class="badge text-bg-danger">Not Approved</span>}
                      {data.hr_approval && <span class="badge text-bg-success">Approved</span>}
                      {/* {data.status === 'Not Completed' && <span class="badge text-bg-danger">{data.status}</span>} */}

                    </td>
                    <td>
                      {/* {data.status === 'Progess'  && <span class="badge text-bg-warning">{data.status}</span>} */}
                      {!data.reporting_person_approval && <span class="badge text-bg-danger">Not Approved</span>}
                      {data.reporting_person_approval && <span class="badge text-bg-success">Approved</span>}
                      {/* {data.status === 'Not Completed' && <span class="badge text-bg-danger">{data.status}</span>} */}

                    </td>
                    <td>
                      {/* {data.status === 'Progess'  && <span class="badge text-bg-warning">{data.status}</span>} */}
                      {/* {!data.user_status && <span class="badge text-bg-danger">Not Requested</span>} */}
                      {/* {data.user_status && <span class="badge text-bg-success">Requested</span>} */}
                      {/* {data.status === 'Not Completed' && <span class="badge text-bg-danger">{data.status}</span>} */}

                    </td>

                    <td>
                      {/* <button className={data.hr_approval ?  "btn btn-outline-danger" : "btn btn-outline-success" }  onClick={() => handleStatus(data)}>{data. hr_approval ? "Reject": "Approve" }</button> */}

                    </td>
                  </tr>
                )
              }

            })}



          </tbody>
        </table>
      </>}

    </>
  )


}

export default LeaveTable;