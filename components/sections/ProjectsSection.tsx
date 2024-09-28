import React, { forwardRef } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import placeprep from '@/public/images/placeprep.webp'
import cricketScorer from '@/public/images/cricket-scorer.webp'
import contactKeeper from '@/public/images/contact-keeper.webp'
import Badge from '../ui/Badge'
import LinkWithIcon from '../ui/LinkWithIcon'
import Description from '../ui/Description'
import TitleWithLink from '../ui/TitleWithLink'
import ArrowIcon from '../icons/ArrowIcon'

type StatIcon = "star" | "download" | "github"

type Project = {
    title: string,
    url: string,
    thumbnail: {
        url: StaticImageData,
        altText: string
    },
    description: string,
    skills: string[],
    stats: { icon: StatIcon, text: string, url: string } | null
}

const projects: Project[] = [
    {
        title: 'PlacePrep',
        url: 'https://www.youtube.com/watch?v=eYJRO9IgCms',
        thumbnail: {
            url: placeprep,
            altText: 'PlacePrep for acing engineering interviews'
        },
        description: 'A MERN-based platform built to assist engineering students in interview prep with quizzes, aptitude tests, and coding challenges. It includes an in-browser compiler supporting Java, Python, C, and C++ for seamless coding practice right on the site.',
        skills: ['React.js', 'Redux', 'Bootstrap', 'Express.js', 'MongoDB', 'linux'],
        stats: {
            icon: 'github',
            text: 'Source Code',
            url: 'https://github.com/kfahad5607/placeprep'
        }
    },
    {
        title: 'Cricket Scorer',
        url: 'https://quirky-panini-a0df5c.netlify.app',
        thumbnail: {
            url: cricketScorer,
            altText: 'Spotify Profile app homepage'
        },
        description: 'A React JS app where players can record and update scores for their cricket games. It uses React Context for efficient score tracking throughout the match.',
        skills: ['React.js', 'React Context', 'Bootstrap'],
        stats: {
            icon: 'github',
            text: 'Source Code',
            url: 'https://github.com/kfahad5607/Cricket-scorer'
        }
    },
    {
        title: 'Contact Keeper',
        url: 'https://contact-keeper-tzui.onrender.com',
        thumbnail: {
            url: contactKeeper,
            altText: 'Halcyon Theme homepage hero with screenshot of VS Code editor'
        },
        description: 'A MERN app for securely storing and managing contact information. With JWT authentication, it ensures user data is protected while providing a seamless experience for adding, editing, and organizing contacts.',
        skills: ['React.js', 'Redux', 'Bootstrap', 'Express.js', 'MongoDB'],
        stats: {
            icon: 'github',
            text: 'Source Code',
            url: 'https://github.com/kfahad5607/contact-keeper'
        }
    }
]

interface Props {
    id: string;
    className?: string
}

const ProjectsSection = forwardRef(({ id, className = '' }: Props, ref: React.Ref<HTMLElement>) => {
    return <section ref={ref} id={id} className={className} aria-label='Selected projects' >
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
                <Link href='/archive' className={`group font-semibold text-slate-200`} aria-label='View Full Project Archive'>
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