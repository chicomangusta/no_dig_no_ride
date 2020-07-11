import React, { Component } from 'react'

class Bikes extends Component {



    render () {
        return (
            <>
                {this.props.bikes.map( bike => {
                    return  (
                        <div key={bike.id} className="bike">
                            <h3> { bike.brand }      </h3>
                            <h3> { bike.name }       </h3>
                            <h3> { bike.size }       </h3>
                            <h3> { bike.type }       </h3>
                            <h3> { bike.suspension } </h3>
                            <h3> { bike.shox }       </h3>
                            <h3> { bike.wheel_size } </h3>
                            <h3> { bike.rear_der }   </h3>
                            <h3> { bike.dropper }    </h3>
                            <h3> { bike.year }       </h3>
                        </div>
                    )
                })}
            </>
        )
    }
}


export default Bikes;