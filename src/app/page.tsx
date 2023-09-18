import Link from "next/link";
import LightDarkToggle from "./components/LightDarkToggle";
import linkedin from "../../public/images/linkedin.png";
import github from "../../public/images/github.png";
import Header from "./components/Header";

export default function Home(this: any) {
  return (
    <main className="relative homepage_stagin">
      <LightDarkToggle /> 
      <Header />
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
            Professional Web Developer with 5 years experience!
          </p>
        </div>
      </div>
    </main>
  )
}
