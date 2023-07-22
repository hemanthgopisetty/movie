import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='text-xl text-white fixed flex items-center justify-between h-[60px] w-full z-[2] backdrop-blur-sm'>
          <nav className='w-full px-[20px] flex items-center justify-between '>
            <li className='list-none'>
                <Image
                  width={50} 
                  height={50}
                  alt='Movie'
                  priority
                  quality={100}
                  src="/Movie.png"
                  className='absolute top-1 bottom-0 right-28 left-28 object-fill'
                />
            </li>

            <ul className='flex items-center gap-16 justify-around'>
              
              <li>
                <Link href={'./movie'}>Movies</Link>
              </li>
              
              <li>
                <Link href={'./genere'}>Genere</Link>
              </li>

              <li>
                <Link href={'./people'}>People</Link>
              </li>

              <li>
              <input 
                type="text" 
                placeholder='Movies /TV Shows /Genre'
                className='rounded-lg  w-96 px-2 py-1'
              />
              </li>
            </ul>

          </nav>
        </header>
  )
}

export default Header;
/**
 * Header gonna contain Movies,Genre,TV Shows
 */