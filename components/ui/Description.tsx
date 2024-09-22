import React from 'react'

interface Props {
    className?: string,
    children: string
}

const Description = ({ className = '', children }: Props) => {
    return (
        <p className={`text-sm leading-normal ${className}`}>
            {children}
        </p>
    )
}

export default Description