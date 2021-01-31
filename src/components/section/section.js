import classnames from 'classnames';
import styles from './section.module.scss'

export function Section({
    className,
    children,
    anchor,
    style
}) {
    const classNames = classnames({
        [className]: className,
        [styles.base]: true,
    })
    return (
        <section
            className={classNames}
            id={anchor}
            style={style}
        >
            {children}
        </section>
    )
}
