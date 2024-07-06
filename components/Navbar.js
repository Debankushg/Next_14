"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <>

      {pathname !== '/login' && (

        <nav className="bg-white p-4 flex justify-between items-center text-amber-800">
          <ul className="flex justify-start space-x-4">
            <li>
              <Link href="/" className={`font-semibold hover:bg-[#f7b602] hover:text-white rounded-full px-2 py-1 transition duration-300 ${isActive('/') ? 'bg-[#f7b602]' : ''}`}>
                Home

              </Link>
            </li>
            <li>
              <Link href="/about" className={`font-semibold hover:bg-[#f7b602] hover:text-white rounded-full px-2 py-1 transition duration-300 ${isActive('/about') ? 'bg-[#f7b602]' : ''}`}>
                About

              </Link>
            </li>
            <li>
              <Link href="/contacts
              " className={`font-semibold hover:bg-[#f7b602] hover:text-white rounded-full px-2 py-1 transition duration-300 ${isActive('/contacts') ? 'bg-[#f7b602]' : ''}`}>
                Contact

              </Link>
            </li>
            <li>
              <Link href="/table" className={`font-semibold hover:bg-[#f7b602] hover:text-white rounded-full px-2 py-1 transition duration-300 ${isActive('/table') ? 'bg-[#f7b602]' : ''}`}>
                Reserve Your Table

              </Link>
            </li>
          </ul>
          <ul className='flex'>
            <li>
              <Link href="/login" className={`bg-red-700 font-semibold hover:bg-[#f7b602] rounded-md text-center hover:text-red-900 text-white px-3 py-1 transition duration-300 ${isActive('/login') ? 'bg-[#f7b602]' : ''}`}>
                Login

              </Link>
            </li>
          </ul>
        </nav>

      )}
    </>
  );
};

export default Navbar;
