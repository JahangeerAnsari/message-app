
import {  UserButton } from '@clerk/nextjs'

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button className="bg-red-500">Click me</Button>
      welcome to the home page
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
