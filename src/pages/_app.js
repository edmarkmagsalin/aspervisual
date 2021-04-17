import Head from 'next/head'
import '@/styles/global.scss'
import { Preloader } from '@/components'
export default function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
		      <meta name="viewport" content="width=device-width, initial-scale=1" />
      	  <meta name="apple-mobile-web-app-capable" content="yes" />
		      <meta name="mobile-web-app-capable" content="yes" />
          <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
      </Head>

       <Preloader></Preloader>
      <Component {...pageProps} />
    </>
  )
}


