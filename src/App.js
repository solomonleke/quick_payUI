
import { ChakraProvider } from "@chakra-ui/react";
import IndexRoutes from "./Routes/Index";
import themeChakra from "./Utils/Theme";

function App() {
  return (
    <ChakraProvider theme={themeChakra}>

    <IndexRoutes />

  </ChakraProvider>
  );
}

export default App;
