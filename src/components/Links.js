import React from 'react'

function Links(props) {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <h1 style={{ color: props.darkMode ==='dark'? 'white' : 'black' }}>hello this is Link Page</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links
