import React, { forwardRef, ReactNode } from 'react'
import TextLink from '../ui/TextLink'

interface Props {
    id: string;
    className?: string,
}

const AboutSection = forwardRef(({ id, className = '' }: Props, ref: React.Ref<HTMLElement>) => {
    return <section ref={ref} id={id} className={className} aria-label='About me'>
        <div className='bg-slate-900/75 backdrop-blur px-6 py-5 -mx-6 mb-4 sticky top-0 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div>
            <p className="mb-4">
                I started my coding journey in my second year of engineering in 2019 with HTML and CSS. From there, I picked up JS and PHP, building a few websites along the way. Things really took off when I found React through <TextLink href='https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e' label='Angela Yu’s' ariaLabel='Angela Yu’s Udemy Profile (opens in a new tab)' className='text-slate-200' />  web dev bootcamp., and I later got into backend development after <TextLink href='https://www.udemy.com/user/jonasschmedtmann' label='Jonas Schmedtmann’s' ariaLabel='Angela Yu’s Udemy Profile (opens in a new tab)' className='text-slate-200' /> Node.js course.
            </p>

            <p className="mb-4">I’ve always loved building products. I started with <TextLink href='https://www.youtube.com/watch?v=eYJRO9IgCms' label='PlacePrep' ariaLabel='PlacePrep (opens in a new tab)' className='text-slate-200' /> in engineering and later created <TextLink href='https://zeltoauthoring.com' label='ZeltoAuthoring' ariaLabel='ZeltoAuthoring (opens in a new tab)' className='text-slate-200' /> at my first job, where I also handled AWS deployments and set up CI/CD. Now, I’m working on the Next-Gen SIEM at <TextLink href='https://www.dnif.it/' label='DNIF' ariaLabel='DNIF Hypercloud (opens in a new tab)' className='text-slate-200' />, building secure scalable systems. I’m always curious to dive deeper into tech, and lately, I’ve been focusing on Next.js, Python, and sharpening my fundamentals in OS, Databases, and Networks.
            </p>
            <p >When I’m not coding, I’m probably playing cricket, hanging out with friends, listening to podcasts, or enjoying some <TextLink href='https://open.spotify.com/genre/0JQ5DAqbMKFKSopHMaeIeI' label='Punjabi music' ariaLabel='Punjabi Music (opens in a new tab)' className='text-slate-200' />.</p>
        </div>
    </section>
})

export default AboutSection