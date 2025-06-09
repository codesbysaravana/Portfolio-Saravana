import { cn } from "@/lib/utils";
import { href } from "react-router-dom";
import { useEffect, useState } from "react";

//nav items ---> objects inside represenying each diff links
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false) //for mobile screens

    useEffect(() => {
        const handleScroll = () => {
            //if any scroll happens this function is going to be called
            //if they scroll down in y axis greater than 10 away from navbar this occurs
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll) //for no memory leaks
    }, [])

  return (
    //now the cn className is gonna depend if we scrolled or not ---> {if its scrolled down then it blurs background}
    <nav className={cn("fixed w-full z-10 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" 
    )}>
        <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold text-primary flex items-center' 
                href='#hero'
            >
                {/* logo of portfolio */}
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'> Saravana Priyan </span> Portfolio
                </span>
            </a>
            
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

            {/* mobile nav */} {/* //vertical no horizontal */}
          <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden", //hide in medium screen md
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
                <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                    {item.name}
                    </a>
                ))}
                </div>
            </div>
        </div>
    </nav>
  )
}
