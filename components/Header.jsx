'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
const Header = () => {
  const session = useSession()
  console.log(session);
  return (
    <div className='flex flex-col items-center gap-2'>
      {session.status === 'unauthenticated' &&
      <>
      <p>Login to get started </p>
      <button
        onClick={() => {signIn('github')}}
        className='btn btn-active btn-neutral'
      >
        Sign in with Github
      </button>
      </>
}
{session.status === 'authenticated' &&<div>
         <p>Welcome</p>
        <h1 className='text-bold text-2xl text-black uppercase'> {session.data.user.name}</h1>
        <p>email: {session.data.user.email}</p>
        </div>
  }
    {session.status === "loading" &&
    <span className="loading loading-spinner text-primary"></span>
  }
    </div>
  )
}

export default Header
