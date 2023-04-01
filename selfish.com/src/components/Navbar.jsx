import React from 'react'
import { Box, Image, Flex, Text, Icon } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import Menubar from './MenuItem'
import { BsHandbagFill } from "react-icons/bs"

const Navbar = () => {
  const location = useLocation();
  const {data}=useSelector((store)=>store.cart)
  if (location.pathname.includes("admin")) {
    return <></>
  }
  return (
    <div>
      <Box width="90%" margin="auto">
        <Flex alignItems={"center"} justifyContent="space-around">
          <Box>
            <Link to="/"><Image src="https://logos-world.net/wp-content/uploads/2020/10/Burberry-Logo.png" width="200px" height="100px"></Image></Link>
          </Box>
          <Flex gap="20px">
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Gift</Text>
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>New in</Text>
            <Link to="/mens"><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Mens</Text></Link>
            <Link to="/womens"><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Women</Text></Link>
            <Link to="/kids"><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Children</Text></Link>
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Outwear</Text>
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Bags</Text>
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Stories</Text>
            <Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Values</Text>
          </Flex>
          <Flex gap="30px" alignItems={"center"}>
            <Icon as={AiOutlineSearch} fontSize={"20px"} fontWeight="500" />
            <Menubar />
          </Flex>
          <Link to="/cartpage"><Icon as={BsHandbagFill} fontSize={"20px"} fontWeight="500" /></Link>
          {
            data.length>0?<Text>{data.length}</Text>:null
          }
          
        </Flex>
      </Box>
    </div>
  )
}

export default Navbar