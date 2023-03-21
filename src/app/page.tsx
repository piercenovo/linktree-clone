import { redirect } from 'next/navigation'
import { get } from '@vercel/edge-config'
import { Data } from './interface'
import { LinkCardList } from '@/components/LinkCardList'
import { SocialIconList } from '@/components/SocialIconList'
import { Profile } from '@/components/Profile'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const data: Data | undefined = await get('linktree')

  if (!data) {
    redirect('https://www.piercenovo.dev')
  }

  return (
    <div className='flex flex-col items-center mx-auto w-full justify-center pt-16 px-8'>
      <Profile data={data} />
      <SocialIconList data={data} />
      <LinkCardList data={data} />
    </div>
  )
}
