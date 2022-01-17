import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import {ChakraProvider} from "@chakra-ui/react"
import Head from "next/head"


import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
     <Head>

     </Head>
     <ChakraProvider>
    <Layout>
     <Component {...pageProps} />
      </Layout>
     </ChakraProvider>
     </>
  )
}

export default MyApp
