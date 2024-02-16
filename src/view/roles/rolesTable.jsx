import React from "react";
import ViewListIcon from '../../assets/viewListIcon.svg'


const RolesTable = ({rolesList ,handleModalData}) => {

    return (
        <table className="text-start">
            <thead className="table-head-color">
                <tr>
                    <th scope="col" className="th-container">S.No.</th>
                    <th scope="col" className="th-container">Name</th>
                    <th scope="col" className="th-container">Permissions</th>
                    <th scope="col" className="th-container">Actions</th>
                </tr>
            </thead>

            <tbody>
                {rolesList && rolesList.map((data, i) => {
                    return (

                        <tr>

                            <td scope="row">{i + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.permissions.map((data) => {
                                return `${data},`;
                            })}</td>
                            <td><img src={ViewListIcon}  style={{cursor:'pointer'}} onClick={() => handleModalData(data)}/></td>
                        </tr>
                    )
                })}



            </tbody>
           
        </table>

    )

}

export default RolesTable;