import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
