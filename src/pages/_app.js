import Head from 'next/head'
import '@/styles/global.scss'

function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default APV