import Image from 'next/image'

export function LinkCard ({
  href,
  title,
  image
}: {
  href: string;
  title: string;
  image?: string;
  }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 rounded-md w-full hover:scale-105 transition-all ease-in bg-gray-100 mb-4 max-w-2xl'
    >
      <div className='flex text-center w-full'>
        <div className='w-12 h-12'>
          {image && (
            <Image
              alt={title}
              src={image}
              width={50}
              height={50}
            />
          )}
        </div>
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}
