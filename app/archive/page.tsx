import React from 'react'
import Link from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Badge from '@/components/ui/Badge'
import TitleWithLink from '@/components/ui/TitleWithLink'

type Project = {
    year: number,
    title: string,
    madeAt: string,
    skills: string[],
    link: {
        url: string,
        label: string
    }
}

const projects: Project[] = [
  {
    year: 2024,
    title: "Cricbuzz Clone (Work in Progress)",
    madeAt: "Personal Project",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Python",
      "Web Scraping",
    ],
    link: {
      url: "https://github.com/kfahad5607/cricbuzz-clone",
      label: "Cricbuzz Clone",
    },
  },
  {
    year: 2021,
    title: "PlacePrep",
    madeAt: "College",
    skills: [
      "React.js",
      "Redux",
      "Bootstrap",
      "Express.js",
      "MongoDB",
      "linux",
    ],
    link: {
      url: "https://www.youtube.com/watch?v=eYJRO9IgCms",
      label: "PlacePrep",
    },
  },
  {
    year: 2020,
    title: "Cricket Scorer",
    madeAt: "College",
    skills: ["React.js", "React Context", "Bootstrap"],

    link: {
      url: "https://quirky-panini-a0df5c.netlify.app",
      label: "Cricket Scorer",
    },
  },
  {
    year: 2020,
    title: "Contact Keeper",
    madeAt: "College",
    skills: ["React.js", "Redux", "Bootstrap", "Express.js", "MongoDB"],
    link: {
      url: "https://contact-keeper-tzui.onrender.com",
      label: "Contact Keeper",
    },
  },
];

const Archive = () => {
    return (
        <div className="lg:py-24">
            <header>
                <Link href="/" className='group inline-flex items-center leading-tight font-semibold text-teal-300 mb-2'>
                    <span className='inline-block mr-1 transition-transform group-hover:-translate-x-2 motion-reduce:transition-none'>
                        <ArrowIcon direction='left' />
                    </span>
                    <span>
                        Fahad Khan
                    </span>
                </Link>
                <h1 className='text-slate-200 text-4xl tracking-tight font-bold sm:text-5xl'>All Projects</h1>
            </header>
            <div className="mt-12">
                <table id='content' className='w-full border-collapse text-left'>
                    <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
                        <tr className='text-slate-200 text-sm'>
                            <th className='font-semibold py-4 pr-8'>Year</th>
                            <th className='font-semibold py-4 pr-8'>Project</th>
                            <th className='hidden py-4 pr-8 text-sm font-semibold lg:table-cell'>Made at</th>
                            <th className='hidden py-4 pr-8 text-sm font-semibold lg:table-cell'>Built with</th>
                            <th className='hidden py-4 pr-8 text-sm font-semibold sm:table-cell'>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, projectIdx) =>
                                <tr key={projectIdx} className='border-b border-slate-300/10 last:border-none'>
                                    <td className='align-top py-4 pr-4 text-sm'>{project.year}</td>
                                    <td className='align-top py-4 pr-4'>
                                        <span className='font-semibold leading-snug text-slate-200'>
                                            <div>
                                                <div className="block sm:hidden">
                                                    {
                                                        project.link ? <TitleWithLink href={project.link.url} title={project.title} ariaLabel={`${project.title} (opens in a new tab)`} className='relative text-base sm:hidden' /> : <span>{project.title}</span>
                                                    }
                                                </div>
                                                <div className="hidden sm:block">{project.title}</div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                                        <div className='translate-y-px whitespace-nowrap'>
                                            {project.madeAt}
                                        </div>
                                    </td>
                                    <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                        <ul className='inline-flex flex-wrap text-xs -translate-y-1.5'>
                                            {
                                                project.skills.map((skill, skillIdx) => <li key={skillIdx} className='mr-1.5 my-1'  >
                                                    <Badge label={skill} />
                                                </li>)
                                            }
                                        </ul>
                                    </td>
                                    <td className='hidden py-4 align-top sm:table-cell'>
                                        {
                                            project.link && <div className='translate-y-1'>
                                                <TitleWithLink href={project.link.url} title={project.link.label} ariaLabel={`${project.link.label} (opens in a new tab)`} className='relative text-sm' />
                                            </div>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Archive