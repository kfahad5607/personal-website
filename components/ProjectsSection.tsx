import React from 'react'
import Image from 'next/image'
import courseCard from '@/public/images/course-card.webp'
import spotifyProfile from '@/public/images/spotify-profile.webp'
import halcyon from '@/public/images/halcyon.webp'
import v4 from '@/public/images/v4.webp'

const projects = [
    {
        title: 'Build a Spotify Connected',
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

interface Prop {
    className: string
}

const ProjectsSection = ({ className }: Prop) => {
    return <div id="projects" className={className}>
        <ol className="group/list">
            {
                projects.map((project, projectIdx) => <li key={projectIdx} className="mt-12">
                    <div className="group relative transition-all grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className='sm:col-span-2'>
                            <Image
                                className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                                src={project.thumbnail.url}
                                alt={project.thumbnail.altText}
                            />
                        </div>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <a href={project.url} className="group/link hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${project.title} (opens in a new tab)`}>
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                        {project.title}
                                        <span className="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                        </span>
                                    </span>
                                </a>
                            </h3>
                            <div className="text-sm leading-normal mt-2">
                                {project.description}
                            </div>
                            {
                                project.stats && <div className='mt-2'>
                                    <a href={project.stats.url} className="relative inline-flex items-center text-slate-200 font-medium text-sm hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${project.stats.text} (opens in a new tab)`}>
                                        <span className="mr-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                                        </span>
                                        {project.stats.text}
                                    </a>
                                </div>
                            }
                            <ul className="flex flex-wrap mt-2 text-xs font-medium" aria-label="Technologies used">
                                {project.skills.map((skill, skillIdx) => <li key={skillIdx} className="mr-1.5 mt-2">
                                    <div className="bg-teal-400/10 text-teal-300 leading-5 rounded-full px-3 py-1">
                                        {skill}
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </li>)
            }
        </ol>
    </div>
}

export default ProjectsSection