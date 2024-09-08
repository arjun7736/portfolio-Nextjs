import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="">
    <NavBar/>
    <Hero/>
    <About/>
    <Portfolio/>
    </main>
  );
}
