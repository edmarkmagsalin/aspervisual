import classnames from 'classnames';
import styles from './menu.module.scss'

export function Menu ({
    className,
    children,
    style,
    fluid,
    horizontal
}) {
    const classNames = classnames({
        [className]: className,
        [styles.base]: true,
        [styles.fluid]: fluid,
        [styles.horizontal]: horizontal,
    })
    return (
        <ul
            className={ classNames }
            style={style}
        >
            {children}
        </ul>
    )
}