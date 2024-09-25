import React from 'react'
import Link from 'next/link'

interface Props {
    href: string,
    label: string
    ariaLabel: string,
    className?: string,
}

const TextLink = ({ href, label, ariaLabel, className = '' }: Props) => {
    return (
        <Link href={href} className={`font-medium hover:text-teal-300 focus-visible:text-teal-300 ${className}`} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
            {label}
        </Link>
    )
}

export default TextLink