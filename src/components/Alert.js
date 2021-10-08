import React from 'react'

const Alert = (props) => {

    function capitalize(type) {
        let word = type.charAt(0).toUpperCase() + type.slice(1)
        return word
    }


    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>

    )
}

export default Alert
