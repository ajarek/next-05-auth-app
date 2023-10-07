import React from 'react'
import Image from 'next/image'
import Photo from 'public/my-logo.png'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='navbar bg-primary text-primary-content h-20 flex justify-between px-4 '>
         <Link href='/' >
         <Image
            src={Photo}
            width={50}  
            height={50}
            alt='logo'
            className=''
          />
          <h2 className='text-bold text-2xl ml-2'>@Jarek</h2>
         </Link>
         
          <div>
          <button className='text-bold text-2xl ml-2' >Sign In</button>
          </div>
    </nav>
  )
}

export default Navbar