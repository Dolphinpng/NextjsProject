import { Box,Flex,Spacer,Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import {FaBed,FaBath} from "react-icons/fa"
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import ImageScrollbar from "../../components/ImageScrollbar"
import { baseUrl,fetchApi } from "../../utils/fetchApi";





const PropertyDetails = ({ propertyDetails :  { price,rentFrequency, rooms,title,baths, area,agency,isVerified,description,purpose,furnishingStatus,amenities, photos,type}}) => (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}
            <Box w="full" p="6">
                <Flex paddingTop="2" alignItems="center">
                    <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>} </Box>
                    <Text fontWeight="bold" fontSize="lg">
                        AED {price} {rentFrequency && `/${rentFrequency}`}
                    </Text>
                    <Spacer/>
                    <Avatar size="sm" src={agency?.logo?.url}></Avatar>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed/>  | {baths} <FaBath/>  | {millify(area)} sqft <BsGridFill/>
                </Flex>
            </Box>
            <Box marginTop="2" >
                <Text fontSize="lg" marginBottom="2" fontWeight="bold">{title}</Text>
                <Text lineHeight="2" color="gray.600" >{description}</Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" bordercolor="gray.100" p="3">
                    <Text>Type</Text>
                    <Text fontWeight="bold">{type}</Text>
                </Flex>
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" bordercolor="gray.100" p="3">
                    <Text>Purpose</Text>
                    <Text fontWeight="bold">{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                      <Flex justifyContent="space-between" w="400px" borderBottom="1px" bordercolor="gray.100" p="3">
                      <Text>Furnishing Status</Text>
                      <Text fontWeight="bold">{furnishingStatus}</Text>
                  </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5">Facilites</Text>}
             <Flex flexWrap="wrap">
                 {amenities?.map((item)=> (
                     <Text key={item.text} fontWeight="bold" color="blue.400" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5">
                         {item.text}
                     </Text>
                 ))}
             </Flex>
            </Box>

        </Box>
    )


export async function getServerSideProps ({params: {id}}) {
    const data = await fetchApi (`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data,
        }
    }
}



export default PropertyDetails
