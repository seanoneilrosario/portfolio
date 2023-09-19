import Link from "next/link";
import LightDarkToggle from "./components/LightDarkToggle";
import linkedin from "../../public/images/linkedin.png";
import github from "../../public/images/github.png";
import Header from "./components/Header";
import HomePageTextIntro from "./components/HomePageTextIntro";
export default function Home(this: any) {

  return (
    <main className="relative homepage_stagin">
      <LightDarkToggle /> 
      <Header />
      <HomePageTextIntro />
    </main>
  )
}
