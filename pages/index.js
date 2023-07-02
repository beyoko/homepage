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
import TextTypeWrite from '../components/textTypeWrite'

const Home = () => {
  return (
    <Layout>
      <Container maxW="container.lg" p={8} my={4}>
        <Box
          borderRadius="lg"
          b={7}
          p={7}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <TextTypeWrite>
            Hello, I&apos;m an indie app developer based in zh!
          </TextTypeWrite>
        </Box>

        <Box textAlign="center">
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
        </Box>
      </Container>
    </Layout>
  )
}

export default Home

export { getServerSideProps } from '../components/chakra'
