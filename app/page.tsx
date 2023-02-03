import Image from 'next/image'
import data from '../data.json'
import { InstagramIcon } from '../components/instagram-icon'
import { LinkedinIcon } from '../components/linkedin-icon'
import { TwitterIcon } from '../components/twitter-icon'

export default function Home() {
  return (
    <div className='flex flex-col items-center mx-auto w-full justify-center mt-16 px-8'>
      <Image
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
        {data.socials.map((social) => {
          if (social.href.includes('twitter')) {
            return <TwitterIcon key={social.href} />
          }
          if (social.href.includes('instagram')) {
            return <InstagramIcon key={social.href} />
          }
          if (social.href.includes('linkedin')) {
            return <LinkedinIcon key={social.href} />
          }
        })}
      </div>

    </div>
  )
}
