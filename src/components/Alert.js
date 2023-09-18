import React from 'react'

function Alert(props) {
    return (
        <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Alert
