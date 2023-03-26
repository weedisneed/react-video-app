import { Box,Stack,Heading,HStack,Button,VStack,Input,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"
const Footer = () => {
  return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
            <Stack direction={['column','row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
                        Subscribe for Our Paid Services
                    </Heading>


                    <HStack 
                    borderBottom={'2px solid white'}
                    py="2"
                    >

                        <Input placeholder='Enter Email Here...' border={'none'}
                        borderRadius="none"
                        outline={'none'}
                        focusBorderColor="none"
                        />
                        <Button p={'0'} colorScheme={'twitter'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend  size={'20'}/>
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'}
                borderLeft={["none","1px solid white"]}
                borderRight={["none","1px solid white"]}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'}>SHELBY PVT LTD</Heading>
                    <Text>All Rights Reserved  WEEDISNEED</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://leetcode.com/weedisneed/">LeetCode</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://www.hackerrank.com/TommyShelby?hr_r=1">Hackerrank</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://github.com/weedisneed/">Github</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://www.linkedin.com/in/ashutosh-anand-a069a5212/">LinkedIn</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
