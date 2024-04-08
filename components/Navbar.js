"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()

  console.log(pathname);

  return (
    <>

      {pathname !== '/login' && (
        <nav className="bg-gray-800 p-4 flex justify-between">
          <ul className="flex justify-start space-x-4">
            <li>
              <Link href="/" className='text-white font-semibold'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className='text-white font-semibold'>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className='text-white font-semibold'>
                Contact
              </Link>
            </li>
          </ul>
          <ul className='flex'>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>

        </nav>
      )}
    </>
  );
};

export default Navbar;
