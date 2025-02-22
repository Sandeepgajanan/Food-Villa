import React from 'react'

const Internet = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-900 flex flex-col items-center justify-center gap-8 p-4'>
      <h1 className='text-center text-5xl text-zinc-100 font-bold mb-4 max-sm:text-3xl'>
        Connection Error
      </h1>

      <p className='text-zinc-400 text-lg max-w-md text-center max-sm:text-sm'>
        We are experiencing connectivity issues. Please check your internet connection and try again.
      </p>
      
      <div className='bg-zinc-800 rounded-lg p-6 shadow-lg'>
        <h2 className='text-zinc-200 text-xl font-semibold mb-4'>
          Troubleshooting Steps:
        </h2>
        <ul className='text-zinc-400 space-y-3'>
          <li className='flex items-center gap-2'>
            <span className='text-xl max-sm:text-sm'>1.</span>
            <span>Check your network cables</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-xl max-sm:text-sm'>2.</span>
            <span>Restart your router</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-xl max-sm:text-sm'>3.</span>
            <span>Contact your service provider</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Internet
