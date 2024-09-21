import React from 'react'

const experiences = [
    {
        startDate: '2024',
        endDate: 'present',
        designations: ['Senior Frontend Engineer, Accessibility'],
        description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
        projects: [],
        skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
        company: {
            name: 'Klaviyo',
            url: 'https://www.klaviyo.com/'
        }
    },
    {
        startDate: '2018',
        endDate: '2024',
        designations: ['Lead Engineer', 'Senior Engineer', 'Engineer'],
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        projects: [],
        skills: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'Wordpress', 'Contentful', 'Node.js', 'php'],
        company: {
            name: 'Upstatement',
            url: 'https://upstatement.com/'
        }
    },
    {
        startDate: 'july',
        endDate: 'dec 2017',
        designations: ['UI Engineer Co op'],
        description: 'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.',
        projects: [
            {
                label: 'MusicKit.js',
                url: 'https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/story/introduction--page'
            },
            {
                label: '9to5Mac',
                url: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/'
            },
            {
                label: 'The Verge',
                url: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming'
            }
        ],
        skills: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
        company: {
            name: 'Apple',
            url: 'https://www.apple.com/apple-music/'
        }
    },
    {
        startDate: '2016',
        endDate: '2017',
        designations: ['Developer'],
        description: 'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
        projects: [],
        skills: ['Jekyll', 'SCSS', 'JavaScript', 'Wordpress'],
        company: {
            name: 'Scout Studio',
            url: 'https://scout.camd.northeastern.edu/'
        }
    },
    {
        startDate: 'july',
        endDate: 'dec 2016',
        designations: ['Software Engineer Co-op'],
        description: 'Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.',
        projects: [
            {
                label: 'Andriod App',
                url: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US&pli=1'
            },
            {
                label: 'ScreenTime 2.0',
                url: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents'
            }
        ],
        skills: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
        company: {
            name: 'Starry',
            url: 'https://starry.com/'
        }
    },
    {
        startDate: 'july',
        endDate: 'dec 2015',
        designations: ['Creative Technologist Co-op'],
        description: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
        projects: [],
        skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        company: {
            name: 'MullenLowe',
            url: 'https://us.mullenlowe.com/'
        }
    }
]

interface Prop {
    className: string
}

const ExperienceSection = ({ className = '' }: Prop) => {
    return <div id="experience" className={className} >
        <ol className="group/list">
            {
                experiences.map((experience, experienceIdx) => <li key={experienceIdx} className="mt-12">
                    <div className="group relative transition-all grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 uppercase text-slate-500 text-xs mt-1 font-semibold sm:col-span-2" >
                            <span>{experience.startDate}</span>
                            <span className="inline-block h-px w-3 bg-current align-middle mx-1" ></span>
                            <span>{experience.endDate}</span>
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="z-10 font-medium leading-snug text-slate-200">
                                {
                                    experience.designations.map((designation, designationIdx) => {
                                        if (designationIdx === 0) return <div>
                                            <a href={experience.company.url} className="group/link hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${experience.designations[0]} at ${experience.company.name} (opens in a new tab)`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {designation} ·{" "}
                                                    <span className="inline-block">
                                                        {experience.company.name}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>

                                        return <div>
                                            <div className="text-slate-500 mt-0.5" >{designation}</div>
                                        </div>
                                    })
                                }
                            </h3>
                            <div className="text-sm leading-normal mt-2">
                                {experience.description}
                            </div>
                            {
                                experience.projects.length > 0 && <ul className="flex flex-wrap mt-2 text-xs text-slate-200 font-medium" aria-label="Related links">
                                    {experience.projects.map((project, projectIdx) => <li key={projectIdx} className="mr-4 mt-2">
                                        <a href={project.url} className="relative inline-flex items-center text-sm font-medium hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${project.label} (opens in a new tab)`}>
                                            <span className="mr-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                                            </span>
                                            {project.label}
                                        </a>
                                    </li>)}
                                </ul>
                            }

                            <ul className="flex flex-wrap mt-2 text-xs font-medium" aria-label="Technologies used">
                                {experience.skills.map((skill, skillIdx) => <li key={skillIdx} className="mr-1.5 mt-2">
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

export default ExperienceSection