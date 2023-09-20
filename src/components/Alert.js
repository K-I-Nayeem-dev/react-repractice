import React from 'react'

function Alert(props) {
    return (
       <div style={{ height:'50px' }}>
         {props.alert &&  <div className="container">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <div class={`alert alert-${props.alert.typ} alert-dismissible fade show mt-1 text-center" role="alert`}>
                            <strong>{props.alert.typ} : </strong> {props.alert.msg}
                        </div>
                    </div>
                </div>
            </div>}
       </div>
    )
}

export default Alert
