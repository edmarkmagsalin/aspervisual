import classnames from 'classnames';
import styles from './modal.module.scss'

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
        <div
            className={ classNames }
            style={ style }
            onClick={!!onClick ? onClick : null}
        >
            {children}
        </div>
    )
}