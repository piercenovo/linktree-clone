import { Data, Link } from '@/interface.d'
import { LinkCard } from './LinkCard'

export function LinkCardList ({ data }: {data: Data}) {
  return (
    <>
      {data.links.map((link: Link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </>
  )
}
