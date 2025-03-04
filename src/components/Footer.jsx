import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' max-w-[1300px] mx-auto flex justify-around p-6 md:p-10 text-sm md:text-lg mt-12'>
      
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Ankit Maurya</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl justify-center'>
          <a href="https://github.com/Ankit-Maurya-12223197" target="_blank"><FaGithubSquare /></a>
          <a href="#"><FaInstagram /></a>
        </div>

      </div>

      <p className='text-gray-400'>@2024 Ankit Maurya</p>

    </div>
  )
}

export default Footer