import classNames from 'classnames';
import styles from './button.module.scss'

export function Button ({
    className,
    icon,
    text,
    color,
    loading,
    loadingDisplay,
    onClick,
    style,
    size,
    disabled,
    rounded,
    fluid,
    outline
}) {
    const classes = classNames({
        [className]: true,
        [styles.base]: true,
        [styles[color]]: color,
        [styles[size]]: size,
        [styles.outline]: outline,
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
        [styles.fluid]: fluid,
        [styles.loading]: loading,
    })
    return (
        <button
            className={classes}
            onClick={!!onClick ? onClick : null}
            style={style}
        >
            {!!icon && <>{icon}&nbsp;&nbsp;</>}
            
            { !!loading ? (
                    !!loadingDisplay ? loadingDisplay : text
                ) : (
                    !!text ? text : 'Button'
                )
            }
        </button>
    )
}