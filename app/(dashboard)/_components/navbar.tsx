"use client"

import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-pink-300 text-white">
      <div className="hidden lg:flex lg:flex-1 bg-purple-400">Search</div>
      <UserButton />
    </div>
  )
}
