import classnames from 'classnames';
import styles from './grid.module.scss'

export function Row ({
    className,
    style,
    center,
    noWrap,
    middle,
    reverse,
    spaceBetween,
    children,
}) {
    const classNames = classnames({
        [className]: className,
        [styles.row]: true,
        [styles.center]: center,
        [styles.noWrap]: noWrap,
        [styles.middle]: middle,
        [styles.reverse]: reverse,
        [styles.spaceBetween]: spaceBetween,
    })
    return (
        <div
            className={ classNames }
            style={ style }
        >
            {children}
        </div>
    )
}