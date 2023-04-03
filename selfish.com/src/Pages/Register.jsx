import React from 'react'
import {Box ,Image,Heading} from '@chakra-ui/react'
import {ArrowLeftIcon} from '@chakra-ui/icons'
import {
  Flex,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
 
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Footer from './footer';
import { useRef } from 'react';
  import { useState,useEffect } from 'react';
  import { useNavigate } from "react-router-dom";
  import toast, { Toaster } from 'react-hot-toast';
  import { useContext } from 'react';
  import { Authcontext } from '../Context/AuthContext';
  import axios from 'axios'


const Register = () => {
  const{isAuth,login1}=useContext(Authcontext)
  const [showPassword, setShowPassword] = useState(false);
  const[signup,setsignup]=useState(false)
  const name=useRef(' ')
  const surname=useRef(' ')
  const email=useRef(' ')
  const pass=useRef(' ')

  
  const loginemail=useRef(' ')
  const loginpass=useRef('')
  const navigate=useNavigate()
  const handleclick= async()=>{
   
    const Name=name.current.value 
    const Surname=surname.current.value
    const Pass=pass.current.value
    const Email=email.current.value



if(Name=="" ){
  toast.error("please fill the name")
}else if(Surname==""){
  toast.error("please fill the Surname")
}
else if(Pass==""){
  toast.error("please fill the password")
}
else if(Email==""){
  toast.error("please fill the email")
}
else{
  localStorage.setItem("name",Name+" "+Surname)
  localStorage.setItem( "email",Email);
  localStorage.setItem( "pass",Pass);
  toast.success("Signup successfully")
 setsignup(true)
 
}
  
}



const handleclick2=()=>{

   
   const Pass1=loginpass.current.value
   const Email1=loginemail.current.value

   let email1 = localStorage.getItem('email')
   let pass1 = localStorage.getItem('pass')

   


if(Email1==email1 && Pass1==pass1 ){
   
  
  login1(true)
 
 toast.success("login successfully")

 setInterval(function () {
 
  window.location.href = "/"}, 400);
 
}else if(Email1=="eve.holt@reqres.in" && Pass1=="cityslicka"){
  toast.success("Admin Login Sucessfully")
  let obj={
    "email": Email1,
    "password":Pass1
  }
  try {
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj),
    }).then((res)=>res.json())
  .then((res)=> {
    if(res.token){
      login1(res.token)
      navigate("/adminpage")
    }
  })
  } catch (error) {
    console.log(error)
  }
}

else if(Pass1!=loginpass){
 toast.error("Wrong password")
}else if(Email1!=loginemail){
  toast.error("Wrong Email")
}

 
}
console.log("login",isAuth)
  return (
    <div>
     <Toaster/>
      <Box>
       
     <Heading mt="20px">SIGN IN & REGISTER</Heading>
      </Box>
      <Box></Box>
      <Box  display={"flex"}  >
      <Box w="50%" paddingLeft="40px" >
      <Flex
    paddingLeft="50px"
      minH={'100vh'}
    
      justify={'center'}
    >
      <Stack spacing={8} w="100%" py={12} px={6}  >
        
        <Box
         
          bg={useColorModeValue('white', 'gray.700')}
       
          border="1px solid gray"
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={loginemail} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={loginpass}  />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }} onClick={handleclick2}  >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Box>
      
    {signup? <Box   w="35%" marginLeft={10} mt="150px"  border="1px solid red" h="100px" display="flex" gap={5} >
<Heading marginLeft={20} mt="15px"><ArrowLeftIcon/> </Heading><Heading mt="18px">Login First</Heading>
    </Box>:
      <Box  w="65%" marginRight={"50px"} >
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"white"}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} >
       
        <Box
         mt="-50px"
         bg={"white"}
         border="1px solid gray"
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  ref={name} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"  ref={surname}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  ref={email} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} ref={pass} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="profile" >
              <FormLabel>Profile Pic</FormLabel>
              <Input type="src" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }} onClick={handleclick}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} >
                Already a user? <Link color={'blue.400'} onClick={()=> setsignup(true)}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Box>
}
    </Box>
              
    <Box>
        <Footer/>
      </Box>
    </div>
  )
}

export default Register
