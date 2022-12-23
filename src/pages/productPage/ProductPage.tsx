import React from 'react';
import styles from "./productPage.module.scss";
import soup from "../../assets/tomatoSoup.png";
import burger from "../../assets/burgers.png";
import pizza from "../../assets/pizza.png";
import macaroon from "../../assets/macaroons.png";
import likes from "../../assets/likes.svg";
import loc from "../../assets/location-blue.svg";
import {useLocation} from "react-router-dom";
import {Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {property} from "../../utils/mockArray";

const ProductPage = () => {
    const {photo} = useLocation().state;

    return (
        <div className={styles.root}>
            <Flex justify={"center"}>
                <Image  m={10}
                    src={photo}
                    w={'40%'}
                    borderRadius={20}
                    alt={photo}
                />
                <Box alignSelf="center" w={"40%"}>
                    <Box lineHeight={2}>
                        <Flex>
                            <Heading alignSelf="center" size='md'>{property.name}</Heading>
                            <Image pl={4} src={loc} alt={loc}/>
                            <Text px={2}>{property.distance}</Text>
                        </Flex>
                        <Flex>
                            <Image src={likes} alt={likes}/>
                            <Text px={2}>{property.numbLikes}</Text>
                        </Flex>
                        <Flex mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviews} reviews
                            </Box>
                        </Flex>
                        <Text lineHeight={1.5}>{property.about}</Text>
                        <Heading alignSelf="center" size='md'>Pick Up Address</Heading>
                        <Text>{property.pickUpAddress}</Text>
                        <Flex>
                            <Heading alignSelf="center" size='md'>Available:</Heading>
                            <Text px={2}>{property.available}</Text>
                        </Flex>
                        <Flex>
                            <Heading alignSelf="center" size='md'>Quantity:</Heading>
                            <Text px={2}>{property.quantity}</Text>
                        </Flex>
                        <Heading alignSelf="center" size='md'>Food Type</Heading>
                        <Text >{property.type}</Text>
                    </Box>

                    <Box>
                        <Button width={"100%"} variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </Box>
                </Box>
            </Flex>

            <div className={styles.block}>
                <div>
                    <div style={{fontWeight: "700", fontSize: "16px"}}>Location</div>
                    <iframe style={{border: "none", width: "450px", height: "90%"}}
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27766.322249807687!2d30.4071148!3d53.9770381!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sby!4v1671362093372!5m2!1sru!2sby"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div style={{fontWeight: "700", fontSize: "16px"}}>You make also like:</div>
                    <div>
                        <div className={styles.otherFood}>
                            <img width={"40%"} src={burger} alt="soup"/>
                            <div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>Burger</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div> 4 burgers</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>Available:</div>
                                    <div> 4 - 6 pm</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.otherFood}>
                            <img width={"40%"} src={pizza} alt="soup"/>
                            <div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>pizza</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div> 4 burgers</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>Available:</div>
                                    <div> 4 - 6 pm</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.otherFood}>
                            <img width={"40%"} src={macaroon} alt="soup"/>
                            <div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>macaroon</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div> 4 burgers</div>
                                </div>
                                <div style={{display: 'flex', justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "700", fontSize: "14px"}}>Available:</div>
                                    <div> 4 - 6 pm</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductPage;