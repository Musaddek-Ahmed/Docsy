import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn('header')}>
        <Link href='/' className='md:flex-1'>
        <div className='hidden md:flex flex-row gap-2 items-center'>
          <Image
                src='/assets/icons/logo-icon.svg'
                alt='Logo'
                width={32}
                height={32}
            />
            <div className='text-white text-lg'>Docsy</div>
        </div>
            
            <Image
                src='/assets/icons/logo-icon.svg'
                alt='Logo'
                width={32}
                height={32}
                className='mr-2 md:hidden'
            />
        </Link>
        {children}
    </div>
  )
}

export default Header