import App from '@/layouts/app'
import { Row, Col, Button, Container } from '@/components'
import styles from './index.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Modal } from '@/views'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Home() {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const stopVideo = (element) => {
        const iframe = element.querySelector('iframe');
        const video = element.querySelector('video');
        if(iframe) {
            const iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if(video) {
            video.pause();
        }
    }

    const toggleModal = (e) => {

        // stop video when closing modal
        if(isModalOpen) {
            console.log('bg');
            stopVideo(document.querySelector('#yt-iframe'))
            setIsModalOpen(!isModalOpen)
        }

        if(e==='btn') {
            console.log('btn');
            setIsModalOpen(true)
        }

    }
    
    useEffect(() => {

        const handler = (e) => {
            if (e.code === 'ArrowLeft') {
                router.push('/studio')
            }
            if (e.code === 'ArrowRight') {
                router.push('/info')
            }
            if (e.code === 'Escape') {
                console.log(isModalOpen);
                if(isModalOpen && document.querySelector('#yt-iframe')) {
                    stopVideo(document.querySelector('#yt-iframe'))
                    setIsModalOpen(!isModalOpen)
                }
            }
        }
        window.addEventListener('keydown', handler)
        return () => {
            setIsModalOpen(false)
            window.removeEventListener('keydown', handler)
        }

    }, [])

    return (
        <motion.div
            key='home'
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
           <Container className={styles.indexContainer}>
                        <Row middle className={styles.indexRelativeContainer}>
                            <Col sm='1' className={styles.navLeft}>
                                <Link href='/studio'>
                                    <a>STUDIO</a>
                                </Link>
                            </Col>
                            <Col>
                                <div className={styles.videoWrapper}>
                                    <div className={styles.videoContainer}>

                                        <div id="yt-iframe1" className={styles.videoInIframe}>
                                            <video loop="true" autoplay="autoplay" id="vid">
                                            	<source src="/video/AS PER VISUAL - INTRO VIDEO - FINAL.mp4" type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                              
                            </Col>
                            <Col sm='1' className={styles.navRight}>
                                <Link href='/info'>
                                    <a>INFO</a>
                                </Link>
                            </Col>
                        </Row>
                </Container>
        </App>
        </motion.div>
    )
}