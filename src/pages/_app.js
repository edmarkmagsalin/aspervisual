import Head from 'next/head'
import '@/styles/global.scss'

export default function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
      	  <meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}