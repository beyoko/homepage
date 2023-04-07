import { Section, Text, Box, Container, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            work
          </Heading>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            think
          </Heading>
        </Section>
      </Box>
    </Container>
  );
};

export default Home;
