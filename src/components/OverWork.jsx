import React from 'react'
import ServicesTitle from './ServicesTitle'
import assets from '../assets/assets'

const OverWork = () => {

    const workData = [
        {
            title: "Mobile app marketing",
            description: "We turn bold idea into powerful digital solutions that connect, engage...",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard management",
            description: "We help you excute your plan and deliver results.",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness app promotion",
            description: "We help you create a marketing strategy that drivers results.",
            image: assets.work_fitness_app
        }
    ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <ServicesTitle title = 'Our latest work' desc = 'From strategy to excution, we craft digital solutions that move your business forword.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl '>
            {
                workData.map( (work, index) =>(
                    <div key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="" className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OverWork