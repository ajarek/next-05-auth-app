'use client'

import React from 'react'
import Image from 'next/image'
import Photo from 'public/my-logo.png'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
const Navbar = () => {
  const session = useSession()
  return (
    <nav className='navbar bg-primary text-primary-content h-20 flex justify-between px-4 '>
      <Link href='/'>
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
        {session.status === 'authenticated' ? (
          <>
            <button
              className={'text-red-200 text-bold text-2xl mr-2'}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Image
              src={session.data.user.image}
              width={40}
              height={40}
              alt='logo'
              className='border-2 border-rose-200 rounded-full p-1 '
            />
          </>
        ) : (
          <button
            onClick={() => {
              signIn('github')
            }}
            className='text-green-200 text-bold text-2xl ml-2'
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
