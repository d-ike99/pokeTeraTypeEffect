import Layout from '../components/Layout/ Layout'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AllPokeIdProvider } from "../utils/context/AllPokeIdContext"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ChakraProvider>
        <AllPokeIdProvider>
          <Navbar />
          <Component {...pageProps} />
        </AllPokeIdProvider>
      </ChakraProvider>
    </Layout>

  )
}

export default MyApp
