import React from 'react'
import Card from '@mui/material/Card'

const Filter = ({filterWith, onChange}) => {

    const handleFilterChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <Card sx={{padding: "10px"}} variant="outlined">
                Filter
                <input class="input"
                    value={filterWith}
                    onChange={handleFilterChange}
                />
            </Card>
        </>
    )
    }

export default Filter;