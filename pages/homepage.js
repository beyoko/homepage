import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layout'
import Section from '../components/section'
import P from '../components/paragraph'
import TextTypeWrite from '../components/textTypeWrite'

const HomePage = () => {
  return (
    <Layout>
      <Container maxW="container.lg" p={8} my={4}>
        <Box
          borderRadius="lg"
          b={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m an indie app developer based in zh!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box>
            <Heading as="h2" variant="page-title">
              CIC
            </Heading>
            <P>what can u do</P>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <Link as={NextLink} href={'/tips'}>
              Tips
            </Link>
          </Heading>
          <Box></Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <Link as={NextLink} href={'/works'}>
              Works
            </Link>
          </Heading>
          <Box></Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            shradows
          </Heading>
          <List>
            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @beyoko
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default HomePage

export { getServerSideProps } from '../components/chakra'
