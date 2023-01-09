import Layout from '../components/Layout/ Layout'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AllPokeIdProvider } from "../utils/context/AllPokeIdContext"
import { PokeIdProvider } from '../utils/context/PokeIdContext'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ChakraProvider>
        <AllPokeIdProvider>
          <PokeIdProvider>
            <Navbar />
            <Component {...pageProps} />
          </PokeIdProvider>
        </AllPokeIdProvider>
      </ChakraProvider>
    </Layout>

  )
}

export default MyApp
