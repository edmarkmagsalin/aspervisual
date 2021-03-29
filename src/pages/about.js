import App from '@/layouts/app'
import { Row, Col, Container } from '@/components'
import styles from './about.module.scss'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function About() {
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
            key='about'
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
            <Container className={styles.aboutContainer}>
               
                    <Row middle>
                        <Col sm='1' className={styles.navLeft}>
                            <Link href='/'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 58.753 35.506">
                                        <g id="Arrow" transform="translate(1872.753 558.253) rotate(-180)">
                                            <rect id="Rectangle_2" data-name="Rectangle 2" width="55" height="4" transform="translate(1814 539)" fill="currentColor"/>
                                            <rect id="Rectangle_3" data-name="Rectangle 3" width="25" height="4" transform="translate(1852.247 555.425) rotate(-45)" fill="currentColor"/>
                                            <rect id="Rectangle_4" data-name="Rectangle 4" width="25" height="4" transform="translate(1855.075 522.747) rotate(45)" fill="currentColor"/>
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