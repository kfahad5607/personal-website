import React, { forwardRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import courseCard from '@/public/images/course-card.webp'
import spotifyProfile from '@/public/images/spotify-profile.webp'
import halcyon from '@/public/images/halcyon.webp'
import v4 from '@/public/images/v4.webp'
import Badge from './ui/Badge'
import LinkWithIcon from './ui/LinkWithIcon'
import Description from './ui/Description'
import TitleWithLink from './ui/TitleWithLink'
import ArrowIcon from './icons/ArrowIcon'

const projects = [
    {
        title: 'Build a Spotify Connected App',
        url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
        thumbnail: {
            url: courseCard,
            altText: 'Build a Spotify Connected App Newline course marketing card'
        },
        description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
        skills: [],
        stats: null
    },
    {
        title: 'Spotify Profile',
        url: 'https://spotify-profile.herokuapp.com/',
        thumbnail: {
            url: spotifyProfile,
            altText: 'Spotify Profile app homepage'
        },
        description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        skills: ['React', 'Express', 'Spotify API', 'Heroku'],
        stats: {
            icon: 'star',
            text: '648',
            url: 'https://github.com/bchiang7/spotify-profile'
        }
    },
    {
        title: 'Halcyon Theme',
        url: 'https://halcyon-theme.netlify.app/',
        thumbnail: {
            url: halcyon,
            altText: 'Halcyon Theme homepage hero with screenshot of VS Code editor'
        },
        description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
        skills: [],
        stats: {
            icon: 'download',
            text: '100k+ Installs',
            url: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode'
        }
    },
    {
        title: 'brittanychiang.com (v4)',
        url: 'https://v4.brittanychiang.com/',
        thumbnail: {
            url: v4,
            altText: 'brittanychiang.com version 4 hero section'
        },
        description: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.',
        skills: ['Gatsby', 'Styled Components', 'Netlify'],
        stats: {
            icon: 'star',
            text: '7,479',
            url: 'https://github.com/bchiang7/v4'
        }
    },
]

interface Props {
    id: string;
    className?: string
}

const ProjectsSection = forwardRef(({ id, className = '' }: Props, ref: React.Ref<HTMLElement>) => {
    return <section ref={ref} id={id} className={className}>
        <div className='bg-slate-900/75 backdrop-blur px-6 py-5 -mx-6 mb-4 sticky top-0 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
        </div>
        <div>
            <ul className="group/list">
                {
                    projects.map((project, projectIdx) => <li key={projectIdx} className="mb-12">
                        <div className="group relative transition-all grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:col-span-6 sm:order-2">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <TitleWithLink href={project.url} title={project.title} ariaLabel={`${project.title} (opens in a new tab)`} />
                                </h3>
                                <Description className='mt-2'>
                                    {project.description}
                                </Description>
                                {
                                    project.stats && <div className='mt-2'>
                                        <LinkWithIcon href={project.stats.url} label={project.stats.text} icon={project.stats.icon} />
                                    </div>
                                }
                                <ul className="flex flex-wrap mt-2 text-xs font-medium" aria-label="Technologies used">
                                    {project.skills.map((skill, skillIdx) => <li key={skillIdx} className="mr-1.5 mt-2">
                                        <Badge label={skill} />
                                    </li>)}
                                </ul>
                            </div>
                            <Image
                                className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1 sm:order-1 '
                                src={project.thumbnail.url}
                                alt={project.thumbnail.altText}
                                width={200}
                                height={48}
                            />
                        </div>
                    </li>)
                }
            </ul>
            <div className="mt-12">
                <Link href='/archive' className={`group font-semibold text-slate-200`} rel="noreferrer noopener" aria-label='View Full Project Archive'>
                    <span className='border-b border-solid border-transparent pb-px group-hover:border-teal-300 transition motion-reduce:transition-none'>
                        View Full Project Archive
                    </span>
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none">
                        <ArrowIcon />
                    </span>
                </Link>
            </div>
        </div>
    </section>
})

export default ProjectsSection