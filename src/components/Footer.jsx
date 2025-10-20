import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'

const Footer = () => {
  return (
        <div className="w-full pt-15 mt-15  border-t-1 border-gray-300 dark:bg-black dark:border-gray-500">
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
          {/* Left side (name + role) */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Muhammad Noman
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              React Developer
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Crafting digital experiences with code and creativity
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-7 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-[#00abf0] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-400 text-sm hover:text-[#00abf0] transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#our-work"
              className="text-gray-400 text-sm hover:text-[#00abf0] transition-colors duration-300"
            >
              Our Works
            </a>
            <a
              href="#contact-us"
              className="text-gray-400 text-sm hover:text-[#00abf0] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-3 mt-4 md:mt-0">
            {/* Instagram */}
            <div
              className="w-9 h-12 flex items-center justify-center rounded-md
                  bg-white dark:bg-black text-[#1193d4] border border-gray-300 dark:border-gray-500 
                 hover:bg-[#1193d4] hover:text-white transition-all duration-300 
                 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Instagram size={18} />
            </div>
            {/* GitHub */}
            <div
              className="w-9 h-12 flex items-center justify-center rounded-md
                  bg-white dark:bg-black text-[#1193d4] border border-gray-300 dark:border-gray-500 
                 hover:bg-[#1193d4] hover:text-white transition-all duration-300 
                 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Github size={18} />
            </div>
            {/* LinkedIn */}
            <div
              className="w-9 h-12 flex items-center justify-center rounded-md
                  bg-white dark:bg-black text-[#1193d4] border border-gray-300 dark:border-gray-500 
                 hover:bg-[#1193d4] hover:text-white transition-all duration-300 
                 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Linkedin size={18} />
            </div>
            {/* Twitter */}
            <div
              className="w-9 h-12 flex items-center justify-center rounded-md
                  bg-white dark:bg-black text-[#1193d4] border border-gray-300 dark:border-gray-500 
                 hover:bg-[#1193d4] hover:text-white transition-all duration-300 
                 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Twitter size={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3 md:gap-0 pt-[30px] pb-4 mt-[30px] border-t border-gray-300 dark:border-gray-500">
          <p className="text-gray-500 text-[12px]">
            © 2025 Muhammad Noman. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-600 text-[12px]">
            <span>Built with</span>
            <div className="flex gap-1 text-sky-400">
              <FaReact />
              <RiTailwindCssFill />
            </div>
          </div>

          <p className="text-gray-500 text-[13px]">Made by Muhammad Noman</p>
        </div>
      </div>
    </div>
  )
}

export default Footer