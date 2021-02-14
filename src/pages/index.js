import App from '@/layouts/app'
import { Row, Col, Button, Container } from '@/components'
import styles from './index.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Modal } from '@/views'
import router from 'next/router'

export default function Home() {

    useEffect(() => {

        const handler = (e) => {
            if (e.code === 'ArrowLeft') {
                router.push('/studio')
            }
            if (e.code === 'ArrowRight') {
                router.push('/about')
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)

    }, [])
    
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
            stopVideo(document.querySelector('#yt-iframe'))
            setIsModalOpen(!isModalOpen)
        }

        if(e==='btn') {
            setIsModalOpen(!isModalOpen)
        }

    }

    return (
        <App>
            <Modal
                isOpen={isModalOpen}
                onClick={() => toggleModal()}
            >
                <div id="yt-iframe" className={styles.videoInIframe}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FgjHbiTIshA?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Modal>
            <Container className={styles.indexContainer}>
                <Row middle className={styles.indexRelativeContainer}>
                    <Col sm='1' className={styles.navLeft}>
                        <Link href='/studio'>
                            <a>STUDIO</a>
                        </Link>
                    </Col>
                    <Col className={styles.content}>
                        <div style={{textAlign: 'left', display: 'inline-block'}}>
                            <h1 className={styles.header1Type1}>AS&nbsp;PER</h1>
                            <h1 className={styles.header1Type2}>VISUAL</h1>
                        </div>
                        
                        <Button
                            text='PLAY REEL'
                            color='APV'
                            onClick={() => toggleModal('btn')}
                            className={styles.button}
                        />
                    </Col>
                    <Col sm='1' className={styles.navRight}>
                        <Link href='/about'>
                            <a>ABOUT</a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </App>
    )
}