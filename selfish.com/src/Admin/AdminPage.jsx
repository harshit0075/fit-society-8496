import React from 'react'
import "./styles.css";
import {Box ,Heading} from '@chakra-ui/react'
import Content from '../Admin/Context'
import toast, { Toaster } from 'react-hot-toast';
const AdminPage = () => {
 
  return (
    <>
   <Box w="100%" h="50px" bg="#276749"><Heading size="lg" color="white">Welcome To Admin Page</Heading></Box>
    <div className="App">
     
    <Content />
  </div>
    </>
  
  )
}

export default AdminPage
