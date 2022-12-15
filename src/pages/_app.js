import Layout from '../components/Layout/ Layout'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Navbar>
    </Layout>

  )
}

export default MyApp
