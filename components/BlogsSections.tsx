import React from 'react'
import Image from 'next/image'
import algoliaSearch from '@/public/images/algolia-search.webp'
import headless from '@/public/images/headless.webp'

const blogs = [
    {
        title: 'Integrating Algolia Search with WordPress',
        date: '2020',
        url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
        thumbnail: {
            url: algoliaSearch,
            altText: 'Telescope'
        },
    }, {
        title: 'Building a Headless Mobile App CMS From Scratch',
        date: '2020',
        url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
        thumbnail: {
            url: headless,
            altText: 'Headless horseman'
        },
    },
]

interface Prop {
    className: string
}

const BlogsSections = ({ className = '' }: Prop) => {
    return <div id="blogs" className={className}>
        <ol className="group/list">
            {
                blogs.map((blog, blogIdx) => <li key={blogIdx} className="mt-12">
                    <div className="group relative transition-all grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className='sm:col-span-2'>
                            <Image
                                className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                                src={blog.thumbnail.url}
                                alt={blog.thumbnail.altText}
                            />
                        </div>
                        <div className="z-10 flex flex-col justify-center sm:col-span-6">
                            <div className='text-sm font-semibold leading-6'>{blog.date}</div>
                            <h3 className="-mt-1 font-medium leading-snug text-slate-200">
                                <a href={blog.url} className="group/link hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label={`${blog.title} (opens in a new tab)`}>
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                        {blog.title}
                                        <span className="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                        </span>
                                    </span>
                                </a>
                            </h3>
                        </div>
                    </div>
                </li>)
            }
        </ol>
    </div>
}

export default BlogsSections