import React from 'react'

interface Props {
    href: string,
    label: string
    ariaLabel: string,
    className?: string,
}

const TextLink = ({ href, label, ariaLabel, className = '' }: Props) => {
    return (
        <a href={href} className={`font-medium hover:text-teal-300 focus-visible:text-teal-300 ${className}`} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
            {label}
        </a>
    )
}

export default TextLink