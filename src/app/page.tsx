'use client'
import programming from '../../public/images/programming.jpg'
import profile from '../../public/images/profile.jpg'
import design from '../../public/images/design.png'
import ecom from '../../public/images/ecom.png'
import maintain from '../../public/images/maintain.png'
import testing from '../../public/images/testing.png'
import webdev from '../../public/images/web-dev.jpg'
import play from '../../public/svg/play.svg'
import jqueryImg from '../../public/images/jquery.png'
import html5 from '../../public/images/html5.png'
import css3 from '../../public/images/css3.png'
import github from '../../public/images/github.png'
import javascript from '../../public/images/javascript.png'
import react from '../../public/images/react.png'
import tailwind from '../../public/images/tailwind.png'
import wordpress from '../../public/images/wordpress.png'
import shopify from '../../public/images/shopify.png'
import icare from '../../public/images/icare.png'
import manilife from '../../public/images/manilife.png'
import onyx from '../../public/images/onyx.png'
import profin from '../../public/images/profin.png'
import megaphone from '../../public/images/megaphone.png'

// import introduction_video from '../../public/Videos/introduction_video.mp4'
import { useEffect, useRef, useState, } from 'react'
import React from 'react';
import { DataBase } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import SpreadComponents from './components/SpreadComponents'


export default function Home(this: any) {

  const listOfComponents = ['parallax_with_text',  'text_with_video']
  let pageComponentsData:any = [];

  listOfComponents.map((name:string) => {
    const componentRef = collection(DataBase, name);

    const getComponentsList = async () => {
      const data = await getDocs(componentRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        collection: name,
      }))
      pageComponentsData.push(filteredData)
    }
    getComponentsList()
  })

  const menu_toggle = (e:any) => {
    if(!e.target.parentElement.parentElement?.classList.contains('active')) {
      e.target.parentElement.parentElement?.classList.add('active')
    } else {
      e.target.parentElement.parentElement?.classList.remove('active')
    }
    if(!e.target.parentElement.parentElement.nextSibling?.classList.contains('active')) {
      e.target.parentElement.parentElement.nextSibling?.classList.add('active')
    } else {
      e.target.parentElement.parentElement.nextSibling?.classList.remove('active')
    }
  }
  const myVideo:any = useRef(null)
  const openVideo = (e:any) => {
    // console.log(myVideo.current)
  }

  return (
    <main className="relative">
      {/* <div ref={myVideo} className='fixed flex items-center justify-center left-0 top-0 bottom-0 right-0'>
        <video autoPlay muted loop controls width="300" height="300">
          <source type="video/mp4" src="../../public/Videos/introduction_video.mp4" />
        </video>
      </div> */}
      <header className="flex sticky top-[0] z-[100] bg-[#0C356A] px-[20px] md:px-[40px]">
        <div className="font-[Amita-Regular] text-[50px] text-[#A1C2F1]">
          <a href="#">Sean</a>
        </div>
        <div className="flex-grow-[1] flex items-center justify-end">
          <div onClick={menu_toggle} className='menu_toggle'>
            {/* <img width={menu.width} height={menu.height} src={menu.src} alt="" /> */}
            <span className='menu_hamberg'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <ul className="flex w-full justify-end menus">
            <li className="px-[15px]">
              <a className="font-[500] text-[#F1F0E8]" href="#about-me">About Me</a>
            </li>
            <li className="px-[15px]">
              <a className="font-[500] text-[#F1F0E8]" href="#skills">Skills</a>
            </li>
            <li className="px-[15px]">
              <a className="font-[500] text-[#F1F0E8]" href="#services">Services</a>
            </li>
            <li className="px-[15px]">
              <a className="font-[500] text-[#F1F0E8]" href="#portfolio">Porfolio</a>
            </li>
            <li className="px-[15px]">
              {/* <a className="font-[500] text-[#F1F0E8]" href="#contact-me">Contact Me</a> */}
            </li>
          </ul>
        </div>
      </header>
      <div className="relative min-h-[50vh] h-[400px] bg-[#061d3ac2] flex items-center justify-center">
        <div className='min-h-[50vh] h-[400px] fixed w-[100%] z-[-1]'>
          <img className='h-[100%] w-[100%] object-cover' src={programming.src}></img>
        </div>
        <div className='px-[20px]'>
          <h1 className='leading-tight font-[Amita-Regular] text-[35px] md:text-[50px] text-[#F1F0E8]'>Hi, It's Sean</h1>
          <h1 className='leading-tight font-[Amita-Regular] text-[35px] md:text-[50px] text-[#F1F0E8]'>I'm a Professional Web Developer</h1>
        </div>
      </div>
      <div id="about-me" className='bg-[#DAFFFB] py-[60px] border-[#071952] border-b-[1px]'>
        <div className='text-center container'>
          <h2 className='font-[Amita-Regular] text-[25px] md:text-[40px] text-[#071952]'>About Me</h2>
          <div className='md:flex items-center md:pt-[60px] pt-[30px]'>
            <div className='md:mx-[20px] md:w-[50%] h-[100%] w-[100%] relative video_present'>
              <img className='h-[100%] max-h-[600px] w-[100%] object-cover profile_image' src={profile.src}></img>
              {/* <div className='absolute left-[0] right-[0] bottom-[0] top-[0] w-full h-full flex justify-center items-center play_btn bg-[#061d3ac2]'>
                <span onClick={openVideo} className='rounded-[100px] bg-[#F1F0E8] pt-[13px] pr-[10px] pb-[13px] pl-[15px] cursor-pointer'>
                  <img width={play.width} height={play.height} src={play.src} alt="" />
                </span>
              </div> */}
            </div>
            <div className='px-[20px] pt-[30px] md:pt-[0] md:w-[50%] h-[100%] w-[100%] flex flex-col justify-center'>
              <p className='text-[#071952] text-left pb-[20px]'>
                Talented and dedicated web developer with 5 years of professional experience. Specialized in Shopify and React, with expertise in WordPress and headless CMS. Skilled in creating dynamic and user-friendly websites that meet client requirements. Committed to delivering high-quality solutions within given timeframes.
              </p>
              <p className='text-[#071952] text-left pb-[20px]'>
                Throughout my journey with Shopify, I have gained comprehensive proficiency in its features, functionalities, and best practices. I am well-versed in customizing themes, developing responsive and user-friendly designs, and implementing robust e-commerce solutions. Whether it's setting up product catalogs, configuring payment gateways, or optimizing the checkout process, I possess the skills necessary to create seamless and successful online stores.
              </p>
              <p className='text-[#071952] text-left'>
                And as a skilled web developer, I have accumulated one year of hands-on experience working with React, a powerful JavaScript library for building user interfaces. However, my true specialization lies in the realm of headless CMS integration, where I excel in utilizing tools like Hydrogen, WordPress, and Sanity.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div id="skills" className='bg-[#DAFFFB] py-[60px] border-[#071952] border-b-[1px]'>
        <div className='text-center container'>
          <h2 className='font-[Amita-Regular] text-[25px] md:text-[40px] text-[#071952]'>Skills</h2>
          <div className='pt-[20px] flex flex-wrap justify-center items-start'>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={html5.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>HTML5</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={css3.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>CSS3</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={javascript.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Javascript</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={jqueryImg.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Jquery</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={github.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>GitHub</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={tailwind.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Tailwind</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={react.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>React</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={shopify.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Shopify</span>
            </div>
            <div className='w-[calc(100%-30px)] md:w-[calc(100%/3-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/5-40px)]'>
              <img className='h-[200px] mx-[auto] object-contain w-[auto]' src={wordpress.src} />
              <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>WordPress</span>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className='bg-[#DAFFFB] py-[60px] border-[#071952] border-b-[1px]'>
        <div className='text-center container'>
          <h2 className='font-[Amita-Regular] text-[25px] md:text-[40px] text-[#071952]'>Services</h2>
          <div className='pt-[20px] flex flex-wrap justify-center items-start'>
            <div className='w-[100%] md:w-[33.33%] p-[20px]'>
              <h3 className='text-[#071952] text-[16px] md:text-[20px] pb-[20px]'>1. Web Development</h3>
              <div className='group-item text-left relative'>
                <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={webdev.src}></img>
                <div className='text-[#071952] z-[1] rounded-[10px] md:text-[#F1F0E8] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] md:bg-[#061d3a] w-[100%] h-[fit-content]'>
                  <p className='pb-[20px]'>
                    • Front-end Development: Creating user interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue.
                  </p>
                  <p>
                    • Back-end Development: Building server-side logic, databases, and APIs using technologies like Node.js, Python (Django, Flask), Ruby on Rails, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[33.33%] p-[20px]'>
              <h3 className='text-[#071952] text-[16px] md:text-[20px] pb-[20px]'>2. E-commerce Development</h3>
              <div className='group-item text-left relative'>
                <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={ecom.src}></img>
                <div className='text-[#071952] z-[1] rounded-[10px] md:text-[#F1F0E8] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] md:bg-[#061d3a] w-[100%] h-[fit-content]'>
                  <p className='pb-[20px]'>
                    • Creating and customizing e-commerce platforms like Shopify, WooCommerce, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[33.33%] p-[20px]'>
              <h3 className='text-[#071952] text-[16px] md:text-[20px] pb-[20px]'>3. UI/UX Design</h3>
              <div className='group-item text-left relative'>
                <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={design.src}></img>
                <div className='text-[#071952] z-[1] rounded-[10px] md:text-[#F1F0E8] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] md:bg-[#061d3a] w-[100%] h-[fit-content]'>
                  <p className='pb-[20px]'>
                    • Designing user interfaces and user experiences to ensure intuitive and visually appealing designs.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[33.33%] p-[20px]'>
              <h3 className='text-[#071952] text-[16px] md:text-[20px] pb-[20px]'>4. QA and Testing</h3>
              <div className='group-item text-left relative'>
                <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={testing.src}></img>
                <div className='text-[#071952] z-[1] rounded-[10px] md:text-[#F1F0E8] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] md:bg-[#061d3a] w-[100%] h-[fit-content]'>
                  <p className='pb-[20px]'>
                    • Conducting quality assurance testing to ensure software functionality, performance, and reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[33.33%] p-[20px]'>
              <h3 className='text-[#071952] text-[16px] md:text-[20px] pb-[20px]'>5. Maintenance and Support</h3>
              <div className='group-item text-left relative'>
                <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={maintain.src}></img>
                <div className='text-[#071952] z-[1] rounded-[10px] md:text-[#F1F0E8] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] md:bg-[#061d3a] w-[100%] h-[fit-content]'>
                  <p className='pb-[20px]'>
                    • Providing ongoing maintenance, updates, and technical support for websites and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className='bg-[#DAFFFB] py-[60px]'>
        <div className='text-center container'>
          <h2 className='font-[Amita-Regular] text-[25px] md:text-[40px] text-[#071952]'>Porfolio</h2>
          <span>(Private portfolio are not listed)</span>
          <div className='text-left mt-[20px] md:mt-[40px]'>
            <h3 className='text-[18px] md:text-[23px]'>Shopify</h3>
            <div className='pt-[20px] flex flex-wrap justify-start items-start'>
              <a target='_blank' href="https://i-care-site.myshopify.com/" className='w-[calc(100%-30px)] md:w-[calc(100%/2-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/3-40px)]'>
                <img className='ml-[0] h-[200px] mx-[auto] object-contain w-[auto]' src={icare.src} />
                <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>ICare</span>
              </a>
              <a target='_blank' href="https://mani-life.com/" className='w-[calc(100%-30px)] md:w-[calc(100%/2-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/3-40px)]'>
                <img className='ml-[0] h-[200px] mx-[auto] object-contain w-[auto]' src={manilife.src} />
                <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Mani Life</span>
              </a>
              <a target='_blank' href="https://onyxlondon.com/" className='w-[calc(100%-30px)] md:w-[calc(100%/2-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/3-40px)]'>
                <img className='ml-[0] h-[200px] mx-[auto] object-contain w-[auto]' src={onyx.src} />
                <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Onyx London</span>
              </a>
            </div>
          </div>
          <div className='text-left mt-[20px] md:mt-[40px]'>
            <h3 className='text-[18px] md:text-[23px]'>WordPress</h3>
            <div className='pt-[20px] flex flex-wrap justify-start items-start'>
              <a target='_blank' href="https://megaphone.com.au/" className='w-[calc(100%-30px)] md:w-[calc(100%/2-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/3-40px)]'>
                <img className='ml-[0] h-[200px] mx-[auto] object-contain w-[auto]' src={megaphone.src} />
                <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Megaphone</span>
              </a>
            </div>
          </div>
          <div className='text-left mt-[20px] md:mt-[40px]'>
            <h3 className='text-[18px] md:text-[23px]'>React (Headless)</h3>
            <div className='pt-[20px] flex flex-wrap justify-start items-start'>
              <a target='_blank' href="https://profin.vercel.app/" className='w-[calc(100%-30px)] md:w-[calc(100%/2-40px)] m-[15px] md:m-[20px] lg:w-[calc(100%/3-40px)]'>
                <img className='ml-[0] h-[200px] mx-[auto] object-contain w-[auto]' src={profin.src} />
                <span className='text-[16px] md:text-[20px] mt-[20px] block text-[#000]'>Profin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
