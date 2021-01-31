import { Section, Container, Row, Col, Card, Menu, MenuItem } from '@/components'
import styles from './app.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({
    children,
    changeTheme,
    setTheme
}) {
    const router = useRouter()
    const [imgTheme, setImgTheme] = useState(null)
    const [pathname, setPathname] = useState(null)

    useEffect(() => {

        const bodyClassList = document.querySelector("body").classList
        const currentTheme = localStorage.getItem('theme')

        // for dynamic layout per page
        setPathname(router.pathname)
        
        // if index page, use home themes
        if(router.pathname === '/') {
            console.log('setting theme to dark because the current page is index..')
            setImgTheme('dark')
            setTheme('dark')
            bodyClassList.add('withBG')
            return
        } else {
            bodyClassList.remove('withBG')
        }

        // if no client side modification of themes
        if(!bodyClassList.contains('light') && !bodyClassList.contains('dark') && currentTheme !== 'light' && currentTheme !== 'dark') {

            // if system themes is set
            if(window.matchMedia("(prefers-color-scheme: dark)").matches ) {
                console.log('setting theme to dark via prefers..')
                setImgTheme('dark')
                setTheme('dark')
            } else if(window.matchMedia("(prefers-color-scheme: light)").matches ) {
                console.log('setting theme to light via prefers..')
                setImgTheme('light')
                setTheme('light')
            }

        } else {

            // if local storage
            if(currentTheme === 'light') {
                console.log('setting theme to light via localstorage..')
                setImgTheme('light')
                setTheme('light')
                bodyClassList.remove('dark')
                bodyClassList.add('light')
            } else if(currentTheme === 'dark') {
                console.log('setting theme to dark via localstorage..')
                setImgTheme('dark')
                setTheme('dark')
                bodyClassList.remove('light')
                bodyClassList.add('dark')
            } 

        }

    }, [])

    const toggleTheme = () => {
        const bodyClassList = document.querySelector("body").classList
        if(imgTheme === 'light') {
            console.log('setting theme to dark via toggling..')
            setImgTheme('dark')
            setTheme('dark')
            bodyClassList.remove('light')
            bodyClassList.add('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            console.log('setting theme to light via toggling..')
            setImgTheme('light')
            setTheme('light')
            bodyClassList.remove('dark')
            bodyClassList.add('light')
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <>
            <Section className={styles.header}>
                <Container fluid>
                    <Row middle spaceBetween noWrap>
                        <Col md='1' lg='3'>
                            <Link href='/'>
                                <a>
                                    <Image
                                        src={`/logo-for-${imgTheme || 'light'}.png`}
                                        width={75}
                                        height={75}
                                        layout='fixed'
                                    />
                                </a>
                            </Link>
                        </Col>
                        <Col sm='2' className={styles.topMenuDesktop}>
                            CREATIVE&nbsp;STUDIO<br />
                            PH&nbsp;-&nbsp;MNL&nbsp;city
                        </Col>
                        <Col sm='6' className={styles.topMenuMobile}>
                            <Menu horizontal>
                                    { pathname === '/' && (
                                        <>
                                            <MenuItem href='/about' text='ABOUT' />
                                            <MenuItem href='/studio' text='STUDIO' />
                                        </>
                                    )}
                                    { pathname === '/about' && (
                                        <>
                                            <MenuItem href='/' text='HOME' />
                                            <MenuItem href='/studio' text='STUDIO' />
                                        </>
                                    )}
                                    { pathname === '/studio' && (
                                        <>
                                            <MenuItem href='/' text='HOME' />
                                            <MenuItem href='/about' text='ABOUT' />
                                        </>
                                    )}
                            </Menu>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className={styles.main}>
                {children}
            </Section>
            <Section className={`${styles.footer} ${pathname !== '/' && styles.footer2}`}>
                <Container>
                    <Row middle spaceBetween>
                        <Col sm='12' lg='3' style={{paddingBottom: 8}}>
                            FOR PROJECT INQUIRIES<br />
                            <a href="mailto:hello@aspervisual.com" target='_blank'>HELLO@ASPERVISUAL.COM</a>
                        </Col>
                        { pathname !== '/' &&
                            <Col sm='2' lg='6' className={styles.dotContainer}>
                                <span className={styles.dot} onClick={() => toggleTheme()}>&bull;</span>
                            </Col>
                        }
                        <Col sm='12' lg='3' className={`${styles.bottomMenuContainer} ${pathname !== '/' && styles.bottomMenuContainer2}`}>
                            <Menu horizontal className={`${styles.bottomMenu} ${pathname !== '/' && styles.bottomMenu2}`}>
                                <MenuItem href='/' text={
                                        <Image
                                            src={`/smi/instagram-for-${imgTheme || 'light'}.png`}
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                                <MenuItem href='/' text={
                                        <Image
                                            src={`/smi/vimeo-for-${imgTheme || 'light'}.png`}
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                                <MenuItem href='/' text={
                                        <Image
                                            src={`/smi/youtube-for-${imgTheme || 'light'}.png`}
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                                <MenuItem href='/' text={
                                        <Image
                                            src={`/smi/behance-for-${imgTheme || 'light'}.png`}
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                                <MenuItem href='/' text={
                                        <Image
                                            src={`/smi/facebook-for-${imgTheme || 'light'}.png`}
                                            width={20}
                                            height={20}
                                        />
                                    }
                                />
                            </Menu>
                        </Col>
                    </Row>
                </Container>
            </Section>
            
        </>
    )
}
