import React from 'react'
import Link from 'next/link'

const sections = [
    {
        label: "about",
        href: "#about",
    },
    {
        label: "experience",
        href: "#experience",
    },
    {
        label: "projects",
        href: "#projects",
    },
    {
        label: "skills",
        href: "#skills",
    },
];

interface Props {
    currentSection: string
}

const IntroSection = ({ currentSection }: Props) => {
    return (
        <header className="lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:max-h-screen lg:py-24 lg:sticky lg:top-0">
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-slate-200 tracking-tight sm:text-5xl">
                        <Link href="/">Fahad Khan</Link>
                    </h1>
                    <h2 className="text-lg font-medium text-slate-200 tracking-tight mt-3 sm:text-xl">
                        Software Engineer
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal">
                        Engineer at heart, building performant products and embracing lifelong learning.
                    </p>
                </div>
                <nav
                    className="mt-16 hidden lg:block"
                    aria-label="In-page jump links"
                >
                    <ul className="w-max">
                        {sections.map((section) => (
                            <li key={section.href}>
                                <Link
                                    href={section.href}
                                    className={`group flex items-center gap-x-4 py-3 outline-none ${currentSection === section.label ? "active" : ""
                                        }`}
                                >
                                    <span className="transition-all h-px w-8 bg-slate-600 group-[.active]:w-16 group-[.active]:bg-slate-200 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 group-focus-visible:w-16"></span>
                                    <span className="transition-colors uppercase text-xs text-slate-500 font-bold tracking-widest group-[.active]:text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        {section.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul
                className="flex items-center gap-x-5 mt-8"
                aria-label="Social Media"
            >
                <li>
                    <Link
                        href="https://github.com/kfahad5607"
                        className="block hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub (opens in a new tab)"
                        title="GitHub"
                    >
                        <div className="sr-only">Github</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/fahad-khan-6050b0152"
                        className="block hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn (opens in a new tab)"
                        title="LinkedIn"
                    >
                        <div className="sr-only">LinkedIn</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://x.com/kfahad5607"
                        className="block hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Twitter (opens in a new tab)"
                        title="Twitter"
                    >
                        <div className="sr-only">Twitter</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 1227"
                            fill="none"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        href="mailto:kfahad5607@gmail.com"
                        className="block hover:text-slate-200 transition-colors"
                        aria-label="Email"
                        title="Email"
                    >
                        <div className="sr-only">Email</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-6 w-6"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default IntroSection