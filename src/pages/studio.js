import App from '@/layouts/app'
import { Row, Col, Container } from '@/components'
import styles from './studio.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Studio() {
    const [imgTheme, setImgTheme] = useState('light')

    const setTheme = (v) => {
        setImgTheme(v)
    }

    return (
        <App setTheme={(v) => setTheme(v)}>
            <Container className={styles.aboutContainer}>
                <Row middle>
                    <Col className={styles.content}>
                        <h2 className={styles.header2Type1}>AS&nbsp;PER</h2>&nbsp;
                        <h2 className={styles.header2Type2}>VISUAL</h2>
                        <div className={styles.spacer1}></div>
                        <h5 className={styles.header5Type}>A Creative Studio in the works.</h5>
                        <div className={styles.spacer2}></div>
                        <h4 className={styles.header4Type}>Creative Design, Video Editing,<br /> Content Writing & Creation, Production</h4>
                    </Col>
                    <Col sm='1' className={styles.navRight}>
                        <Link href='/'>
                            <a><BsArrowRight /></a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </App>
    )
}