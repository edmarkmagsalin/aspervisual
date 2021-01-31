import classnames from 'classnames';
import styles from './grid.module.scss'

export function Col ({
    className,
    style,
    sm, md, lg, xl,
    children,
}) {
    const classNames = classnames({
        [className]: className,
        [styles.col]: true,
        [styles['colSmall'+sm]]: sm,
        [styles['colMedium'+md]]: md,
        [styles['colLarge'+lg]]: lg,
        [styles['colExtraLarge'+xl]]: xl
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