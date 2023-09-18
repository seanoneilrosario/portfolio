import Link from "next/link";
import LightDarkToggle from "./components/LightDarkToggle";

export default function Home(this: any) {
  return (
    <main className="relative">
      <LightDarkToggle /> 
      <div className="min:h-[500px] h-[100vh]">

      </div>
    </main>
  )
}
