

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import {  Divider } from '@mui/material';
import Card from './Card';
function MainContent() {
  return (
<Container maxWidth="md" sx={{margin:"100px auto"}}>
<Grid container spacing={2}>
    <Grid item xs={6}>
<div>
  <h4>9:10 || 19  `2023 سبتمبر</h4>
  <h4>مكه المكرمه </h4>
</div>
    </Grid>
    <Grid item xs={6}>
    <div>
  <h4>باقي من الوقت علي الصلاه القادمه</h4>
  <h4>1:12:12</h4>
</div>
    </Grid>
    </Grid>
    <Divider sx={{borderColor:"white" ,opacity:"0.2", margin:"10px"}}   />  
    <Stack
    my="0px"
    minHeight="300px"
    gap='10px'
  direction={{ xs: 'column', sm: 'row' }}


  justifyContent="space-between"
  alignItems="center"

>
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</Stack>
</Container>
  )
}

export default MainContent