import React from 'react'
import { Card,Box, CardHeader, CardBody, CardFooter,Heading,Text,Stack,ButtonGroup,Button,Image,Divider } from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const getdata=(id)=>{
 // console.log("id:",id)
  let url;
  if(id>=22 && id<=32){
    url=`http://localhost:8080/Mens/${id}`
  }else if(id>=10 && id<=21){
    url=`http://localhost:8080/Womens/${id}`
  }else if(id>=1 && id<=9){
    url=`http://localhost:8080/NEW-IN/${id}`
  }
  return fetch(url).then((res)=> res.json())
}
const SinglePage = () => {
  const [Data,setData]=useState({})
  let params=useParams()
  
  const newdata=(id)=>{
    getdata(id).then((data)=> 
    
    setData(data))

  }
  useEffect(()=>{
    newdata(params.id)
   },[params.id])

   const Name=Data.title
   const Img =Data.img 
   const Price =Data.price
   const addcart=()=>{
    
      toast.success("Product added to cart")
      axios.post('http://localhost:8080/CART', {
          title: Name,
          price: Price,
          img:Img
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    

  }
  return (
   <>
   <Toaster/>
   
   <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
   w="50%"
    src={Data.img}
    alt='Caffe Latte'
  />

<Card w="50%">
  <CardBody>
   
    <Stack >
    
      <Heading p="5px"  size='md' textAlign={"left"} alignItems="center">Product Name :- {Data.title}</Heading>
      

      <Box borderBottom={"1px solid gray"} borderTop="1px solid gray" p="5px" h="auto" paddingTop={5}  paddingBottom={5}>
        <Heading size='md' marginBottom={"10px"} textAlign={"left"}>PRODUCT DETAILS</Heading>
        <Text textAlign={"left"}>
       {Data.des}
      </Text>
      </Box>
     <Box borderBottom={"1px solid gray"}  h="70px"  p="5px" paddingBottom={20}>
     <Heading size='md' marginBottom={"0px"} textAlign={"left"}>Colors</Heading>
     <Box textAlign={"left"} display="flex"  gap="5px" >
      <Text marginTop={"5px"} fontWeight={500}>Available Colors :- </Text>
      <Button  isDisabled={Data.color=="white"?false:true}   borderRadius={"55%"}   w="30px" bg="white" border="1px solid gray"></Button>
      <Button  isDisabled={Data.color=="black"?false:true}   borderRadius={"55%"}   w="30px" bg="black" border="1px solid gray"></Button>
      <Button isDisabled={Data.color=="gray"?false:true} borderRadius={"55%"}   w="30px" bg="gray" border="1px solid gray"></Button>
     <Button isDisabled={Data.color=="red"?false:true} borderRadius={"55%"}   w="30px" bg="#F56565" border="1px solid gray"></Button>
     <Button isDisabled={Data.color=="pink"?false:true} borderRadius={"55%"}   w="30px" bg="pink" border="1px solid gray"></Button>
     <Button isDisabled={Data.color=="navyblue"?false:true} borderRadius={"55%"}   w="30px" bg="#1A365D
" border="1px solid gray"></Button>
     <Button isDisabled={Data.color=="palegolden"?false:true} borderRadius={"55%"}   w="30px" bg="#FBD38D" border="1px solid gray"></Button>
     <Button isDisabled={Data.color=="cholate"?false:true} borderRadius={"50%"}   w="30px" bg="#63171B" border="1px solid gray"></Button>
     
     
     
     </Box>
     
     </Box>
     <Box borderBottom={"1px solid gray"} h="70px"  p="5px"  paddingBottom={20}>
     <Heading size='md' marginBottom={"0px"} textAlign={"left"}>Size</Heading>
     <Box textAlign={"left"} display="flex"  gap="5px">
      <Text marginTop={"5px"} fontWeight={500}>Available Size :- </Text>
      <Button   borderRadius={"none"}  isDisabled={Data.size=="m"?false:true} >M</Button>
      <Button borderRadius={"none"} isDisabled={Data.size=="l"?false:true}>L</Button>
     <Button borderRadius={"none"} isDisabled={Data.size=="xl"?false:true}>XL</Button>
     <Button borderRadius={"none"} isDisabled={Data.size=="xxl"?false:true}>XXL</Button></Box>
     
     </Box>
     <Box alignItems={"center"} display="flex" gap="10px"  p="5px">
     <Heading size='md' textAlign={"left"}>Product Price</Heading>
      <Text color='blue.600' fontSize='2xl'>
        $ {Data.price}
      </Text>

     </Box>
    
    
    
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Box  w="500px">
    <ButtonGroup spacing={10}>
      <Button 
     w="300px"
      borderRadius={"none"}
      bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }} onClick={()=> window.location.href = "/paymentpage"}>
        Buy now
      </Button>
      <Button  
     w="300px"
      borderRadius={"none"}
      bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}   onClick={addcart}>
        Add to cart
      </Button>
    </ButtonGroup>
    </Box>
  </CardFooter>
</Card>
</Card>
   </>
  )
}

export default SinglePage
