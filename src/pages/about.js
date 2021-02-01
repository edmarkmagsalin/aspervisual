import App from '@/layouts/app'
import { Row, Col, Container } from '@/components'
import styles from './about.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

export default function About() {
    const [imgTheme, setImgTheme] = useState('light')

    const setTheme = (v) => {
        setImgTheme(v)
    }

    return (
        <App setTheme={(v) => setTheme(v)}>
            <Container className={styles.aboutContainer}>
                <Row middle>
                    <Col sm='1' className={styles.navLeft}>
                        <Link href='/'>
                            <a><BsArrowLeft /></a>
                        </Link>
                    </Col>
                    <Col className={styles.content}>
                        <h2 className={styles.header2Type1}>AS&nbsp;PER</h2>&nbsp;
                        <h2 className={styles.header2Type2}>VISUAL</h2>
                        <span className={styles.inlineImage}>
                            <img
                                src={`/logo-for-${imgTheme || 'light'}.png`}
                            />
                        </span>
                        <div className={styles.spacer}></div>
                        <h2 className={styles.header2Type2}>CREATES</h2><span className={styles.rectangle}></span>
                        <h2 className={styles.header2Type2}>POWERFUL</h2>
                        <div className={styles.spacer}></div>
                        <span className={styles.square}></span>&nbsp;
                        <h2 className={styles.header2Type1}>VISUAL&nbsp;CONTENT</h2>
                        <span className={styles.inlineImageLarge}>
                            <img
                                src={`/world-for-${imgTheme || 'light'}.png`}
                            />
                        </span>
                        <div className={styles.spacer2}></div>
                        <h2 className={styles.header2Type2}>FOR&nbsp;CREATORS, COMMUNITIES,</h2>
                        <div className={styles.spacer}></div>
                        <span className={styles.oval}></span>
                        <h2 className={styles.header2Type2}>&amp;&nbsp;BUSINESSES.</h2>
                        <span className={styles.dash}></span>
                        
                    </Col>
                </Row>
            </Container>
        </App>
    )
}