import Image from 'next/image'
import { redirect } from 'next/navigation'
import { InstagramIcon } from '../components/instagram-icon'
import { LinkedinIcon } from '../components/linkedin-icon'
import { TwitterIcon } from '../components/twitter-icon'
import { get } from '@vercel/edge-config'
import LinkCard from '@/components/link-card'
import { Data, Link, Social } from './interface'

export default async function Home() {
  const data: Data | undefined = await get('linktree')

  if (!data) {
    redirect('https://www.piercenovo.dev')
  }

  return (
    <div className='flex flex-col items-center mx-auto w-full justify-center mt-16 px-8'>
      <Image
        priority
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className='font-bold mt-4 text-xl text-white'>
        {data.name}
      </h1>
      <h2 className='flex justify-center items-center font-medium text-white w-full mt-2 mb-6'>
        Developer and Designer
      </h2>
      <div className='flex items-center gap-4 mb-9'>
        {data.socials.map((social: Social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.href.includes('twitter')
              ? (
                <TwitterIcon key={social.href} />
                )
              : social.href.includes('instagram')
                ? (
                  <InstagramIcon key={social.href} />
                  )
                : social.href.includes('linkedin')
                  ? (
                    <LinkedinIcon key={social.href} />
                    )
                  : null}
          </a>

        ))}
      </div>
      {data.links.map((link: Link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  )
}
