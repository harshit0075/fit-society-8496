import React from 'react'
import {Box,Text,Heading,Image} from '@chakra-ui/react'
import Footer from './footer'
const Outwear = () => {
  return (
    <div>
     
      <Heading color="#521B41" as='h3' size='lg' marginBottom={"20px"} marginTop="10px">OUTWEAR FOR MENS & WOMENS </Heading>
      <Box w="100%" h="auto" display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap="4px">
      <Box>
        <Image src="https://assets.burberry.com/is/image/Burberryltd/F14593D9-2D17-4F5D-BCFE-47B1273C5F09?$BBY_V2_ML_1x1$&wid=1251&hei=1251"></Image>
         <Text marginBottom={"30px"} marginTop="10px" fontWeight={400} >Women's</Text>
      </Box>
      <Box>
        <Image  src="https://assets.burberry.com/is/image/Burberryltd/B8B9D041-2C00-4D39-B257-52B18EC936DC?$BBY_V2_ML_1x1$&wid=1251&hei=1251"></Image>
         <Text marginBottom={"30px"} marginTop="10px">Men's</Text>
      </Box>
      <Box>
        <Image  src="https://assets.burberry.com/is/image/Burberryltd/C4146497-8FC2-4B1F-AED7-71F1C1C59106?$BBY_V2_ML_1x1$&wid=1251&hei=1251"></Image>
         <Text marginBottom={"30px"} marginTop="10px">Women's</Text>
      </Box>
      <Box>
        <Image src="https://assets.burberry.com/is/image/Burberryltd/7946113A-DE6A-4574-9DC4-06E49514AFE7?$BBY_V2_ML_1x1$&wid=1251&hei=1251"></Image>
         <Text marginBottom={"30px"} marginTop="10px">Men's</Text>
      </Box>

      </Box>
      <Footer/>
    </div>
  )
}

export default Outwear
