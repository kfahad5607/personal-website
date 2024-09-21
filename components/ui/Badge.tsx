import React from 'react'

interface Props {
    label: string
}

const Badge = ({ label }: Props) => {
    return (
        <div className="bg-teal-400/10 text-teal-300 leading-5 rounded-full px-3 py-1">
            {label}
        </div>
    )
}

export default Badge