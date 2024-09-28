import React, { forwardRef } from 'react'
import Badge from '../ui/Badge'
import LinkWithIcon from '../ui/LinkWithIcon'
import Description from '../ui/Description'
import TitleWithLink from '../ui/TitleWithLink'

type Experience = {
    startDate: string,
    endDate: string,
    designations: string[],
    description: string,
    projects: { url: string, label: string }[],
    skills: string[],
    company: {
        name: string,
        url: string
    }
}

const experiences: Experience[] = [
    {
        startDate: '2024',
        endDate: 'present',
        designations: ['Software Engineer'],
        description: 'Built a parser to validate and convert a custom query language to Spark SQL using Python. Created a log forwarding service with RabbitMQ for sending logs to external sources, along with a webhook endpoint supporting various authentication methods, including bearer, basic, and HMAC, to enable high-volume log ingestion. Additionally, I created complex data visualization UI components to enhance the comprehensibility of various analytics.',
        projects: [],
        skills: ['Python', 'Flask', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'React.js', 'TypeScript', 'AWS'],
        company: {
            name: 'DNIF HYPERCLOUD',
            url: 'https://www.dnif.it'
        }
    },
    {
        startDate: '2021',
        endDate: '2024',
        designations: ['Full-Stack Developer', 'Web Developer'],
        description: 'Built a low-code authoring tool for creating courses, focusing on the design and implementation of interactive, responsive, and accessible UI components. Implemented features like live editing, drag-and-drop functionality, and user authentication, integrating Stripe for payments. Additionally, Architected and deployed the entire product on AWS, leveraging services like EC2, Lambda, S3, RDS, and CloudFront, and created a CI/CD pipeline using GitHub Actions',
        projects: [
            {
                label: 'ZeltoAuthoring',
                url: 'https://zeltoauthoring.com'
            }
        ],
        skills: ['React.js', 'Vue.js', 'TypeScript', 'Node.js', 'Django', 'Python', 'MySQL', 'AWS', 'Docker', 'GitHub Actions'],
        company: {
            name: 'Zilliobit Interactive',
            url: 'https://zilliobit.com'
        }
    }
]

interface Props {
    id: string;
    className?: string
}

const ExperienceSection = forwardRef(function ExperienceSection({ id, className = '' }: Props, ref: React.Ref<HTMLElement>) {
    return (<section ref={ref} id={id} className={className} aria-label='Work experience' >
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
})

export default ExperienceSection