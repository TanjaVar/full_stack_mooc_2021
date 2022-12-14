

// Notification component which returns error message
// if note content is empty, then displays default error message from App.js state 'errorMessage' state
const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="errorMessage">
        {message}
        </div>
    )
}

export default Notification