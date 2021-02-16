import Link from 'next/link'

export function MenuItem ({
    children,
    text,
    href,
    style,
    target
}) {
    return (
        <li
            style={style}
        >
            <Link href={!!href ? href : '/'}>
                { !!children ? (
                    children
                ) : (
                    <a>{!!text ? text : 'link'}</a>
                )}
            </Link>
        </li>
    )
}