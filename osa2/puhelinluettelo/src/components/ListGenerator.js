import React from 'react';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ListGenerator = ({ person, deletePersonFromPhonebook }) => {
    return (
        <>
            <Grid container spacing={2} variant="outlined">
                <Grid item xs={4}>
                    <p class="phonebookitem">{person.name}</p>
                </Grid>
                <Grid item xs={4}>
                    <p class="phonebookitem">{person.phonenum}</p>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={deletePersonFromPhonebook} variant="outlined" color="error" sx={{margin: "6px"}}>delete</Button>
                    {/* <button class="delete" onClick={deletePersonFromPhonebook}>delete</button>*/}
                </Grid>
            </Grid>
        </>
    )  
}

export default ListGenerator;