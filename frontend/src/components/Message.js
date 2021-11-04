import React from 'react'

const Message = ({color, children}) => {
    return (
        <div className={`alert alert-${color}`} role="alert">
            {children}
        </div>
    )
}

Message.defaultProps = {
    color: "primary"
}

export default Message
