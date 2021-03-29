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
            variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                }
            }}
        >
            <App>
                <Container className={styles.studioContainer}>
                    <Row middle>
                        <Col className={styles.content}>
                            <div className={styles.containermaxWidth}>   
                                <motion.div
                                    initial='pageInitial'
                                    animate='pageAnimate'
                                    style={{ transition: 'opacity 1s ease-in-out' }}
                                    variants={{
                                        pageInitial: {
                                            opacity: 0
                                        },
                                        pageAnimate: {
                                            opacity: 1
                                        }
                                    }}
                                >
                                <h2 className={styles.headerMain}><span className={styles.header2Type3}>AS PER</span><span className={styles.header2Type4}> VISUAL</span></h2>
                                <h5 className={styles.header5Type2}>Design, Content Writing, Photograpy Video Editing, & Production</h5>
                              
                                </motion.div>
                            </div>
                        </Col>
                        <Col sm='1' className={styles.navRight}>
                            <Link href='/'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19.235" viewBox="0 0 21 19.235">
                                      <g id="Arrow" transform="translate(-1843.253 -526.99)">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="18.328" height="3.559" transform="translate(1843.253 534.827)" fill="#fff"/>
                                        <rect id="Rectangle_3" data-name="Rectangle 3" width="13.525" height="2.847" transform="translate(1852.676 544.211) rotate(-45)" fill="#fff"/>
                                        <rect id="Rectangle_4" data-name="Rectangle 4" width="13.525" height="2.847" transform="translate(1854.689 526.99) rotate(45)" fill="#fff"/>
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
