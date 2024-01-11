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
                    <a className="block md:hidden md:text-center px-[20px] md:px-[50px] py-[8px] text-[20px] md:text-[1.1vw] font-[600] mb-[10px]" href="/">
                        Home
                    </a>
                    <a className="block md:text-center px-[20px] md:px-[50px] py-[8px] text-[20px] md:text-[1.1vw] font-[600] mb-[10px]" href="/about-me">
                        About Me
                    </a>
                    <a className="block md:text-center px-[20px] md:px-[50px] py-[8px] text-[20px] md:text-[1.1vw] font-[600] mb-[10px]" href="/portfolio">
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
                    <p className="text-[4vw] md:text-[1.1vw]">Email: <a href="mailto:seanrosario119@gmail.com" className="italic underline">seanrosario119@gmail.com</a></p>
                    <p className="text-[4vw] md:text-[1.1vw]">Phone: <a href="tel:+639918448992" className="italic underline">+63 991 844 8992</a></p>
                    <div className="flex mt-[5px] linked_items pointer-events-auto">
                        <a target="_blank" href="https://github.com/seanoneilrosario" className="mr-[8px]">
                        <svg className="w-[6vw] md:w-[2vw] h-[6vw] md:h-[2vw]" version="1.1" width="25" height="25" viewBox="0 0 512 512">
                            <path d="M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"/>
                        </svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/sean-rosario-67147b18a" className="mr-[8px]">
                        <svg className="w-[6vw] md:w-[2vw] h-[6vw] md:h-[2vw]" xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 512 512">
                            <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"/>
                        </svg>
                        </a>
                        <a target="_blank" href="https://shopify.pxf.io/KjOK6z">
                            <svg className="w-[6vw] md:w-[2vw] h-[6vw] md:h-[2vw]" xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" viewBox="0 0 1024 1024">
                                <title/>
                                <g id="icomoon-ignore">
                                </g>
                                <path d="M654.379 1023.104l307.883-66.603c0 0-111.104-751.488-112-756.48-0.768-4.949-4.864-8.192-9.003-8.192s-82.304-5.803-82.304-5.803-54.4-54.357-61.397-60.203c-1.92-1.579-3.2-2.432-5.163-3.157l-38.997 900.437zM499.627 482.347c0 0-34.56-18.091-75.691-18.091-61.739 0-64.171 38.656-64.171 48.683 0 52.565 138.24 73.173 138.24 197.504 0 97.92-61.44 160.427-145.323 160.427-100.437 0-151.040-62.507-151.040-62.507l27.563-89.003c0 0 53.12 45.483 97.28 45.483 28.8 0 41.6-23.253 41.6-39.765 0-69.077-113.237-72.277-113.237-185.984-1.451-95.445 67.029-188.416 205.952-188.416 53.632 0 80 15.403 80 15.403l-40.32 115.84zM476.587 35.413c5.803 0 11.563 1.621 17.28 5.76-41.984 19.84-88.064 69.931-107.008 170.325-27.989 9.088-55.168 17.28-80.597 24.661 22.144-76.16 75.648-200.32 170.325-200.32zM529.28 161.237v5.76c-32.171 9.899-67.541 20.651-102.144 31.403 19.883-75.819 56.875-112.853 88.96-126.763 8.235 21.376 13.184 50.176 13.184 89.6zM552.277 65.92c29.611 3.157 48.683 36.992 60.971 74.88-14.891 4.864-31.36 9.856-49.408 15.616v-10.752c0-32.085-4.096-58.496-11.563-79.829zM679.936 120.917c-0.853 0-2.56 0.896-3.328 0.896s-12.331 3.2-30.464 8.96c-18.048-52.608-50.176-101.12-107.008-101.12h-4.907c-16.469-20.736-36.352-29.653-53.589-29.653-132.523 0-195.84 165.419-215.68 249.429-50.944 15.573-88.021 27.136-92.16 28.757-28.8 9.088-29.611 9.899-32.939 37.12-3.2 19.712-78.080 600.021-78.080 600.021l578.603 108.672z"/>
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