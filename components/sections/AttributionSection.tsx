import React from 'react'
import TextLink from '../ui/TextLink'

const AttributionSection = () => {
    return (
        <footer className='max-w-md text-sm text-slate-500'>
            <p>
                Coded in <TextLink href='https://code.visualstudio.com/' label='Visual Studio Code' ariaLabel='Visual Studio Code (opens in a new tab)' className='text-slate-400' />  by me. Built with <TextLink href='https://nextjs.org/' label='Next.js' ariaLabel='Next.js (opens in a new tab)' className='text-slate-400' /> and <TextLink href='https://tailwindcss.com/' label='Tailwind CSS' ariaLabel='Tailwind CSS (opens in a new tab)' className='text-slate-400' />, deployed with <TextLink href='https://vercel.com/' label='Vercel' ariaLabel='Vercel (opens in a new tab)' className='text-slate-400' />. Imitating the stunning design by <TextLink href='https://brittanychiang.com' label='Brittany Chiang' ariaLabel='Brittany Chiang (opens in a new tab)' className='text-slate-400' />.
            </p>
        </footer>
    )
}

export default AttributionSection