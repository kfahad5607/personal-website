import React from 'react'
import Link from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Badge from '@/components/ui/Badge'
import TitleWithLink from '@/components/ui/TitleWithLink'

const projects = [
    {
        "year": 2023,
        "title": "Emerson Collective",
        "madeAt": "Upstatement",
        "skills": [
            "Next.js",
            "TypeScript",
            "SCSS",
            "Contentful"
        ],
        "link": {
            "url": "https://www.emersoncollective.com/",
            "label": "emersoncollective.com"
        }
    },
    {
        "year": 2023,
        "title": "Harvard Business School Next.js Site",
        "madeAt": "Upstatement",
        "skills": [
            "React",
            "TypeScript",
            "Next.js",
            "Contentful"
        ],
        "link": {
            "url": "https://www.hbs.edu/",
            "label": "hbs.edu"
        }
    },
    {
        "year": 2022,
        "title": "Harvard Business School Design System",
        "madeAt": "Upstatement",
        "skills": [
            "Storybook",
            "React",
            "TypeScript"
        ],
        "link": null
    },
    {
        "year": 2022,
        "title": "Threadable",
        "madeAt": "Upstatement",
        "skills": [
            "React Native",
            "Ruby on Rails",
            "Firebase"
        ],
        "link": {
            "url": "https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&ct=threadablebooks.com%20header&mt=8",
            "label": "apps.apple.com"
        }
    },
    {
        "year": 2022,
        "title": "Pratt",
        "madeAt": "Upstatement",
        "skills": [
            "WordPress",
            "Timber",
            "WordPress Multisite",
            "Gutenberg",
            "JavaScript"
        ],
        "link": {
            "url": "https://www.pratt.edu/",
            "label": "pratt.edu"
        }
    },
    {
        "year": 2022,
        "title": "Everytown Gun Law Rankings",
        "madeAt": "Upstatement",
        "skills": [
            "WordPress",
            "Timber",
            "PHP",
            "Airtable API"
        ],
        "link": {
            "url": "https://everytownresearch.org/rankings/",
            "label": "everytownresearch.org/rankings"
        }
    },
    {
        "year": 2021,
        "title": "Koala Health",
        "madeAt": "Upstatement",
        "skills": [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Stripe",
            "Algolia",
            "Firebase Auth",
            "Formik",
            "Vercel"
        ],
        "link": {
            "url": "https://www.koala.health/",
            "label": "koala.health"
        }
    },
    {
        "year": 2021,
        "title": "Philadelphia Inquirer Sports Scoreboards",
        "madeAt": "Upstatement",
        "skills": [
            "React",
            "TypeScript",
            "Stats Perform API"
        ],
        "link": {
            "url": "https://www.inquirer.com/sports/",
            "label": "inquirer.com/sports"
        }
    },
    {
        "year": 2021,
        "title": "Vanderbilt Design System",
        "madeAt": "Upstatement",
        "skills": [
            "Twig",
            "Puppy",
            "JavaScript"
        ],
        "link": {
            "url": "https://www.vanderbilt.edu/",
            "label": "vanderbilt.edu"
        }
    },
    {
        "year": 2020,
        "title": "Michelle Wu for Boston Grassroots Toolkit",
        "madeAt": "Upstatement",
        "skills": [
            "Gatsby",
            "Styled Components"
        ],
        "link": {
            "url": "https://toolkit.michelleforboston.com/",
            "label": "toolkit.michelleforboston.com"
        }
    },
    {
        "year": 2020,
        "title": "The 19th News",
        "madeAt": "Upstatement",
        "skills": [
            "WordPress",
            "Timber",
            "Gutenberg",
            "PHP",
            "JavaScript",
            "Mailchimp",
            "AMP"
        ],
        "link": {
            "url": "https://19thnews.org/",
            "label": "19thnews.org"
        }
    },
    {
        "year": 2020,
        "title": "Upstatement’s WordPress Starter Kit",
        "madeAt": "Upstatement",
        "skills": [
            "WordPress",
            "Timber",
            "Gutenberg",
            "PHP",
            "JavaScript"
        ],
        "link": null
    },
    {
        "year": 2020,
        "title": "Northeastern CSSH",
        "madeAt": "Upstatement",
        "skills": [
            "WordPress",
            "Timber",
            "WordPress Multisite",
            "PHP",
            "Algolia",
            "JavaScript"
        ],
        "link": {
            "url": "https://cssh.northeastern.edu/",
            "label": "cssh.northeastern.edu"
        }
    },
    {
        "year": 2020,
        "title": "Integrating Algolia Search with WordPress Multisite",
        "madeAt": "Upstatement",
        "skills": [
            "Algolia",
            "WordPress",
            "PHP"
        ],
        "link": {
            "url": "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
            "label": "medium.com"
        }
    },
    {
        "year": 2020,
        "title": "Time to Have More Fun",
        "madeAt": "",
        "skills": [
            "Next.js",
            "Tailwind CSS",
            "Firebase"
        ],
        "link": {
            "url": "https://time-to-have-more-fun.now.sh/",
            "label": "time-to-have-more-fun.now.sh"
        }
    },
    {
        "year": 2019,
        "title": "Upstatement.com",
        "madeAt": "Upstatement",
        "skills": [
            "Nuxt",
            "Vue",
            "Prismic"
        ],
        "link": {
            "url": "https://www.upstatement.com/",
            "label": "upstatement.com"
        }
    },
    {
        "year": 2019,
        "title": "Building a Headless Mobile App CMS From Scratch",
        "madeAt": "Upstatement",
        "skills": [
            "Node",
            "Express",
            "Firebase",
            "Vue"
        ],
        "link": {
            "url": "https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9",
            "label": "medium.com"
        }
    },
    {
        "year": 2019,
        "title": "Moms Demand Action Mobile App",
        "madeAt": "Upstatement",
        "skills": [
            "NativeScript Vue",
            "iOS",
            "Android"
        ],
        "link": {
            "url": "https://www.upstatement.com/work/moms-demand-action/",
            "label": "Case Study"
        }
    },
    {
        "year": 2019,
        "title": "OctoProfile",
        "madeAt": "",
        "skills": [
            "Next.js",
            "Chart.js",
            "GitHub API"
        ],
        "link": {
            "url": "https://octoprofile.now.sh/",
            "label": "octoprofile.now.sh"
        }
    },
    {
        "year": 2018,
        "title": "Google Keep Clone",
        "madeAt": "",
        "skills": [
            "Vue",
            "Firebase"
        ],
        "link": {
            "url": "https://github.com/bchiang7/google-keep-vue-firebase",
            "label": "GitHub"
        }
    },
    {
        "year": 2018,
        "title": "Spotify Profile",
        "madeAt": "",
        "skills": [
            "React",
            "Express",
            "Styled Components"
        ],
        "link": {
            "url": "https://spotify-profile.herokuapp.com/",
            "label": "spotify-profile.herokuapp.com"
        }
    },
    {
        "year": 2018,
        "title": "Devoted Health",
        "madeAt": "Upstatement",
        "skills": [
            "Gatsby",
            "TypeScript",
            "Algolia"
        ],
        "link": {
            "url": "https://www.devoted.com/",
            "label": "devoted.com"
        }
    },
    {
        "year": 2018,
        "title": "Flagship Pioneering",
        "madeAt": "Upstatement",
        "skills": [
            "Craft CMS",
            "Chart.js"
        ],
        "link": {
            "url": "https://www.flagshippioneering.com/",
            "label": "flagshippioneering.com"
        }
    },
    {
        "year": 2018,
        "title": "Upstatement ESLint Config",
        "madeAt": "Upstatement",
        "skills": [
            "ESLint"
        ],
        "link": {
            "url": "https://www.npmjs.com/package/@upstatement/eslint-config",
            "label": "npmjs.com"
        }
    },
    {
        "year": 2018,
        "title": "Upstatement Prettier Config",
        "madeAt": "Upstatement",
        "skills": [
            "Prettier"
        ],
        "link": {
            "url": "https://www.npmjs.com/package/@upstatement/prettier-config",
            "label": "npmjs.com"
        }
    },
    {
        "year": 2018,
        "title": "blistabloc",
        "madeAt": "Scout",
        "skills": [
            "WordPress",
            "Timber",
            "WooCommerce"
        ],
        "link": null
    },
    {
        "year": 2018,
        "title": "Spotify’s Top Tracks of 2017",
        "madeAt": "Northeastern",
        "skills": [
            "R",
            "Spotify API"
        ],
        "link": {
            "url": "https://github.com/bchiang7/spotify-top-tracks-2017",
            "label": "GitHub"
        }
    },
    {
        "year": 2017,
        "title": "Halcyon Theme",
        "madeAt": "",
        "skills": [
            "VS Code",
            "Sublime Text",
            "Atom",
            "iTerm2",
            "Hyper"
        ],
        "link": {
            "url": "https://halcyon-theme.netlify.com/",
            "label": "halcyon-theme.netlify.com"
        }
    },
    {
        "year": 2017,
        "title": "Apple Music - MusicKit JS",
        "madeAt": "Apple",
        "skills": [
            "JavaScript"
        ],
        "link": {
            "url": "https://developer.apple.com/documentation/musickitjs",
            "label": "developer.apple.com"
        }
    },
    {
        "year": 2017,
        "title": "Apple Music Embeddable Web Player Widget",
        "madeAt": "Apple",
        "skills": [
            "MusicKit.js",
            "JavaScript",
            "SCSS"
        ],
        "link": {
            "url": "https://tools.applemusic.com/en-us",
            "label": "tools.applemusic.com"
        }
    },
    {
        "year": 2017,
        "title": "Apple Music Facebook Messenger Integration",
        "madeAt": "Apple",
        "skills": [
            "Ember",
            "JavaScript",
            "SCSS"
        ],
        "link": {
            "url": "https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming",
            "label": "theverge.com"
        }
    },
    {
        "year": 2017,
        "title": "Personal Website V3",
        "madeAt": "",
        "skills": [
            "Jekyll",
            "SCSS",
            "JavaScript"
        ],
        "link": {
            "url": "https://v3.brittanychiang.com/",
            "label": "v3.brittanychiang.com"
        }
    },
    {
        "year": 2017,
        "title": "Interventions",
        "madeAt": "Scout",
        "skills": [
            "Jekyll",
            "SCSS",
            "JavaScript"
        ],
        "link": {
            "url": "https://interventions.design/",
            "label": "interventions.design"
        }
    },
    {
        "year": 2017,
        "title": "Lonely Planet DBMS",
        "madeAt": "Northeastern",
        "skills": [
            "Python",
            "MySQL",
            "Flask",
            "JavaScript"
        ],
        "link": {
            "url": "https://github.com/bchiang7/CS3200-Project",
            "label": "GitHub"
        }
    },
    {
        "year": 2017,
        "title": "myNEU Redesign",
        "madeAt": "Northeastern",
        "skills": [
            "Jekyll",
            "SCSS",
            "JavaScript"
        ],
        "link": {
            "url": "https://bchiang7.github.io/Redesign-myNEU/",
            "label": "bchiang7.github.io/Redesign-myNEU"
        }
    },
    {
        "year": 2017,
        "title": "Crowd DJ",
        "madeAt": "HackBeanpot 2017",
        "skills": [
            "React",
            "Firebase",
            "Spotify API"
        ],
        "link": {
            "url": "https://github.com/crowddj/crowddj-react",
            "label": "GitHub"
        }
    },
    {
        "year": 2016,
        "title": "Personal Website V2",
        "madeAt": "",
        "skills": [
            "Jekyll",
            "SCSS",
            "JavaScript"
        ],
        "link": {
            "url": "https://v2.brittanychiang.com/",
            "label": "v2.brittanychiang.com"
        }
    },
    {
        "year": 2016,
        "title": "Weather Widget",
        "madeAt": "",
        "skills": [
            "Node",
            "Express",
            "EJS"
        ],
        "link": {
            "url": "https://github.com/bchiang7/DemoWebApp",
            "label": "GitHub"
        }
    },
    {
        "year": 2016,
        "title": "Screentime 2.0",
        "madeAt": "Starry",
        "skills": [
            "Cordova",
            "Backbone",
            "Marionette"
        ],
        "link": {
            "url": "https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents",
            "label": "starry.com"
        }
    },
    {
        "year": 2016,
        "title": "React Profile",
        "madeAt": "",
        "skills": [
            "React",
            "CSS"
        ],
        "link": {
            "url": "https://bchiang7.github.io/react-profile/",
            "label": "bchiang7.github.io/react-profile"
        }
    },
    {
        "year": 2016,
        "title": "CourseSource",
        "madeAt": "Northeastern",
        "skills": [
            "Angular",
            "Node",
            "Express",
            "MongoDB"
        ],
        "link": {
            "url": "https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project",
            "label": "GitHub"
        }
    },
    {
        "year": 2016,
        "title": "Personal Website V1",
        "madeAt": "",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        "link": {
            "url": "https://v1.brittanychiang.com/",
            "label": "v1.brittanychiang.com"
        }
    },
    {
        "year": 2016,
        "title": "Fontipsums",
        "madeAt": "",
        "skills": [
            "HTML",
            "SCSS"
        ],
        "link": {
            "url": "http://bchiang7.github.io/fontipsums/",
            "label": "bchiang7.github.io/fontipsums"
        }
    },
    {
        "year": 2015,
        "title": "NU Women in Tech",
        "madeAt": "Northeastern",
        "skills": [
            "Jekyll",
            "Bootstrap"
        ],
        "link": {
            "url": "https://nuwit.ccs.neu.edu/",
            "label": "nuwit.ccs.neu.edu"
        }
    },
    {
        "year": 2015,
        "title": "One Card For All",
        "madeAt": "MullenLowe",
        "skills": [
            "HTML",
            "SCSS",
            "JavaScript",
            "jQuery"
        ],
        "link": null
    },
    {
        "year": 2015,
        "title": "JetBlue HumanKinda",
        "madeAt": "MullenLowe",
        "skills": [
            "Tumblr",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "link": null
    }
]

const Archive = () => {
    return (
        <div className="lg:py-24">
            <header>
                <Link href="/" className='group inline-flex items-center leading-tight font-semibold text-teal-300 mb-2' rel="noreferrer noopener" aria-label=''>
                    <span className='inline-block mr-1 transition-transform group-hover:-translate-x-2 motion-reduce:transition-none'>
                        <ArrowIcon direction='left' />
                    </span>
                    <span>
                        Brittany Chiang
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