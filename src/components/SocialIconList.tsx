import { Data, Social } from '@/app/interface'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons'

export function SocialIconList({ data }: {data: Data}) {
  return (
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
  )
}
