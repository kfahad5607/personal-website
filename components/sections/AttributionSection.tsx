import React from 'react'
import TextLink from '../ui/TextLink'

const AttributionSection = () => {
    return (
        <footer className='max-w-md text-sm text-slate-500'>
            <p>Loosely designed in <TextLink href='https://www.figma.com/' label='Figma' ariaLabel='Figma (opens in a new tab)' className='text-slate-400' /> and coded in <TextLink href='https://code.visualstudio.com/' label='Visual Studio Code' ariaLabel='Visual Studio Code (opens in a new tab)' className='text-slate-400' /> by yours truly. Built with <TextLink href='https://nextjs.org/' label='Next.js' ariaLabel='Next.js (opens in a new tab)' className='text-slate-400' /> and <TextLink href='https://tailwindcss.com/' label='Tailwind CSS' ariaLabel='Tailwind CSS (opens in a new tab)' className='text-slate-400' />, deployed with <TextLink href='https://vercel.com/' label='Vercel' ariaLabel='Vercel (opens in a new tab)' className='text-slate-400' />. All text is set in the <TextLink href='https://rsms.me/inter/' label='Inter' ariaLabel='Inter (opens in a new tab)' className='text-slate-400' /> typeface.</p>
        </footer>
    )
}

export default AttributionSection