import React from "react";
import{Button,Input,Heading} from '@chakra-ui/react'
import {useState,useEffect,useRef} from 'react'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const Content = () => {
  const [data,setdata]=useState([])

  const title=useRef('')
  const price=useRef('')
  const image=useRef('')
  const des=useRef('')
  const getdata=()=>{
    try {
      axios.get(`http://localhost:8080/Mens`)
      .then((res)=>setdata(res.data))
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getdata()
  },[])


  const handlesubmit=()=>{
    toast.success("Product Added")
    getdata()
    const Title=title.current.value 
    const Price=price.current.value 
    const Des=des.current.value 
    const Image=image.current.value 
  
 
    axios.post('http://localhost:8080/Mens', {
      title: Title,
      price: Price,
      des:Des,
      img:Image,

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
console.log(data)
  return (
    
    <div  className={"content"} >
      <Toaster/>
       <h3>Mens Page</h3>
  <div  style={{ display:"flex",width:"1000px",height:"900px",gap:"20px"}}>
    
    <div style={{ width:"60%",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
    {data.map((e)=><div  style={{border:"1px solid red",height:"250px"}}>
      <img src={e.img} style={{width:"100%",height:"auto"}}/>
      <h4 style={{fontSize:"10px"}}>{e.title}</h4>
      <p style={{fontweight:"100px"}} >₹ {e.price}</p>
      <Button bg="red.500" borderRadius={"none"} color="white" onClick={  async()=>  await axios.delete(`http://localhost:8080/Mens/${e.id}`).then((res)=>getdata() )  }>Delete</Button>
    </div>)}
    </div>
    <div style={{width:"40%",height:"300px",border:"1px solid gray" ,paddingTop:"10px"}}>
      <Heading size="md" mb="10px">ADD PRODUCT HERE</Heading>
       <Input ref={title} w="70%" border="1px solid gray" borderRadius={"none"} mb="3px" placeholder="Enter Product Name" type="text"/>
       <Input ref={des} w="70%" border="1px solid gray" borderRadius={"none"} mb="3px" placeholder="Enter Product Details" type="text"/>
       <Input ref={price} w="70%" border="1px solid gray" borderRadius={"none"} mb="3px" placeholder="Enter Product Price" type="number"/>
       <Input ref={image} w="70%" border="1px solid gray" borderRadius={"none"} mb="3px" placeholder=" Product Image Url" type="src"/><br/>
       <Button onClick={handlesubmit}>Submit</Button>
    </div>
  </div>
     </div>
  )
};

export default Content;
