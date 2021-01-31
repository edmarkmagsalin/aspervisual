import classnames from 'classnames';
import styles from './container.module.scss'

export function Container ({
    className,
    style,
    fluid,
    children,
}) {
    const classNames = classnames({
        [className]: className,
        [styles.base]: true,
        [styles.fluid]: fluid,
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