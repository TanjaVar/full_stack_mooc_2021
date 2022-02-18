import React from 'react'

const Filter = ({filterWith, onChange}) => {

    const handleFilterChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
        filter shown with:
        <input 
            value={filterWith}
            onChange={handleFilterChange}
        />
        </>
    )
    }

export default Filter;