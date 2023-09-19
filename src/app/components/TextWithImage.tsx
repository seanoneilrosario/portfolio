'use client'
import profile from "../../../public/images/profile.jpg";

const TextWithImage = () => {
  return (
    <div className="relative">
      <div className="min:h-[100vh] w-full my-[auto]">
        <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px]">
          <div className="md:max-w-[80vw] px-[1.5vw] mx-[auto] w-[100%] md:flex">
            <div className="md:w-[50%] md:mr-[35px] mb-[30px] md:mb-[0]">
                <p className="leading-[1.8] text-[2.8vw] md:text-[1vw] whitespace-pre-wrap">
                    <span className="leading-[1.2] block text-[4.5vw] md:text-[2.5vw] mb-[15px]"><b>Sean Oneil</b> is a talented and dedicated web developer</span>with 5 years of professional experience. Specialized in Shopify and React, with expertise in WordPress and headless CMS. Skilled in creating dynamic and user-friendly websites that meet client requirements. Committed to delivering high-quality solutions within given timeframes.
                    Throughout my journey with Shopify, I have gained comprehensive proficiency in its features, functionalities, and best practices. I am well-versed in customizing themes, developing responsive and user-friendly designs, and implementing robust e-commerce solutions. Whether it's setting up product catalogs, configuring payment gateways, or optimizing the checkout process, I possess the skills necessary to create seamless and successful online stores.
                    And as a skilled web developer, I have accumulated more than 2 years of hands-on experience working with React, a powerful JavaScript library for building user interfaces. However, my true specialization lies in the realm of headless CMS integration, where I excel in utilizing tools like Hydrogen, WordPress, and Sanity.
                </p>
            </div>
            <div className="md:w-[50%] md:ml-[35px]">
                <img className="object-cover object-top w-[100%] h-[100%] max-h-[500px] md:max-h-[32vw]" src={profile.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextWithImage;