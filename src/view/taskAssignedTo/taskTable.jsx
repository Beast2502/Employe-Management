import React from "react";
import "./task.css";

import ViewListIcon from '../../assets/viewListIcon.svg'


const TaskTable = ({data ,handleModalData ,handleStatus}) => {

    return (

        <table className="table table-responsive text-start">
            <thead className="table-head-color">
                <tr>
                    <th scope="col" className="th-container">S.no.</th>
                    <th scope="col" className="th-container">Task Desc</th>
                    <th scope="col" className="th-container">Assign To</th>
                    <th scope="col" className="th-container">Department</th>

                    <th scope="col" className="th-container">Priority</th>

                    <th scope="col" className="th-container">Status</th>
                    <th scope="col" className="th-container">Created At</th>
                    <th scope="col" className="th-container">Updated At</th>
                    <th scope="col" className="th-container">Verify</th>
                    <th scope="col" className="th-container">Actions</th>

                    
                </tr>
            </thead>
            <tbody>
                {data.map((data, i) => {
          return (
            <tr>
              <td scope="row">{i + 1}</td>
              <td>{data.task_desc}</td>
              <td>{data.assign_to}</td>
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
              <td>{new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>
              <td>{new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>
              <td>{data.verify ? <span class="badge text-bg-success">Verified</span> : <span class="badge text-bg-danger">Not Verified</span>}</td>

              <button className="btn btn-outline-success" style={{ margin: '1px' }} onClick={() => handleStatus(data._id, data.verify)}>Check</button>
            </tr>
          )
        })}



            </tbody>
        </table>
    )


}

export default TaskTable;