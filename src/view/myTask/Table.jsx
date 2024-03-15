import React from "react";
import "./Tables.css"
import ViewListIcon from '../../assets/viewListIcon.svg'
import axios from "axios";
import { api_end_point } from "../../api/api";

const Table = ({ list, handleModalData, viewbtn, handleStatus }) => {




  return (
    <table className="table table-responsive text-start" style={{ marginBottom: '50px' }}>
      <thead className="table-head-color">
        <tr>
          <th scope="col" className="th-container">S.no.</th>
          <th scope="col" className="th-container">Task Desc</th>
          <th scope="col" className="th-container">Assign From</th>
          <th scope="col" className="th-container">Department</th>
          <th scope="col" className="th-container">Priority</th>

          <th scope="col" className="th-container">Status</th>
          <th scope="col" className="th-container">Created At</th>
          <th scope="col" className="th-container">Updated At</th>
          <th scope="col" className="th-container">Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data, i) => {
          return (

            <tr>

              <td scope="row">{i + 1}</td>
              <td>{data.task_desc}</td>
              <td>{data.assign_from}</td>
            
              <td>{data.assign_to_depart}</td>
              <td>
                {data.priority === 'High'  && <span class="badge text-bg-danger">{data.priority}</span>}
                {data.priority === 'Medium' && <span class="badge text-bg-warning">{data.priority}</span>}
                {data.priority === 'Low' && <span class="badge text-bg-primary">{data.priority}</span>}
             

                </td>
              <td>
                {data.status === 'Progess'  && <span class="badge text-bg-warning">{data.status}</span>}
                {data.status === 'Pending' && <span class="badge text-bg-primary">{data.status}</span>}
                {data.status === 'Completed' && <span class="badge text-bg-success">{data.status}</span>}
                {data.status === 'Not Completed' && <span class="badge text-bg-danger">{data.status}</span>}

                </td>
              <td >
                {new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
               
              </td>
              <td>{new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>

              <td>
                <button className="btn btn-outline-warning" style={{ margin: '1px' }} onClick={() => handleStatus(data._id, "Progess")}>Progess</button>
                <button className="btn btn-outline-success" style={{ margin: '1px' }} onClick={() => handleStatus(data._id, "Completed")}>Completed</button>
                <button className="btn btn-outline-danger" style={{ margin: '1px' }} onClick={() => handleStatus(data._id, "Not Completed")}>Not Completed</button>
              </td>

            </tr>
          )
        })}



      </tbody>
    </table>
  )

}

export default Table;
