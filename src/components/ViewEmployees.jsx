import React from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployees = () => {
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
              <th scope="col">#</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Code</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ann Maria</td>
              <td>EMP001</td>
              <td>9876543210</td>
              <td>Software Engineer</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Anu Maria</td>
              <td>EMP002</td>
              <td>9876543211</td>
              <td>HR Manager</td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Liya Sebastian</td>
              <td>EMP003</td>
              <td>9876543212</td>
              <td>UI/UX Designer</td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>Meera Joseph</td>
              <td>EMP004</td>
              <td>9876543213</td>
              <td>Project Manager</td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>Angel Wilson</td>
              <td>EMP005</td>
              <td>9876543214</td>
              <td>System Analyst</td>
            </tr>

            <tr>
              <th scope="row">6</th>
              <td>Sneha Roy</td>
              <td>EMP006</td>
              <td>9876543215</td>
              <td>QA Engineer</td>
            </tr>

            <tr>
              <th scope="row">7</th>
              <td>Alant Saji</td>
              <td>EMP007</td>
              <td>9876543216</td>
              <td>Backend Developer</td>
            </tr>

            <tr>
              <th scope="row">8</th>
              <td>Neha Mathew</td>
              <td>EMP008</td>
              <td>9876543217</td>
              <td>Frontend Developer</td>
            </tr>

            <tr>
              <th scope="row">9</th>
              <td>John Mathew</td>
              <td>EMP009</td>
              <td>9876543218</td>
              <td>Network Engineer</td>
            </tr>

            <tr>
              <th scope="row">10</th>
              <td>Priya Menon</td>
              <td>EMP010</td>
              <td>9876543219</td>
              <td>Database Administrator</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewEmployees