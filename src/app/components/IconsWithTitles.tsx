'use client'
import html5 from "../../../public/images/html5.png";
import css3 from "../../../public/images/css3.png";
import javascript from "../../../public/images/javascript.png";
import jqueryImg from "../../../public/images/jquery.png";
import github from "../../../public/images/github.png";
import tailwind from "../../../public/images/tailwind.png";
import react from "../../../public/images/react.png";
import shopify from "../../../public/images/shopify.png";
import wordpress from "../../../public/images/wordpress.png";

const IconsWithTitles = ({title}: any) => {
  return (
    <div className="relative">
        <div className="min:h-[100vh] w-full my-[auto]">
            <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px] intro">
                <span className="block font-[800] text-[18vw] md:text-[10vw] leading-[1] translate-y-[-9vw] mt-[50px] md:mt-[120px] capitalize">
                    {title}
                </span>
                <div className='pt-[20px] flex flex-wrap justify-center items-start'>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={html5.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>HTML5</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={css3.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>CSS3</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={javascript.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Javascript</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={jqueryImg.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Jquery</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={github.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>GitHub</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={tailwind.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Tailwind</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={react.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>React</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={shopify.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Shopify</span>
                    </div>
                    <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
                        <img className='h-[200px] mx-[auto] object-contain w-[auto] icon_image' src={wordpress.src} />
                        <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>WordPress</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IconsWithTitles;