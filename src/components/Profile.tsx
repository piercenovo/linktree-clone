import { Data } from '@/app/interface'
import Image from 'next/image'
import React from 'react'

export function Profile({ data }: {data: Data}) {
  return (
    <>
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
      <h2 className='flex justify-center items-center font-medium text-gray-200 w-full mt-2 mb-6'>
        Software Developer
      </h2>
    </>
  )
}
