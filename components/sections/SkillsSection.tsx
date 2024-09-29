import React, { forwardRef } from 'react'
import Badge from '../ui/Badge'

type Skill = {
    category: string,
    skills: string[]
}

const skillsList: Skill[] = [
    {
        category: "Frontend",
        skills: ["Next.js", "React.js", "Vue.js", "JavaScript", "TypeScript"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Python", "Django", "Flask"]
    },
    {
        category: "Database & Message Brokers",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS EC2", "AWS RDS", "AWS Lambda", "AWS S3", "Docker", "Kubernetes", "GitHub Actions"]
    }
];


interface Props {
    id: string;
    className?: string
}

const SkillsSection = forwardRef(function SkillsSection({ id, className = '' }: Props, ref: React.Ref<HTMLElement>) {
    return (<section ref={ref} id={id} className={className} aria-label='Top skills' >
        <div className='sticky top-0 z-20 bg-slate-900/75 backdrop-blur px-6 py-5 -mx-6 mb-4 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
        </div>
        <div>
            <ol className="group/list">
                {
                    skillsList.map((skillItem, skillItemIdx) => <li key={skillItemIdx} className='mt-6'>
                        <h3 className="font-medium leading-snug text-slate-200">
                            {skillItem.category}
                        </h3>
                        <ul className="flex flex-wrap mt-1.5 text-xs font-medium" aria-label="Technologies used">
                            {skillItem.skills.map((skill, skillIdx) => <li key={skillIdx} className="mr-1.5 mt-2">
                                <Badge label={skill} />
                            </li>)}
                        </ul>
                    </li>)
                }
            </ol>
        </div>
    </section>)
})

export default SkillsSection