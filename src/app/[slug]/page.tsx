import FeaturedPorfolios from "../components/FeaturedPorfolios";
import Header from "../components/Header";
import IconsWithTitles from "../components/IconsWithTitles";
import ImageTextOnHover from "../components/ImageTextOnHover";
import LightDarkToggle from "../components/LightDarkToggle";
import TextWithImage from "../components/TextWithImage";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const title = slug.replace("-", " "); ;
  return (
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
  )
}

export default page;