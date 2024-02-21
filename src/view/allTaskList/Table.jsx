import React from "react";
import "./Tables.css"
import ViewListIcon from '../../assets/viewListIcon.svg'

const Table = ({ list, handleModalData, viewbtn }) => {

  return (
    <table className="table table-responsive text-start" style={{marginBottom:'50px'}}>
      <thead className="table-head-color">
        <tr>
          <th scope="col" className="th-container">S.no.</th>
          <th scope="col" className="th-container">Task Desc</th>
          <th scope="col" className="th-container">Assign From</th>
          <th scope="col" className="th-container">Assign To</th>
          <th scope="col" className="th-container">Status</th>
          <th scope="col" className="th-container">Created At</th>
          <th scope="col" className="th-container">Updated At</th>
          {/* <th scope="col" className="th-container">Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {list.map((data, i) => {
          return (

            <tr>

              <td scope="row">{i + 1}</td>
              <td>{data.task_desc}</td>
              <td>{data.assign_from}</td>
              <td>{data.assign_to}</td>
              <td>
                {data.status === 'Progess'  && <span class="badge text-bg-warning">{data.status}</span>}
                {data.status === 'Pending' && <span class="badge text-bg-primary">{data.status}</span>}
                {data.status === 'Completed' && <span class="badge text-bg-success">{data.status}</span>}
                {data.status === 'Not Completed' && <span class="badge text-bg-danger">{data.status}</span>}

                </td>
              <td>{new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>
              <td>{new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>

              {/* <td>
                <button className="btn btn-warning" style={{margin:'10px'}}>Progess</button>
                <button className="btn btn-success" style={{margin:'10px'}}>Completed</button>
                <button className="btn btn-danger" style={{margin:'10px'}}>Not Complted</button>
              </td> */}

            </tr>
          )
        })}



      </tbody>
    </table>
  )

}

export default Table;
