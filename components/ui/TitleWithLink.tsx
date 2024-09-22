import React from 'react'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'

interface Props {
    href: string,
    ariaLabel: string,
    title: string,
    subTitle?: string,
    className?: string
}

const TitleWithLink = ({ href, title, subTitle, ariaLabel, className = '' }: Props) => {
    return (
        <a href={href} className={`group/link inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 ${className}`} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
                {title}
                <span className="inline-block">
                    {subTitle || ''}
                    <ExternalLinkIcon className='transition-transform motion-reduce:transition-none group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1' />
                </span>
            </span>
        </a>
    )
}

export default TitleWithLink