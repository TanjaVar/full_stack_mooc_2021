import React from 'react'

// display notification when adding, deleting or updating phonebook information
const Notification = ( message ) => {
    if (message==null) {
        return null
    }
    
    return (
        <div>
            {message}
        </div>
    )
}

export default Notification