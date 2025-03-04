import React from 'react'
import am1 from '../assets/am1.jpg'
import { TypeAnimation } from "react-type-animation"
import ShinyEffects from './ShinyEffects'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'


const Hero = () => {
    return (
        <div className=' mt-24 max-w-[1200px] mx-auto relative' id='home'>
            <div className=' grid md:grid-cols-2 place-items-center gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Fullstack Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Consultant",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                    >
                        HEY, I AM <br />
                        <span className='text-purple-500'>ANKIT MAURYA</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
                    >
                        I am a passionate fullstack developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='flex items-center gap-6 my-4 md:mb-0'
                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0ps 0px 8px rgba(0,0,0,0.3" }}
                            className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
                        >
                            Download CV
                        </motion.button>

                        <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/Ankit-Maurya-12223197' target="_blank"><AiOutlineGithub /></motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/am2003/' target="_blank"><AiOutlineLinkedin /></motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='#'><AiOutlineInstagram /></motion.a>
                        </div>

                    </motion.div>

                </motion.div>

                <motion.img src={am1} className='w-[300px] md:w-[300px] rounded-2xl'
                    initial={{ opacity: 0, scale: 0.5, y: -50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className='flex flex-col '
            >
                <h2 className='text-gray-200 font-bold mt-14 px-12 text-center '>My Tech Stack</h2>

                <div className='flex text-8xl px-12 md:px-0 w-full justify-center py-10'>
                <DiHtml5 className='text-orange-600 mx-2 ' />
                <DiCss3 className='text-blue-600 mx-2 ' />
                <DiJavascript1 className='text-yellow-500 mx-2 ' />
                <DiReact className='text-blue-500 mx-2 ' />
                <DiNodejsSmall className='text-green-500 mx-2 ' />

                </div>
            </motion.div>

            <div className='absolute inset-0 hidden md:block'>
                <ShinyEffects left={0} top={0} size={1200} />
            </div>
        </div>

    )
}

export default Hero