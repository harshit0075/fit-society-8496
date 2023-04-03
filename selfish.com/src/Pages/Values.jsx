import React from 'react'
import {Box,Text,Heading,Image} from '@chakra-ui/react'
import Footer from './footer'
const Values = () => {
  return (
    <div>
     <Heading  as='h2' size='xl' marginBottom="40px" marginTop={"40px"} color="#4A5568">Values</Heading>
   <Box bg="gray.200">
    <Box w="100%" h="auto" >
      <Image src="https://assets.burberry.com/is/image/Burberryltd/3D0C93ED-30FB-42F9-87AE-A99418750115?wid=1920" w="50%"></Image>
      <Text>As we amplify our efforts globally, we understand that we need to collaborate with environmental leaders to make the largest possible impact. Our active participation in The Fashion Pact and UN Fashion Industry Charter for Climate Action has allowed us to accelerate solutions and drive change, whilst our key partnership with Land to Market at the Savory Institute will help to facilitate the regeneration of grasslands in the leather supply chain and the livelihoods of their inhabitants. Beyond this, we are the first luxury brand to sign up to the LEAF Coalition with an investment in providing financial aid to countries committed to making ambitious reductions in tropical deforestation.</Text>
    </Box>
    <Box display={"grid"} gridTemplateColumns="repeat(3,1fr)" bg="gray.200" gap="4px" marginTop={"10px"}>
  <Box>
    <Image src=""></Image>
    <Text></Text>
  </Box>
  <Box>
    <Image src=""></Image>
    <Text></Text>
  </Box>
  <Box>
  <Image  src=""></Image>
    <Text></Text>
  </Box>
    </Box>

    <Box w="100%" h="auto" marginTop={"10px"}>
      <Image src=""></Image>
      <Text></Text>
    </Box>
   </Box>
   <Footer/>
    </div>
  )
}

export default Values
