import React from 'react'
import NavigationBar from './NavigationBar'
const DeleteEmployee = () => {
  return (
    <div>
         <NavigationBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 con-md-12 con-lg-12 con-xl-12 con-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">empcode</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteEmployee