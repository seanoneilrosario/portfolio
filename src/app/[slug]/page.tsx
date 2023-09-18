import LightDarkToggle from "../components/LightDarkToggle";
import ThemePrivoder from "../components/ThemeProvider";

const page = async ({ params }: { params: { slug: string } }) => {
  return (
    <div>
        <LightDarkToggle /> 
        {params.slug}
        <ThemePrivoder />
    </div>
  )
}

export default page;