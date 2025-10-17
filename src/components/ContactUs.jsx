import React from 'react'
import ServicesTitle from './ServicesTitle'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {

        const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "2285a048-8e46-4d7e-b3e6-a3c3f3d4410c");

    try {
          const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Thank you for your submission")
          event.target.reset();
        } else {
          toast.error(data.message)
    }
      
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <ServicesTitle title = 'React out to us' desc = 'From strategy to execution, we craft digital solution that move your business forword.'/>

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name="name" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Your email</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" name="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} name="message" placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>
            </div>

            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
                submit <img src={assets.arrow_icon} alt="" width={14}/>
            </button>
        </form>
    </div>
  )
}

export default ContactUs