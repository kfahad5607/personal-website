import React from 'react'
import TextLink from './ui/TextLink'

const AboutSection = () => {
    return (
        <div id="about">
            <p className="mb-4">
                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an <TextLink href='https://us.mullenlowe.com/' label='advertising agency' ariaLabel='advertising agency (opens in a new tab)' className='text-slate-200' />, a <TextLink href='https://starry.com/' label='start-up' ariaLabel='start-up (opens in a new tab)' className='text-slate-200' />, a <TextLink href='https://www.apple.com/apple-music/' label='huge corporation' ariaLabel='huge corporation (opens in a new tab)' className='text-slate-200' />, and a <TextLink href='https://upstatement.com/' label='digital product studio' ariaLabel='digital product studio (opens in a new tab)' className='text-slate-200' />digital product studio.
            </p>
            <p className="mb-4">My main focus these days is building accessible user interfaces for our customers at <TextLink href='https://www.klaviyo.com/' label='Klaviyo' ariaLabel='Klaviyo (opens in a new tab)' className='text-slate-200' />. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an <TextLink href='https://www.newline.co/courses/build-a-spotify-connected-app' label='online video course' ariaLabel='online video course (opens in a new tab)' className='text-slate-200' /> that covers everything you need to know to build a web app with the Spotify API.
            </p>
            <p >When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for <TextLink href='
            #' label='Korok seeds' ariaLabel='Korok seeds (opens in a new tab)' className='text-slate-200' />
            </p>
        </div>
    )
}

export default AboutSection