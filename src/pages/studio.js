import App from '@/layouts/app'
import { Row, Col, Container } from '@/components'
import styles from './studio.module.scss'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Studio() {
    const router = useRouter()

    useEffect(() => {

        const handler = (e) => {
            if (e.code === 'ArrowRight') {
                router.push('/')
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)

    }, [])

    return (
        <motion.div
            key='studio'
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
                pageExit: {
                    opacity: 0
                }
            }}
        >
            <App>
                <Container className={styles.aboutContainer}>
                    <Row middle>
                        <Col className={styles.content}>
                            <h2 className={styles.header2Type1}>AS&nbsp;PER</h2>&nbsp;<h2 className={styles.header2Type2}>VISUAL</h2><br />

                            <h5 className={styles.header5Type}>A Creative Studio in the works.</h5><br /><br /><br />
                            
                            <h4 className={styles.header4Type}>Creative&nbsp;Design, <br className={styles.showForMobile} />Video&nbsp;Editing, <br />Content&nbsp;Writing&nbsp;&&nbsp;Creation,  <br className={styles.showForMobile} />Production</h4>
                        </Col>
                        <Col sm='1' className={styles.navRight}>
                            <Link href='/'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58.753" height="35.506" viewBox="0 0 58.753 35.506">
                                        <g id="Arrow" transform="translate(-1814 -522.747)">
                                            <rect id="Rectangle_2" data-name="Rectangle 2" width="55" height="4" transform="translate(1814 539)" fill="currentColor"/>
                                            <rect id="Rectangle_3" data-name="Rectangle 3" width="25" height="4" transform="translate(1852.247 555.425) rotate(-45)" fill="currentColor"/>
                                            <rect id="Rectangle_4" data-name="Rectangle 4" width="25" height="4" transform="translate(1855.075 522.747) rotate(45)" fill="currentColor"/>
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </App>
        </motion.div>
    )
}
