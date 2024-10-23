import React from 'react'

export default function Error({children} : {children: React.ReactNode}) {
  return (
    <>
        <p className='text-center my-4 bg-red-600 uppercase text-white font-bold p-3 text-sm '>{children}</p>
    </>
  )
}
