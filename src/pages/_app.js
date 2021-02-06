import Head from 'next/head'
import '@/styles/global.scss'
import '@/styles/animation.scss'
import { motion, AnimatePresence } from 'framer-motion';

function APV({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>AS PER VISUAL</title>
      </Head>
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </>
  )
}

export default APV