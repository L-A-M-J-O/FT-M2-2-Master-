import React from 'react'

export default class Botones extends React.Component(props) {
    render(){

        return (
            <div>
                <button onClick={() => alert(this.props.alert.m1)}>Modulo 1</button>
                <button onClick={() => alert(this.props.alert.m2)}>Modulo 2</button>
            </div>
        )
    }
}
