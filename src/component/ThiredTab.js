import { Button, Card, Grid } from '@mui/material'
import React from 'react'

function ThiredTab() {
  const section = {
    height: "100%",
    paddingTop: 5,
    backgroundColor:"#644F9C"
  };
  return (
    <><Grid container spacing={9}>
    <Grid className='mx-4' item xs={4} md={4}>
    <Card  className="mx-auto" variant="outlined"  style={section}>Hello</Card>
    </Grid>
    <Grid  justify="flex-start" style={{textAlign:"initial"}} item xs={6} md={6}>
       <h1>Native</h1>
       <p>Stretches the lines so that each line has equal width (like in newspapers and magazines.Stretches the lines so that each line has equal width (like in newspapers and magazines)</p>
    <Button>Example</Button>
    </Grid>
  </Grid></>
  )
}

export default ThiredTab