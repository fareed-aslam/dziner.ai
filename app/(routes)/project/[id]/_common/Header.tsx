"use client"
import Logo from '@/components/logo'
import ThemeToggleButton from '@/components/theme-toggle-button'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = ({projectName}:{projectName?:string}) => {
    const router=useRouter()
    const {theme,setTheme}=useTheme()
    const isDark=theme==="dark"

  return (
    <div className='sticky top-0'>
        <header className='border-b border-border/40 bg-card/50 backdrop-blur-sm'>
<div className='flex items-center justify-between px-4 py-2'>
    <div className='flex items-center gap-4'>
        <Logo/>
        <Button size="icon-sm"
        variant="ghost"
        className="rounded-full bg-muted!"
        onClick={()=>router.push("/")}
        >
<ArrowLeftIcon className='size-4'/>
        </Button>
        <p className='max-w-[200px] truncate font-medium'>{projectName||"Untitled Project"}</p>
    </div>
    <div className='flex items-center gap-3'>
        <ThemeToggleButton/>
    </div>
</div>
        </header>
      
    </div> 
  )
}

export default Header
