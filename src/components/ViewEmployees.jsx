import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployees = () => {

const [data, changeData] = useState(
  [
    { "name": "liya sebastian","code":"001","number":"8848888901","designation":"Software Engineer" },
    { "name": "krishna gadha ug","code":"002","number":"8848978902","designation":"web Developer" },
     { "name": "angel wilson","code":"003","number":"8844568903","designation":"tester" },
    { "name": "maria palatty","code":"004","number":"9717488904","designation":"HR" },
     { "name": "vinaya biju","code":"005","number":"9921889005","designation":"Frontend Developer" },
     { "name": "joyel joji","code":"006","number":"8848888900","designation":"Software Engineer" },
    { "name": "alant saji","code":"007","number":"8848978989","designation":"web Developer" },
     { "name": "charls thomas","code":"008","number":"8844568909","designation":"tester" },
    { "name": "varsha johnson","code":"009","number":"9717488912","designation":"HR" },
     { "name": "shaniya shaju","code":"010","number":"9921889045","designation":"Frontend Developer" },

  ]
)


  return (
    <div>
      <NavigationBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b><i>VIEW ALL EMPLOYEES</i></b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Code</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          
                <tbody>
                  {data.map
          (
            (value,index)=>{
              return(
            <tr>
              <td>{value.name}</td>
              <td>{value.code}</td>
              <td>{value.number}</td>
              <td>{value.designation}</td>
            </tr>

             )
            }
          )}
          </tbody>
             
          
        </table>
      </div>
    </div>
  )
}

export default ViewEmployees