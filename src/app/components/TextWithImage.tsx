'use client'
import profile from "../../../public/images/profile.jpg";
import { AnimatePresence, motion } from "framer-motion"

const TextWithImage = () => {
  return (
    <div className="relative">
      <AnimatePresence>
        <div className="min:h-[100vh] w-full my-[auto] mt-[40px]">
          <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px]">
            <div className="md:max-w-[80vw] px-[1.5vw] mx-[auto] w-[100%] md:flex">
              <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, type: 'spring', velocity: 10 }}
                  exit={{ opacity:0, x: 20 }}
                  className="md:w-[50%] md:mr-[35px] mb-[30px] md:mb-[0]"
                >
                  <p className="leading-[1.8] text-[4vw] md:text-[1vw] whitespace-pre-wrap">
                      <span className="leading-[1.2] block text-[6vw] md:text-[2.5vw] mb-[15px]"><b>Sean Oneil</b> is a talented and dedicated web developer</span> with many years of professional experience. Specialized in Zoho, Zapier, Shopify, React, with expertise in WordPress and headless CMS. Skilled in creating dynamic and user-friendly websites that meet client requirements. Committed to delivering high-quality solutions within given timeframes.
                      Well-versed in customizing themes, developing responsive and user-friendly designs, and implementing robust e-commerce solutions. He possess the skills necessary to create seamless and successful online stores.
                  </p>
              </motion.div>
              <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, type: 'spring', velocity: 10 }}
                  exit={{ opacity:0, x: -20 }}
                  className="md:w-[50%] md:ml-[35px]"
                >
                  <img className="object-cover object-top w-[100%] h-[100%] max-h-[500px] md:max-h-[32vw] rounded-2xl" src={profile.src} />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default TextWithImage;