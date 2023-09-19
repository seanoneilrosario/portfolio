'use client'

import { AnimatePresence, motion } from "framer-motion"

const Header = () => {
    const menu_toggle = (e:any) => {
        if(!e.target.parentElement.parentElement?.classList.contains('active')) {
            e.target.parentElement.parentElement?.classList.add('active')
        } else {
            e.target.parentElement.parentElement?.classList.remove('active')
        }
        if(!e.target.parentElement.parentElement.nextSibling?.children[0].classList.contains('active')) {
            e.target.parentElement.parentElement.nextSibling?.children[0].classList.add('active')
        } else {
            e.target.parentElement.parentElement.nextSibling?.children[0].classList.remove('active')
        }
    }
    
  return (
    <div className="pointer-events-none relative z-[5]">
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: 'spring', velocity: 10 }}
                exit={{ opacity:0, x: 20 }}
                viewport={{ once: true }}
                onClick={menu_toggle} 
                className='menu_toggle pointer-events-auto'
            >
                <span className='menu_hamberg'>
                <span></span>
                <span></span>
                <span></span>
                </span>
            </motion.div>
            <div className="px-[20px] pt-[20px] flex justify-end md:justify-between items-center md:items-start">
                <div className="menu_items pointer-events-auto h-[100%] z-[1000] fixed md:static left-[0] top-[0] w-[80vw] md:w-[initial] translate-x-[-80vw] md:translate-x-[0]">
                    <a className="block md:hidden md:text-center px-[20px] md:px-[50px] py-[8px] text-[3vw] md:text-[1.1vw] font-[600] mb-[10px]" href="/">
                        Home
                    </a>
                    <a className="block md:text-center px-[20px] md:px-[50px] py-[8px] text-[3vw] md:text-[1.1vw] font-[600] mb-[10px]" href="/about-me">
                        About Me
                    </a>
                    <a className="block md:text-center px-[20px] md:px-[50px] py-[8px] text-[3vw] md:text-[1.1vw] font-[600] mb-[10px]" href="/portfolio">
                        Portfolio
                    </a>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    exit={{ opacity:0, y: 20 }}
                    className="pointer-events-auto hidden md:block"
                >
                    <a className="font-[Amita-Regular] text-[6vw] md:text-[3vw]" href='/'>Sean</a>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    exit={{ opacity:0, x: -20 }}
                    className="pointer-events-auto bio_link"
                >
                    <p className="text-[3vw] md:text-[1.1vw]">Email: <a href="mailto:seanrosario119@gmail.com" className="italic underline">seanrosario119@gmail.com</a></p>
                    <p className="text-[3vw] md:text-[1.1vw]">Phone: <a href="tel:+639918448992" className="italic underline">+63 991 844 8992</a></p>
                    <div className="flex mt-[5px] linked_items pointer-events-auto">
                        <a target="_blank" href="https://github.com/seanoneilrosario" className="mr-[8px]">
                        <svg className="w-[6vw] md:w-[2vw] h-[6vw] md:h-[2vw]" version="1.1" width="25" height="25" viewBox="0 0 512 512">
                            <path d="M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"/>
                        </svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/sean-rosario-67147b18a" className="">
                        <svg className="w-[6vw] md:w-[2vw] h-[6vw] md:h-[2vw]" xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 512 512">
                            <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"/>
                        </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    </div>
  )
}

export default Header;