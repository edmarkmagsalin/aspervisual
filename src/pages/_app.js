import Head from 'next/head'
import '@/styles/global.scss'

export default function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
      	  <meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="viewport" content="width=device-width, initial-scale=1">

      </Head>
      <Component {...pageProps} />
    </>
  )
}
