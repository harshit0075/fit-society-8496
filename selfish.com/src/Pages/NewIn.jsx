import React from 'react'
import {Box,Text,Image,Button ,Select} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import {ArrowRightIcon} from '@chakra-ui/icons'
const NewIn = () => {
  const[data,setdata]=useState([])
  const[order,setorder]=useState()
  const[filter,setfilter]=useState()
  const[colors,setcolors]=useState()
  const[loading,setloading]=useState(false)
    const getdata=(order,filter,colors)=>{
      let url;
      if(order){
        url=`http://localhost:8080/NEW-IN?&_sort=price&_order=${order}`
      }else if(filter){
        url=`http://localhost:8080/NEW-IN?type=${filter}&_sort=price&_order=${order}`
      }else if(colors){
        url=`http://localhost:8080/NEW-IN?color=${colors}&_sort=price&_order=${order}`
      }
      
      else{
        url=`http://localhost:8080/NEW-IN`
      }
      setloading(true)
      try {
        axios.get(url)
        .then((res)=> {
          
          setdata(res.data)
          setloading(false)
        })
        
      } catch (error) {
        console.log(error)
        setloading(false)
      }
     
    }

    useEffect(()=>{
      getdata(order,filter,colors)
    },[order,filter,colors])

    const handlechange=(e)=>{
    
      setfilter(e.target.value)
    }

    const handleprice=(e)=>{
      setorder(e.target.value)
    }

    const handlecolor=(e)=>{
      setcolors(e.target.value)
    }
    if(loading){
      return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
    }
  return (

    <Box>
     

      <Box w="100%" h="150px" mt="50px" >
        <Text fontWeight={600}> NEW IN</Text>
      <Box w="30%" h="200px" margin={"auto"} ><Text >The latest clothing, shoes and accessories from Burberry. Explore the Autumn/Winter 2023 collection of menswear, womenswear and childrenswear.</Text>
      </Box>
      </Box>
      <Box borderTop="1px solid gray" w="100%" h="70px" display={"flex"} gap="40px" alignItems={"center"} paddingLeft="320px" >
        <Box w="200px"><Select placeholder="COLOURS" onChange={handlecolor} >
          <option value="white"  > WHITE</option>
          <option value="black">BLACK</option>
          <option value="palegolden">PALEGOLDEN</option>
          <option value="peru">PERU</option>
          
        </Select></Box>
        <Box w="200px"><Select placeholder="TYPE" onChange={handlechange}>
          <option value="bag"  >BAG</option>
          <option value="t-shirt">T-SHIRT</option>
          <option value="Scaf">SCAF</option>
          <option value="shoe">SHOE</option>
         
          <option value="Coat">COAT</option>
        </Select></Box>
        <Box w="200px"><Select placeholder="PRICE" onChange={handleprice}>
          <option value="asc"  >LOW TO HIGH</option>
          <option value="desc">HIGH TO LOW</option>
         
        </Select></Box>
      
      </Box>

       
      <Box  display="grid" gridTemplateColumns={"repeat(3,1fr)"} gap="5px">
    {data.map((e)=><Box >
      <Link to={`/description/${e.id}`}>  <Image src={e.img} marginBottom="10px"></Image></Link>
    
      <Text fontWeight={500} marginBottom="10px">{e.title}</Text>
      <Text fontWeight={400} marginBottom="30px">₹ {e.price}</Text>
    </Box>)}
      </Box>

      <Button bg="white" border="1px solid black" borderRadius={"none"} marginBottom="50px">
        VIEW MORE < ArrowRightIcon ml="5px"/>
      </Button> 
    </Box>
    
  )
}

export default NewIn
