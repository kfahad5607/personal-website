import React, { FC } from 'react'
import Link from 'next/link'
import URLIcon from '../icons/URLIcon';
import StarIcon from '../icons/StarIcon';
import GithubIcon from '../icons/GitHubIcon';
import DownloadIcon from '../icons/DownloadIcon';

interface Props {
    href: string,
    label: string,
    icon: 'url' | 'star' | 'download' | string
}

const ICONS: Record<Props['icon'], FC> = {
    url: URLIcon,
    star: StarIcon,
    github: GithubIcon,
    download: DownloadIcon,
}

const LinkWithIcon = ({ href, label, icon }: Props) => {
    const SelectedIcon = ICONS[icon];

    return (
        <Link href={href} className="relative inline-flex items-center text-sm font-medium hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${label} (opens in a new tab)`}>
            <span className="mr-0.5">
                {
                    <SelectedIcon />
                }
            </span>
            {label}
        </Link>
    )
}




export default LinkWithIcon