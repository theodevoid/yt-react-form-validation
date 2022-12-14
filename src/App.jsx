import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const registerUser = () => {
    alert("Submit form!");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      kataSandi: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(10),
      email: yup.string().required("email wajib diisi").email(),
      kataSandi: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"
        ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <Container py="10">
      <Heading>Example Form</Heading>
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing="3">
            <FormControl isInvalid={formik.errors.username}>
              <FormLabel>Username</FormLabel>
              <Input onChange={handleForm} type="text" name="username" />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.email}>
              <FormLabel>Email</FormLabel>
              <Input onChange={handleForm} type="email" name="email" />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.kataSandi}>
              <FormLabel>Password</FormLabel>
              <Input onChange={handleForm} type="password" name="kataSandi" />
              <FormErrorMessage>{formik.errors.kataSandi}</FormErrorMessage>
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
