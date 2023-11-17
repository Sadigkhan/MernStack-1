import React from 'react'

export default function Search({setQuery}) {

    const handleSearch=(e)=>{
      e.preventDefault()
setQuery(e.target.value)
console.log(e.target.value)
    }

  return (
 
        <form >
            <input
             onChange={(e)=>{
                handleSearch(e)
            }} 
            className='h-10 outline-none p-4 w-[300px] rounded-sm' type="text" placeholder='Axtar...'/>

        </form>

  )
}
