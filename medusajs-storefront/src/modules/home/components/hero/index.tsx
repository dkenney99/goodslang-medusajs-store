import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[100vh] w-full border-b border-ui-border-base relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1635650804512-003e5ee6ccac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Update with a more luxurious or iconic image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-black bg-opacity-50">
        <Heading
          level="h1"
          className="text-5xl leading-none text-white font-bold tracking-wider uppercase"
        >
          Fall Winter 2024 Collection 
        </Heading>
        <a
          href="https://goodslang.com/us"
          target="_blank"
          className="mt-8 inline-block bg-white text-black py-3 px-8 rounded-full font-semibold text-lg uppercase tracking-wider hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Shop now
        </a>
      </div>
    </div>
  )
}

export default Hero
