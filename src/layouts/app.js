import { Section, Container, Row, Col, Menu, MenuItem } from '@/components'
import styles from './app.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaInstagram, FaVimeoV, FaYoutube, FaBehance, FaFacebookSquare } from 'react-icons/fa'

export default function App({
    children,
    // setTheme
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
        // if(router.pathname === '/') {
            // console.log('setting theme to dark because the current page is index..')
            // setImgTheme('dark')
            // setTheme('dark')
            // bodyClassList.add('withBG')
            // return
        // } else {
            // bodyClassList.remove('withBG')
        // }

        // if no client side modification of themes
        if(!bodyClassList.contains('light') && !bodyClassList.contains('dark') && currentTheme !== 'light' && currentTheme !== 'dark') {

            // if system themes is set
            if(window.matchMedia("(prefers-color-scheme: dark)").matches ) {
                // console.log('setting theme to dark via prefers..')
                setImgTheme('dark')
                // setTheme('dark')
            } else if(window.matchMedia("(prefers-// color-scheme: light)").matches ) {
                // console.log('setting theme to light via prefers..')
                setImgTheme('light')
                // setTheme('light')
            }

        } else {

            // if local storage
            if(currentTheme === 'light') {
                // console.log('setting theme to light via localstorage..')
                setImgTheme('light')
                // setTheme('light')
                bodyClassList.remove('dark')
                bodyClassList.add('light')
            } else if(currentTheme === 'dark') {
                // console.log('setting theme to dark via localstorage..')
                setImgTheme('dark')
                // setTheme('dark')
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
            // setTheme('dark')
            bodyClassList.remove('light')
            bodyClassList.add('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            console.log('setting theme to light via toggling..')
            setImgTheme('light')
            // setTheme('light')
            bodyClassList.remove('dark')
            bodyClassList.add('light')
            localStorage.setItem('theme', 'light');
        }
    }



    return (
        <>
            <Section className={styles.header} fluid>
                <Container fluid>
                    <Row middle spaceBetween noWrap>
                        <Col sm='6' className={styles.logoContainer}>
                            <Link href='/'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="70" viewBox="0 0 71.603 114.365" className={styles.logo}>
                                        <g id="white" transform="translate(-266.116 1035)">
                                            <path id="Path_12" data-name="Path 12" d="M313.6-1034.675a5.744,5.744,0,0,0-2.143,1.469,6.56,6.56,0,0,0-.65,7.176c.542,1.06,2.625,3.082,5.081,4.949a24.3,24.3,0,0,1,4.913,4.563c5.539,6.875,7.417,14.906,5.912,25.345-.169,1.156-.313,2.119-.337,2.131a5.247,5.247,0,0,1-.12-.951c-.674-8.188-4.563-19.4-8.6-24.779-3.251-4.335-8.729-7.947-15.123-9.994-1.565-.494-6.068-1.6-8.139-2.011a16.659,16.659,0,0,0-3.973-.325,10.159,10.159,0,0,0-3.54.325c-2.986.807-4.8,2.276-5.322,4.3a4.7,4.7,0,0,0,.217,2.854c.349,1.06.735,1.421,2.276,2.107a12.427,12.427,0,0,0,5.286,1.06,25.9,25.9,0,0,1,6.562,1.144,24.516,24.516,0,0,1,4.925,1.83,14.986,14.986,0,0,1,4.214,2.926,30.726,30.726,0,0,1,8.8,17.519,19.761,19.761,0,0,1,.084,4.335c-.1.482-.1.482-.494-.783-2.143-6.8-6.032-13.293-9.921-16.592a21.418,21.418,0,0,0-15.556-4.6c-5.876.445-14.906,2.625-18.386,4.419-2.408,1.24-3.576,3-3.444,5.153.181,2.769,2.613,4.575,5.611,4.154A22.188,22.188,0,0,0,276.1-998.1c2.577-.843,7.321-2.155,8.85-2.456,6.947-1.385,12.293.457,15.412,5.286,1.385,2.131,2.468,4.985,2.468,6.49,0,.446-.024.506-.2.434a38.536,38.536,0,0,0-7.5-2.059,47.515,47.515,0,0,0-7.838-.181,25.842,25.842,0,0,0-12.811,5.442c-3.311,2.673-6.1,6.454-7.08,9.572a28.173,28.173,0,0,0-.987,5.755c-.445,4.13-.373,6.321.3,7.863.337.807.506.939,1.577,1.312a11.7,11.7,0,0,0,4.925.253,3.323,3.323,0,0,1,.819-.145,1.853,1.853,0,0,1-.108.578,4.912,4.912,0,0,0-.084,1.216c.024.578.012.662-.157.614a11.58,11.58,0,0,0-2.637-.421,10.07,10.07,0,0,0-3.54.831l-.783.349-.253.831c-.361,1.12-.421,2.9-.253,6.61.241,5.057.662,7.766,1.7,10.885a22.616,22.616,0,0,0,6.032,9.693,26.375,26.375,0,0,0,6.984,4.937c6.863,3.444,14.918,4.491,25.273,3.3a134.548,134.548,0,0,0,15.147-2.829c2.89-.867,4.19-1.577,5.743-3.119,2.083-2.083,3.034-4.455,4.624-11.571,2.252-10.114,3.275-17.555,4.828-35.363,1.361-15.58,1.493-21.468.662-28.921-1.625-14.461-7.947-25.081-17.94-30.15a29.763,29.763,0,0,0-4.732-1.938A4.747,4.747,0,0,0,313.6-1034.675Zm3.624,1.734c1.975.975,3.01,2.7,2.143,3.552a.635.635,0,0,1-.746.229,5.8,5.8,0,0,1-3.408-2.516c-.385-.686-.433-1.1-.156-1.493C315.36-1033.6,316.058-1033.531,317.226-1032.941Zm-24.009,7.694a.973.973,0,0,1,.626,1.385c-.169.421-2.336,1.252-4.118,1.565-1.914.325-5.093.181-5.587-.265a.858.858,0,0,1,.12-1.24c.518-.506,2.866-1.2,5.021-1.481A23.389,23.389,0,0,1,293.217-1025.247ZM274.591-1005.8c.385.373.373.47-.06,1.349a4.988,4.988,0,0,1-3.937,2.637c-1.072.084-1.951-.144-2.191-.566a1.47,1.47,0,0,1,.144-1.349,33.358,33.358,0,0,1,5.418-2.372A.958.958,0,0,1,274.591-1005.8Zm19.385,25.959a8.71,8.71,0,0,1,3.347,1.1,16.527,16.527,0,0,1,5.033,5.551l.361.686-.458-.193c-1.035-.446-2.926-1.132-3.745-1.361-.867-.241-.879-.241-1.108-.012-.542.542-.313.758,1.505,1.336.855.277,2.167.771,2.914,1.108l1.349.6.072.554c.036.3.1.7.12.879.06.4.06.4-.445.108a27.705,27.705,0,0,0-6.683-1.9,33.959,33.959,0,0,0-7.742,0,21.4,21.4,0,0,0-9.741,3.708l-1.072.795.157-.494c.7-2.24,1.228-3,2.9-4.118a13.432,13.432,0,0,1,5.876-2.24c1.168-.169,1.373-.313,1.228-.879l-.084-.337-.987.072a14.184,14.184,0,0,0-6.129,2.131,10.928,10.928,0,0,1-1.156.674,18.143,18.143,0,0,1,1.216-3.142c.915-1.782,2.24-2.757,4.973-3.709a25.356,25.356,0,0,1,4.082-.963A25.971,25.971,0,0,1,293.976-979.842Zm-24.069,11.21a4.1,4.1,0,0,1,1.493,2,4.064,4.064,0,0,1-.193,2.637,4.572,4.572,0,0,1-1.878,1.914c-.71.361-.843.361-1.252.012l-.325-.289.024-2.914a17.341,17.341,0,0,1,.156-3.143,1.568,1.568,0,0,1,1.072-.6A2.328,2.328,0,0,1,269.907-968.633Zm19.614.337a4.994,4.994,0,0,1,3.708,2.866c.385.807.385.819.373,2.673a9.734,9.734,0,0,1-.939,4.72c-1.156,2.685-2.7,4.214-4.575,4.563a5.247,5.247,0,0,1-4.467-1.722,7.2,7.2,0,0,1-1.854-5.021,8.14,8.14,0,0,0-.06-1.24c-.409-3.371,2.914-6.8,6.731-6.947A9.552,9.552,0,0,1,289.521-968.3Zm-19.686,11.92a6.468,6.468,0,0,1,.975,1.337,3.644,3.644,0,0,1,.445,1.806,5.732,5.732,0,0,1-.831,3.359c-.963,1.854-1.794,2.264-2.324,1.144-.169-.337-.229-1.1-.337-4.034-.12-3.311-.108-3.636.072-3.913C268.281-957.362,268.919-957.266,269.835-956.375Zm11.342,5.635a28.407,28.407,0,0,0,10.511,1.987,26.811,26.811,0,0,0,8.9-1.421,12.647,12.647,0,0,1,1.625-.482,4.74,4.74,0,0,1-.361,1.048l-.409,1-1.445.421c-1.878.554-1.866.542-1.866.891,0,.277.277.674.458.674.048,0,.542-.144,1.1-.3a6.428,6.428,0,0,1,1.036-.265c.012.012-.253.494-.59,1.084-2.516,4.31-5.563,7.02-8.922,7.935a10.161,10.161,0,0,1-3.191.265,10.114,10.114,0,0,1-3.191-.265c-3.576-.987-6.008-3.359-6.622-6.466a23.975,23.975,0,0,1-.337-3.9,3.569,3.569,0,0,1,.915.385,21.67,21.67,0,0,0,10.21,2.577,31.97,31.97,0,0,0,6.731-.458c1.553-.265,1.794-.409,1.613-.915-.1-.289-.181-.337-.59-.325a14.366,14.366,0,0,0-1.746.2,26,26,0,0,1-13.124-.927,31.257,31.257,0,0,1-4.022-1.975,7.932,7.932,0,0,1-.193-1.144,11.653,11.653,0,0,0-.193-1.216c-.036-.108.458.084,1.2.469C279.371-951.511,280.49-951.005,281.177-950.74Z" fill="currentColor"/>
                                            <path id="Path_13" data-name="Path 13" d="M469.257-536.479a.623.623,0,0,0-.1.759,2.555,2.555,0,0,0,1.6.253.532.532,0,0,0-.169-1C469.679-536.659,469.438-536.659,469.257-536.479Z" transform="translate(-178.52 -438.379)" fill="currentColor"/>
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                        <Col sm='6' className={styles.topMenuDesktopContainer}>
                           
                                <div className={styles.dotContainer}>
                                    <span className={styles.dot} onClick={() => toggleTheme()}>&bull;</span>
                                </div>
                            
                            <div className={styles.topMenuDesktop}>
                                A CREATIVE&nbsp;STUDIO<br />
                                IN&nbsp;THE&nbsp;WORKS
                            </div>
                        </Col>
                        <Col sm='6' className={styles.topMenuMobile}>
                            <Menu horizontal>
                                    { pathname === '/' && (
                                        <>
                                            
                                            <MenuItem href='/studio' text='STUDIO' />
                                            <MenuItem href='/info' text='INFO' />
                                        </>
                                    )}
                                    { pathname === '/info' && (
                                        <>
                                            <MenuItem href='/' text='HOME' />
                                            <MenuItem href='/studio' text='STUDIO' />
                                        </>
                                    )}
                                    { pathname === '/studio' && (
                                        <>
                                              <MenuItem href='/' text='HOME' />
                                            <MenuItem href='/info' text='INFO' />
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
            <Section className={`${styles.footer} ${styles.footerOtherPages}`}>
                <Container>
                    <Row middle spaceBetween noWrap>
                  
                        <Col sm='6' md='6' lg='6' xl='6' className={`${pathname === '/'  && styles.hideHome}`} style={{paddingBottom: 8}}>
                            FOR PROJECT INQUIRIES<br />
                            <a href="mailto:hello@aspervisual.com" target='_blank'>HELLO@ASPERVISUAL.COM</a>
                        </Col>
                        
                        <Col sm='6' md='6' lg='6' xl='6' className={`${styles.bottomMenuContainer} ${pathname !== '/' && styles.bottomMenuContainerOtherPages} ${pathname === '/'  && styles.hideHome}`}>
                            <Menu horizontal className={`${styles.bottomMenu} ${pathname !== '/' && styles.bottomMenuOtherPages}`}>
                                <MenuItem href='https://www.instagram.com/_aspervisual/' target='_blank' text={
                                        <FaInstagram className={styles.icon} />
                                    }
                                />
                                <MenuItem href='https://vimeo.com/aspervisual' target='blank' text={
                                        <FaVimeoV className={styles.icon} />
                                    }
                                />
                                <MenuItem href='https://www.youtube.com/channel/UC-aMWYLlaqILUWlXU4UBqTA' target='_blank' text={
                                        <FaYoutube className={styles.icon} />
                                    }
                                />
                                <MenuItem href='https://www.behance.net/aspervisual' target='_blank' text={
                                        <FaBehance className={styles.icon} />
                                    }
                                />
                                <MenuItem href='https://www.facebook.com/' target='_blank' text={
                                        <FaFacebookSquare className={styles.icon} />
                                    }
                                />
                            </Menu>

                            <div className={styles.dotContainerFooter}>
                                    <span className={styles.dot} onClick={() => toggleTheme()}>&bull;</span>
                             </div>
                        </Col>
                    </Row>
                </Container>
            </Section>

            { pathname === '/' && (
                           <>
                           <div className={styles.footerContainer}>
                            
                                
                                    <p>A CREATIVE STUDIO IN THE WORKS. EST.2021. BASED IN MANILA</p>
                                    <p> WORKING WORLDWIDE. CONTACT: <a href="https://www.instagram.com/_aspervisual/" target="_blank">INSTRAGRAM</a>, <a href="mailto:hello@aspervisual">EMAIL</a></p>

                                    <h2 className={styles.headerMain}><span className={styles.header2Type3}>AS PER</span><span className={styles.header2Type4}> VISUAL</span></h2>
                               
                            </div>
                     
                         </>
           )}
        </>
    )
}
