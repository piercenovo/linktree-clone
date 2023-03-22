export function Footer () {
  return (
    <footer className='absolute bottom-0 flex animate-fade-in flex-col gap-6 pb-6 w-full'>
      {/* Only visible for smaller devices */}
      <div className='text-gray-200 flex flex-col items-center gap-2 text-xs lg:text-sm'>
        <span className='text-center transition'>Hecho con ❤️ por Pierce Novoa</span>
        <span className='text-center transition'>&#169; 2023</span>
      </div>
    </footer>
  )
}
