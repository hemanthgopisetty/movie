import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='text-xl text-white fixed flex items-center justify-between h-[35px] w-full z-40 backdrop-blur-[4px] bg-black/5'>
          <nav className='w-full px-[20px] flex items-center justify-between '>
            <li className='list-none'>
                <Link href={'.'}>
                  <Image
                    width={40} 
                    height={40}
                    alt='Movie'
                    priority
                    quality={100}
                    src="/Movie.png"
                    className='mt-4 mx-8 object-fill'
                  />
                </Link>
            </li>

            <ul className='flex items-center gap-16 justify-around'>
              
              <li>
                <Link href={'movies'}>Movies</Link>
              </li>
              
              <li>
                <Link href={'tv'}>TV Shows</Link>
              </li>
              
              <li>
                Account
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