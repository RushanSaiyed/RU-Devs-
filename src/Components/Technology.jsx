import React from 'react'

const Technology = (props) => {
    return (
        <>
         
                <div className="col-md-2 col-4">
                    <div className="tech">
                        <img src={props.img} alt="" />
                        {/* <h1>Hello</h1> */}
                    </div>
                </div>
            
        </>
    )
}

export default Technology