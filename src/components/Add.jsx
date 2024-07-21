import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Add = () => {
        var[inputs, setInputs]=useState({ProductName:"",Image:"",Price:"",Category:""});
        const inputHandler=(e)=> {
            console.log(e.target.value);
            setInputs({...inputs,[e.target.name]:e.target.value});
            console.log(inputs);
        }
        const [file, setFile] = useState();
        function handleChange(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));}
            ;
  return (
    <div>
      <center>
            <Box id='hi'>
    <Typography variants="h1">Product Details </Typography>
     <br/><br/>
     <TextField variant="standard" label='Product Name'onChange={inputHandler}
        name="Product Name"
        value={inputs.ProductName}/>
     <br/><br/>
       <TextField id="standard-basic" label="Price" variant="standard" onChange={inputHandler}
        name="Price"
        value={inputs.Price}/> 
     <br/><br/>
     <TextField id="standard-basic" label="Category" variant="standard" onChange={inputHandler}
        name="Category"
        value={inputs.Category}/> 
     <br/><br/>
     <h4>Add Image</h4>
            <input type="file" onChange={handleChange} />
            <img src={file} />
     <br/><br/>
     <br/><br/>
     <Button variant="contained" color="secondary">Submit</Button>&nbsp;&nbsp;
     </Box>
     </center>
    </div>
  )
}

export default Add
