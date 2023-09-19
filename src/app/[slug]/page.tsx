import type { Metadata, ResolvingMetadata } from 'next'
import FeaturedPorfolios from "../components/FeaturedPorfolios";
import Header from "../components/Header";
import IconsWithTitles from "../components/IconsWithTitles";
import ImageTextOnHover from "../components/ImageTextOnHover";
import LightDarkToggle from "../components/LightDarkToggle";
import TextWithImage from "../components/TextWithImage";
import seans from '../../../public/images/cover_img.png';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.slug
  const title = slug.replace("-", " ");
  const titleCapitalize = title.charAt(0).toUpperCase() + title.slice(1)
  return {
    title: `Sean | ${titleCapitalize}`,
    openGraph: {
      description: 'Web Developer',
      images: seans.src
    }
  }
}

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  return (
    <>
    {slug == 'about-me' || slug == 'portfolio' ?(
      <div className="relative pb-[30px] md:pb-[60px]">
        <LightDarkToggle /> 
        <Header />
        {slug == 'about-me' && (
          <>
            <TextWithImage />
            <IconsWithTitles />
            <ImageTextOnHover />
          </>
        )}
        {slug == 'portfolio' && (
          <>
            <FeaturedPorfolios />
          </>
        )}
    </div>
    ):(
      <div className="relative pb-[30px] md:pb-[60px]">
        <LightDarkToggle /> 
        <Header />
        <div className="min:h-[100vh] mt-[60px] md:mt-[100px] w-full my-[auto]">
          <div className="w-full h-[fit-content] pt-[10vw] md:pt-[5vw] flex items-center justify-center flex-col px-[20px] intro">
              <span className="first_text block font-[900] text-[25vw] md:text-[15vw] leading-[1] relative z-[-1]">
                  404
              </span>
              <span className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-8vw]">
                  Page
              </span>
              <span className="block font-[800] text-[20vw] md:text-[12vw] leading-[1] translate-y-[-9vw]">
                  Not Found
              </span>
          </div>
      </div>
      </div>
    )}
    </>
  )
}

export default page;