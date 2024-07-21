import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
        var [pro,setPro]=useState([]);
        useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                console.log(res);
                setPro(res.data)
    
            })
            .catch((error)=>{
                console.log(error);
            })
        },[])
  return (
    <div style={{marginLeft:'2%',marginRight:'2%',marginTop:'2%',marginBottom:'2%'}}>
      <Grid container spacing={10}>
        {pro.map((val,i)=>{
            return(
                <Grid item xs={10} md={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {val.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
               {val.title}
        </Typography>
         <Typography variant="body2" color="text.secondary">
               {val.price}
         </Typography>
         <Typography variant="body2" color="text.secondary">
               {val.category}
         </Typography>
      </CardContent>
    </Card>
            </Grid>
                
            )
        })}

      </Grid>
      
    </div>
  )
}

export default Home
