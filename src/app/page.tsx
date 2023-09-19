import LightDarkToggle from "./components/LightDarkToggle";
import Header from "./components/Header";
import HomePageTextIntro from "./components/HomePageTextIntro";

export default function Home() {
  return (
    <div className="relative homepage_stagin">
      <LightDarkToggle /> 
      <Header />
      <HomePageTextIntro />
    </div>
  )
}
