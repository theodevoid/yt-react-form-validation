import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

function App() {
  return (
    <Container py="10">
      <Heading>Example Form</Heading>
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <form>
          <Stack spacing="3">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input />
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Register Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default App;
