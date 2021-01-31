import App from '@/layouts/app'
import { Row, Col, Button, Container } from '@/components'
import styles from './index.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Modal } from '@/views'

export default function Home() {
    const [imgTheme, setImgTheme] = useState('light')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const setTheme = (v) => {
        setImgTheme(v)
    }

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

    const toggleModal = () => {

        // stop video when closing modal
        if(isModalOpen) {
            stopVideo(document.querySelector('#yt-iframe'))
        }

        setIsModalOpen(!isModalOpen)
    }

    return (
        <App setTheme={(v) => setTheme(v)}>
            <Modal
                isOpen={isModalOpen}
                onClick={() => toggleModal()}
            >
                <div id="yt-iframe">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FgjHbiTIshA?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Modal>
            <Container className={styles.indexContainer}>
                <Row middle>
                    <Col sm='1' className={styles.navLeft}>
                        <Link href='/studio'>
                            <a>STUDIO</a>
                        </Link>
                    </Col>
                    <Col className={styles.content}>
                        <h1 className={styles.header1Type1}>AS&nbsp;PER</h1>
                        <h1 className={styles.header1Type2}>VISUAL</h1>
                        
                        <Button
                            text='PLAY REEL'
                            color='APV'
                            onClick={() => toggleModal()}
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