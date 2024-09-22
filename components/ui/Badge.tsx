import React from 'react'

interface Props {
    label: string,
    className?: string
}

const Badge = ({ label, className = '' }: Props) => {
    return (
        <div className={`bg-teal-400/10 text-teal-300 leading-5 rounded-full px-3 py-1 ${className}`}>
            {label}
        </div>
    )
}

export default Badge