import React from "react";
import "./Tables.css"
import ViewListIcon from '../../assets/viewListIcon.svg'

const Table = ({ list, handleModalData, viewbtn }) => {

  return (
    <table className="text-start">
      <thead className="table-head-color">
        <tr>
          <th scope="col" className="th-container">S.no.</th>
          <th scope="col" className="th-container">Name</th>
          <th scope="col" className="th-container">Email</th>
          <th scope="col" className="th-container">Mobile No.</th>

          <th scope="col" className="th-container">Active</th>
          {viewbtn && <th scope="col" className="th-container">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {list.map((data, i) => {
          console.log(data.userName,"DATA")
          return (

            <tr>

              <td scope="row">{i + 1}</td>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.isActive ? <span class="text-success">Active</span> : <span class="text-danger">Inactive</span>}</td>
              {viewbtn && <td><img src={ViewListIcon}  style={{cursor:'pointer'}} onClick={() => handleModalData(data)}/></td>}
            </tr>
          )
        })}



      </tbody>
    </table>
  )

}

export default Table;
