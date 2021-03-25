import Head from 'next/head'
import '@/styles/global.scss'

export default function APV({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.2.0/jquery.fittext.min.js"></script>


      </Head>
      <Component {...pageProps} />
    </>
  )
}