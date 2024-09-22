import React from 'react'
import Badge from './ui/Badge'
import LinkWithIcon from './ui/LinkWithIcon'
import Description from './ui/Description'
import TitleWithLink from './ui/TitleWithLink'

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

interface Props {
    className: string
}

const ExperienceSection = ({ className = '' }: Props) => {
    return (<section id="experience" className={className} >
        <div className='bg-slate-900/75 backdrop-blur px-6 py-5 -mx-6 mb-4 sticky top-0 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
        </div>
        <div>
            <ol className="group/list">
                {
                    experiences.map((experience, experienceIdx) => <li key={experienceIdx} className="mb-12">
                        <div className="group relative transition-all grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 uppercase text-slate-500 text-xs tracking-wide font-semibold mt-1 mb-2 sm:col-span-2" >
                                <span>{experience.startDate}</span>
                                <span className="inline-block h-px w-3 bg-current align-middle mx-1" ></span>
                                <span>{experience.endDate}</span>
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    {
                                        experience.designations.map((designation, designationIdx) => {
                                            if (designationIdx === 0) return <div key={designationIdx}>
                                                <TitleWithLink href={experience.company.url} title={`${designation} · `} subTitle={experience.company.name} ariaLabel={`${designation} at ${experience.company.name} (opens in a new tab)`} />
                                            </div>

                                            return <div key={designationIdx}>
                                                <div className="text-slate-500 mt-0.5" >{designation}</div>
                                            </div>
                                        })
                                    }
                                </h3>
                                <Description className='mt-2'>
                                    {experience.description}
                                </Description>
                                {
                                    experience.projects.length > 0 && <ul className="flex flex-wrap mt-2 text-xs text-slate-200 font-medium" aria-label="Related links">
                                        {experience.projects.map((project, projectIdx) => <li key={projectIdx} className="mr-4 mt-2">
                                            <LinkWithIcon href={project.url} label={project.label} icon='url' />
                                        </li>)}
                                    </ul>
                                }

                                <ul className="flex flex-wrap mt-2 text-xs font-medium" aria-label="Technologies used">
                                    {experience.skills.map((skill, skillIdx) => <li key={skillIdx} className="mr-1.5 mt-2">
                                        <Badge label={skill} />
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </li>)
                }
            </ol>
            <div className='mt-12'>
                <TitleWithLink className='relative font-semibold text-slate-200' href='/docs/resume.pdf' title='View Full Résumé' ariaLabel='View Full Résumé (opens in a new tab)' />
            </div>
        </div>
    </section>)
}

export default ExperienceSection