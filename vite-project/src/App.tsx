import { useState } from "react";
import { Button, ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import HeaderProvider from "../components/Header/Header";

// const theme = extendBaseTheme({
//   mainColor=""
// })

function App() {
  return (
    <ChakraProvider>
      <HeaderProvider>
        <div>
          <Button>123</Button>
          <h1>tess</h1>
        </div>
      </HeaderProvider>
    </ChakraProvider>
  );
}

export default App;
