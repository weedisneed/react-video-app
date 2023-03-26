import React from 'react'
import {Box, Image, Heading, Container, Stack,Text} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.png';

const headingOptions ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            
            <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>Services</Heading>

            <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >
                <Image src={img6} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>
                
                <Text lineSpacing={'widest'} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}>
            The Peaky Blinders were a street gang based in Birmingham, England, which operated from the 1880s until the 1910s. The group consisted largely of young criminals from lower- to middle-class backgrounds. They engaged in robbery, violence, racketeering, illegal bookmaking, and control of gambling. Members wore signature outfits that typically included tailored jackets, lapelled overcoats, buttoned waistcoats, silk scarves, bell-bottom trousers, leather boots, and peaked flat caps.

The Blinders' dominance came about from beating rivals, including the "Sloggers" ("a pugilistic term for someone who could strike a heavy blow in the ring"[1]), whom they fought for territory in Birmingham and its surrounding districts. They held “control” for nearly 20 years until 1910, when a larger gang, the Birmingham Boys, led by Billy Kimber, overtook them. Although they had disappeared by the 1920s, the name "Peaky Blinders" became synonymous slang for any street gang in Birmingham.

In 2013, the name was reused for a BBC television series entitled Peaky Blinders. The series, which stars Cillian Murphy, Paul Anderson, and Joe Cole, is a crime story about a fictional crime family operating in Birmingham just after World War I.
                </Text>
            </Stack>
        </Container>

    </Box>
  )
}

const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOptions}>Shelby Family</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.300'} color={'black'} {...headingOptions}>Shelby Brothers</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>Thomas Shelby</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.400'} color={'black'} {...headingOptions}>Garrision Lane</Heading>
        </Box>
    </Carousel>
)

export default Home
