'use client'
import { AnimatePresence, motion, spring } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HomePageTextIntro = () => {
    
  return (
    <div className="min:h-[100vh] w-full my-[auto]">
        <AnimatePresence>
            <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px] intro">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', velocity: 10 }}
                    exit={{ opacity: 0 }}
                    className="first_text block font-[900] text-[25vw] md:text-[15vw] leading-[1] relative z-[-1]"
                >
                    Hello!
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, top: 20 }}
                    whileInView={{ opacity: 1, top: 0 }}
                    transition={{ delay: 0.3, type: 'spring', velocity: 10 }}
                    exit={{ opacity: 0, top: -20 }}
                    className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-8vw] relative"
                >
                    I am
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, top: 20 }}
                    whileInView={{ opacity: 1, top: 0 }}
                    transition={{ delay: 0.5, type: 'spring', velocity: 10 }}
                    exit={{ opacity: 0, top: -20 }}
                    className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-9vw] relative"
                >
                    Sean
                </motion.span>
                <div className="mx-[auto] md:w-[30vw] text-center leading-[2] text-[4vw] md:text-[1.1vw] translate-y-[-8vw]">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(700)
                            .changeDelay(50)
                            .typeString('Professional Web Developer: Crafting Digital Excellence for 5 Years!')
                            .pauseFor(300)
                            .changeDeleteSpeed(10)
                            .deleteChars(68)
                            .changeDelay(50)
                            .pauseFor(200)
                            .typeString('Mastering the Art of Crafting Websites from Scratch!')
                            .pauseFor(300)
                            .changeDeleteSpeed(10)
                            .deleteChars(53)
                            .changeDelay(50)
                            .pauseFor(200)
                            .typeString(' Keeping Your Digital Presence at Its Best!')
                            .pauseFor(1000)
                            .start();
                        }}
                    />
                </div>
            </div>
        </AnimatePresence>
    </div>
  )
}

export default HomePageTextIntro;