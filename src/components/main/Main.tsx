import React from 'react';
import {mockArray} from "../../utils/mockArray";
import {useNavigate} from "react-router-dom";
import {Box, GridItem, SimpleGrid, Image} from "@chakra-ui/react";
import navIcon from '../../assets/map.svg';
import soup from '../../assets/soup.svg';
import {useMediaQuery} from '@chakra-ui/react';

export default function Main() {
    const [isNoneMobileScreens] = useMediaQuery("(min-width:700px)")
    console.log(isNoneMobileScreens)
    const navigate = useNavigate();
    return (<Box>
            <SimpleGrid columns={4} spacing={10}>
                {mockArray.map((item, id) => (
                    <GridItem mt='2' mb='2' key={id}>
                        <Image width={"100%"} style={{cursor: "pointer", borderRadius: "10px"}}
                               onClick={() => navigate("/oneProd", {state: {photo: item.img}})} src={item.img}
                               alt="soup"/>
                        <div>
                            <Box display='flex' alignItems='baseline' fontSize={25}>
                                <Box noOfLines={1} mt='2' style={{fontWeight: "700"}}>{item.name}</Box>
                                <Image ml="2" borderRadius='full' boxSize='20px' src={soup} alt={soup}/>
                            </Box>
                            <Box display='flex' alignItems='baseline'>
                                <div style={{fontWeight: "700", fontSize: "16px"}}>Distance:</div>
                                <Box mt='1' ml="2" fontWeight='normal' as='h4' lineHeight='tight' noOfLines={1}
                                >
                                    {item.distance}
                                </Box>
                                <Image ml="2" borderRadius='full' boxSize='15px' src={navIcon} alt={navIcon}
                                />
                            </Box>
                            <Box display='flex' alignItems='baseline'>
                                <div style={{fontWeight: "700", fontSize: "16px"}}>Available:</div>
                                <Box mt='1' ml="2" fontWeight='normal' as='h4' lineHeight='tight' noOfLines={1}
                                >
                                    {item.available_time}
                                </Box>
                            </Box>

                            <Box display='flex' alignItems='baseline'>
                                <Box mt='1' fontWeight='normal' as='h4' lineHeight='tight' noOfLines={1}
                                >
                                    {item.description}
                                </Box>
                            </Box>
                        </div>
                    </GridItem>
                ))}

            </SimpleGrid>
        </Box>
    );
}