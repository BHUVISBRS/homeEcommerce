import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'


const Home = () => {
    return (
        <>
         <Box sx={{display:"flex"}}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Home</h1>
        </Box>
            </Box>
        </>
    )
}

export default Home



