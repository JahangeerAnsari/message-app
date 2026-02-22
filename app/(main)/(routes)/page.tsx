
import {  UserButton } from '@clerk/nextjs'

import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div>
      <Button className="bg-red-500">Click me</Button>
      welcome to the home page
      <UserButton afterSignOutUrl='/'/>
      <ModeToggle/>
    </div>
  )
}
