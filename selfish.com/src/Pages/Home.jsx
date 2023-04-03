import React from 'react'
import { Box ,Image,Heading, Img , Flex } from '@chakra-ui/react'
import ReactPlayer from "react-player";
import Footer from './footer'
import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';
import { useMediaQuery } from '@chakra-ui/react'

const Home = () => {
  const{isAuth}=useContext(Authcontext)

  console.log("isasuth",isAuth)
  return (
    
      <Box>
     
        <Box>
       <Flex>
        
      <Img src="https://assets.burberry.com/is/image/Burberryltd/12F0687C-A571-4E2B-BA63-A992B5720314?$BBY_V2_ML_1x1$&wid=1251&hei=1251" w="50%" g="10px"/>
      <Img src="https://assets.burberry.com/is/image/Burberryltd/59D7DE09-64C1-48F8-AC4A-E239BA52A8F7?$BBY_V2_ML_1x1$&wid=1251&hei=1251"  w="50%" gap="10px" />
        
       </Flex>
      
     
       </Box>
       
        <Box display={"grid "} gridTemplateColumns="repeat(2,1fr)" gap="5px">
        
<Image h="800px" w="100%" src="https://assets.burberry.com/is/image/Burberryltd/BE9F4619-2978-4D6E-9166-A117A63CC2E0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"></Image>
<Image h="800px" w="100%" src="https://image.harrods.com/15/12/97/08/15129708_30810924_2048.jpg"></Image>
<Image h="500px" w="100%"  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screenshot-2022-02-18-at-09-41-51-1645177324.jpg?crop=0.9686876572122474xw:1xh;center,top&resize=1200:*"></Image>
<Image h="500px" w="100%"  src='https://assets.burberry.com/is/image/Burberryltd/902F4B7C-1839-470E-ADF6-88CCB54D208C?$BBY_V2_SL_3x4$&wid=1278&hei=1700'></Image>
        </Box>
        <Box p="400px"  >
          <Image mt="-300px" w="100%" h="500px" src="https://a.1stdibscdn.com/archivesE/upload/v_842/1495138567864/18097_01_Burberry_Clifton_Convertible_Tote_Heritag_2D_0004_l.jpg"></Image>
       <Heading fontWeight={600} as='h3' size='lg' marginBottom={"10px"} data-aos="fade-right">CHILDREN</Heading>
       <Heading fontWeight={600} as='h3' size='lg' marginBottom={"10px"} data-aos="fade-left">THE TRENCH COAT</Heading>
       <Heading fontWeight={600}  as='h3' size='lg'>SCARVES</Heading>
        </Box>

        <Box mt="-250px"  paddingBottom={"100px"}   bg="white" borderTop={"1px solid gray"} >

          <Footer/>
        </Box>
        
       
      </Box>
    
   
  )
}

export default Home


