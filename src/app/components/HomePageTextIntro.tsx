'use client'
import Typewriter from 'typewriter-effect';

const HomePageTextIntro = () => {
    
  return (
    <div className="min:h-[100vh] w-full my-[auto]">
        <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px] intro">
            <span className="first_text block font-[900] text-[25vw] md:text-[15vw] leading-[1] relative z-[-1]">
                Hello!
            </span>
            <span className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-8vw]">
                I am
            </span>
            <span className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-9vw]">
                Sean
            </span>
            <p className="mx-[auto] md:w-[30vw] text-center leading-[2] text-[3vw] md:text-[1.1vw] translate-y-[-8vw]">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(500)
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
            </p>
        </div>
    </div>
  )
}

export default HomePageTextIntro;