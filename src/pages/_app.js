import Head from 'next/head'
import '@/styles/global.scss'

export default function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}