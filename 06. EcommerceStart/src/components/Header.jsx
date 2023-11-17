import React from 'react'
import Logo from './headerComponents/Logo'
import Navbar from './headerComponents/Navbar'
import Search from './headerComponents/Search'

export default function Header({setQuery}) {
  return (
    <div className='flex justify-between items-center bg-[#929292]'>
        <Logo/>
        <Search setQuery={setQuery}/>
        <Navbar/>
    </div>
  )
}
