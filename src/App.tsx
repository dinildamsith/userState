import Home from "./pages/Home";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
function App() {
  return (
    <>
        <NextUIProvider>
            <Home/>
        </NextUIProvider>
    </>
  )
}

export default App
