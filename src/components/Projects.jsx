import React from 'react'
//import all the images related project
import project1 from '../assets/project1.png'
import { AiFillGithub } from 'react-icons/ai'
import Reveal from './Reveal'


const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "UI for frontend development using React",
        link: {
            site: "water-selling-system-na53bae05-ankit-maurya-12223197s-projects.vercel.app",
            github: "https://github.com/Ankit-Maurya-12223197/waterSellingSystem",
        },
    },
    {
        img: project1,
        title: "Project #1",
        description: "UI for frontend development using React",
        link: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project1,
        title: "Project #1",
        description: "UI for frontend development using React",
        link: {
            site: "#",
            github: "#",
        },
    },
]

const Projects = () => {
    return (
        <div className=' max-w-[1000px] mx-auto p-9 md:my-20' id='projects'>
            <h2 className='text-2xl font-bold text-center text-gray-200 mb-8 '>Projects</h2>
            {projects.map((project, index) => (
                <Reveal>
                    <div key={index} className={` flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className=' w-full md:w-1/2 p-4'>
                            <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg' />
                        </div>

                        <div className='w-full md:1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                <a href={project.link.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duraion-300'>View site</a>
                                <a href={project.link.github} className='px-4 py-2 bg-slate-700 text-xl text-gray-200 rounded-lg hover:bg-slate-800 transition duraion-300'> <AiFillGithub /> </a>
                            </div>

                        </div>

                    </div>
                </Reveal>
            ))}

        </div>
    )
}

export default Projects