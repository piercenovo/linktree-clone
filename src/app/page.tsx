import { LinkCardList } from '@/components/LinkCardList'
import { SocialIconList } from '@/components/SocialIconList'
import { Profile } from '@/components/Profile'
import data from '@/data.json'

export default function Home () {
  return (
    <div className='flex flex-col items-center mx-auto w-full justify-center pt-16 px-8'>
      <Profile data={data} />
      <SocialIconList data={data} />
      <LinkCardList data={data} />
    </div>
  )
}
