import React from 'react'

interface Props {
    className?: string
}

const RightArrowIcon = ({ className = '' }: Props) => {
    const _className = `inline-block h-4 w-4 shrink-0 -translate-y-px ${className}`

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={_className} aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
    )
}

export default RightArrowIcon