import React from 'react';

const Footer = () => {
    const footerStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: '14'
    }

    return (
        <div style={footerStyle}>
        <em>Note App, University of Helsinki</em>
        </div>
    )
}

export default Footer