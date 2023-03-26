import { Container,VStack,Heading,Input,Button,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
   <Container maxW={'container.xl'} h={'100%'} p={'16'}>

        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={["full","96"]} m={'auto'} my={'16'} >
                <Heading textAlign={'center'}>SHELBY PVT LTD SIGNUP</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'} />
                <Input placeholder={'Name'} type={'text'} required focusBorderColor={'twitter.500'}/>

                <Input placeholder={'Email'} type={'email'} required focusBorderColor={'twitter.500'}/>

                <Input placeholder={'Password'} type={'password'} required focusBorderColor={'twitter.500'}/>
        
                <Button colorScheme={'twitter'} type={'submit'}>
                SIGN UP
                </Button>

                <Text textAlign={'right'}>
                Already Signed Up ?{' '}
                <Button variant={'link'} colorScheme={'twitter'}>
                    <Link to={'/login'}>LogIn</Link>
                </Button>
                </Text>
          


            </VStack>
        </form>

   </Container>
  )
}

export default Signup
