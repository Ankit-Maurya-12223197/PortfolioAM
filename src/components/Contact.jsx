import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const Contact = () => {
    return (
        <div className=' px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
            <Reveal>
                <div className='grid md:grid-cols-2 place-items-center'>
                    <div>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-xl font-semibold mb-5'>About <span>Me</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nemo porro illum inventore dolor harum illo
                                reiciendis ipsam. Dicta nesciunt eaque quaerat,
                                unde magni nobis a neque! Ab debitis natus aliquam.
                            </p>
                        </div>

                        <div className='flex mt-10 items-center gap-7'>
                            <div className='bg-gray-800/40 p-3 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>5 <span>+</span></h3>
                                <p className='text-xs md:text-base'><span>Projects</span></p>
                            </div>

                            <div className='bg-gray-800/40 p-3 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>2 <span>+</span></h3>
                                <p className='text-xs md:text-base'><span>years of exp.</span></p>
                            </div>

                            <div className='bg-gray-800/40 p-3 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>50 <span>+</span></h3>
                                <p className='text-xs md:text-base'><span>friends like</span></p>
                            </div>


                        </div>
                    </div>
                    <form action="https://getform.io/f/bpjnzmlb" method='POST'
                        className=' max-w-6xl p-5 md:p-12' id='form'>
                        <p className='text-gray-100 font-bold text-xl mb-2'>Let's Connect</p>
                        <input type="text" id='name' placeholder='Your Name ...' name='name' className='mb-2 w-full bg-gray-300 rounded-md border-purple-600 py-2 pl-2 pr-4' />
                        <input type="email" id='email' placeholder='Your Email ...' name='email' className='mb-2 w-full bg-gray-300 rounded-md border-purple-600 py-2 pl-2 pr-4' />
                        <textarea name="textarea" id="textarea" cols="30" rows="4" placeholder='Your Message ...' className='mb-2 w-full bg-gray-300 rounded-md border-purple-600 py-2 pl-2 pr-4'></textarea>

                        <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color cursor-pointer'>
                            Send Message
                        </button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

export default Contact