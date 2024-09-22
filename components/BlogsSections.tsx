import React from 'react'
import Image from 'next/image'
import algoliaSearch from '@/public/images/algolia-search.webp'
import headless from '@/public/images/headless.webp'
import TitleWithLink from './ui/TitleWithLink'

const blogs = [
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        date: '2020',
        url: 'https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/',
        thumbnail: {
            url: algoliaSearch,
            altText: 'Telescope'
        },
    }, {
        title: 'Building a Headless Mobile App CMS From Scratch',
        date: '2020',
        url: 'https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/',
        thumbnail: {
            url: headless,
            altText: 'Headless horseman'
        },
    },
]

interface Props {
    className: string
}

const BlogsSections = ({ className = '' }: Props) => {
    return <section id="writing" className={className}>
        <div className='bg-slate-900/75 backdrop-blur px-6 py-5 -mx-6 mb-4 sticky top-0 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writing</h2>
        </div>
        <div>
            <ol className="group/list">
                {
                    blogs.map((blog, blogIdx) => <li key={blogIdx} className="mb-12">
                        <div className="group relative transition-all grid grid-cols-8 gap-4 sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <Image
                                className='z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2'
                                src={blog.thumbnail.url}
                                alt={blog.thumbnail.altText}
                                width={200}
                                height={48}
                            />
                            <div className="z-10 -mt-1 justify-center col-span-6">
                                <p className='text-sm font-semibold leading-6'>{blog.date}</p>
                                <h3 className="-mt-1 font-medium leading-snug text-slate-200">
                                    <TitleWithLink href={blog.url} title={blog.title} ariaLabel={`${blog.title} (opens in a new tab)`} />
                                </h3>
                            </div>
                        </div>
                    </li>)
                }
            </ol>
        </div>
    </section>
}

export default BlogsSections