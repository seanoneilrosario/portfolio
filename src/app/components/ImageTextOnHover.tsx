'use client'
import webdev from "../../../public/images/web-dev.jpg";
import ecom from "../../../public/images/ecom.png";
import design from "../../../public/images/design.png";
import testing from "../../../public/images/testing.png";
import maintain from "../../../public/images/maintain.png";

const ImageTextOnHover = ({title}:any) => {
  return (
    <div className="relative">
        <div className="min:h-[100vh] w-full my-[auto]">
            <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px] intro">
                <span className="block font-[800] text-[18vw] md:text-[10vw] leading-[1] translate-y-[-9vw] mt-[50px] md:mt-[120px] capitalize">
                    {title}
                </span>
                <div className='pt-[20px] flex flex-wrap justify-center items-start'>
                    <div className='w-[100%] md:w-[33.33%] p-[20px]'>
                        <h3 className='text-[3.5vw] md:text-[1.6vw] pb-[20px]'>1. Web Development</h3>
                        <div className='group-item text-left relative'>
                            <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={webdev.src}></img>
                            <div className='text-hover text-[3vw] md:text-[1.1vw] z-[1] rounded-[10px] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] w-[100%] h-[fit-content]'>
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
                        <h3 className='text-[3.5vw] md:text-[1.6vw] pb-[20px]'>2. E-commerce Development</h3>
                        <div className='group-item text-left relative'>
                            <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={ecom.src}></img>
                            <div className='text-hover text-[3vw] md:text-[1.1vw] z-[1] rounded-[10px] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] w-[100%] h-[fit-content]'>
                            <p className='pb-[20px]'>
                                • Creating and customizing e-commerce platforms like Shopify, WooCommerce, etc.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className='w-[100%] md:w-[33.33%] p-[20px]'>
                        <h3 className='text-[3.5vw] md:text-[1.6vw] pb-[20px]'>3. UI/UX Design</h3>
                        <div className='group-item text-left relative'>
                            <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={design.src}></img>
                            <div className='text-hover text-[3vw] md:text-[1.1vw] z-[1] rounded-[10px] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] w-[100%] h-[fit-content]'>
                            <p className='pb-[20px]'>
                                • Designing user interfaces and user experiences to ensure intuitive and visually appealing designs.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className='w-[100%] md:w-[33.33%] p-[20px]'>
                        <h3 className='text-[3.5vw] md:text-[1.6vw] pb-[20px]'>4. QA and Testing</h3>
                        <div className='group-item text-left relative'>
                            <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={testing.src}></img>
                            <div className='text-hover text-[3vw] md:text-[1.1vw] z-[1] rounded-[10px] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] w-[100%] h-[fit-content]'>
                            <p className='pb-[20px]'>
                                • Conducting quality assurance testing to ensure software functionality, performance, and reliability.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className='w-[100%] md:w-[33.33%] p-[20px]'>
                        <h3 className='text-[3.5vw] md:text-[1.6vw] pb-[20px]'>5. Maintenance and Support</h3>
                        <div className='group-item text-left relative'>
                            <img className='h-[100%] ease-out duration-[0.4s] w-[100%] object-cover' src={maintain.src}></img>
                            <div className='text-hover text-[3vw] md:text-[1.1vw] z-[1] rounded-[10px] md:absolute ease-out duration-[0.4s] md:opacity-0 top-[0] left-[0] p-[20px] w-[100%] h-[fit-content]'>
                            <p className='pb-[20px]'>
                                • Providing ongoing maintenance, updates, and technical support for websites and applications.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ImageTextOnHover;