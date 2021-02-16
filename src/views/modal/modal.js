import classnames from 'classnames';
import styles from './modal.module.scss'
import { motion } from 'framer-motion'

export function Modal ({
    className,
    style,
    fluid,
    children,
    isOpen,
    onClick,
}) {
    const classNames = classnames({
        [className]: className,
        [styles.base]: true,
        [styles.fluid]: fluid,
        [styles.isOpen]: isOpen,
    })
    return (
        <>
            { !!isOpen ? (
                <motion.div
                    initial='pageInitial'
                    animate='pageAnimate'
                    exit='pageExit'
                    variants={{
                        pageInitial: {
                            opacity: 0
                        },
                        pageAnimate: {
                            opacity: 1
                        }
                    }}
                >
                    <div
                        className={ classNames }
                        style={ style }
                        onClick={!!onClick ? onClick : null}
                    >
                        {children}
                    </div>
                </motion.div>
            ) : (
                null
            )}
        </>
    )
}