'use client'

import { useClerk } from '@clerk/nextjs'

export const ButtonSignOut = () => {
  const { signOut } = useClerk()

  return (
    // Clicking this button signs out a user
    // and redirects them to the home page "/".
    <button className='font-normal text-[.8rem] tracking-[1px]' onClick={() => signOut({ redirectUrl: '/' })}>Sign out</button>
  )
}