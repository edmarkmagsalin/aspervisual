import App from '@/layouts/app'
import { Row, Col, Container } from '@/components'
import styles from './info.module.scss'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function info() {
    const router = useRouter()

    useEffect(() => {

        const handler = (e) => {
            if (e.code === 'ArrowLeft') {
                router.push('/')
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)

    }, [])

    return (
        <motion.div
            key='info'
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
            <Container className={styles.infoContainer}>
               
                    <Row middle>
                        <Col sm='1' className={styles.navLeft}>
                            <Link href='/'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19.235" viewBox="0 0 21 19.235">
                                      <g id="Arrow" transform="translate(1864.253 546.224) rotate(-180)">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="18.328" height="3.559" transform="translate(1843.253 534.827)" fill="#fff"/>
                                        <rect id="Rectangle_3" data-name="Rectangle 3" width="13.525" height="2.847" transform="translate(1852.676 544.211) rotate(-45)" fill="#fff"/>
                                        <rect id="Rectangle_4" data-name="Rectangle 4" width="13.525" height="2.847" transform="translate(1854.689 526.99) rotate(45)" fill="#fff"/>
                                      </g>
                                    </svg>

                                </a>
                            </Link>
                        </Col>
                        <Col className={styles.content}>
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
                           
                            <h2 className={styles.header3Type5}>WE CREATE POWERFUL VISUAL CONTENT FOR CREATORS, BUSINESSES, <br/>& COMMUNITIES</h2>
                           
                            </motion.div>
                        </Col>
                    </Row>
                
            </Container>
        </App>
        </motion.div>
    )
}