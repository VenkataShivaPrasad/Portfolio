"use client"
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import Contact from "./_components/Contact";
import { LuContact } from "react-icons/lu";
import { Settings2Icon } from "lucide-react";
import { GoProject } from "react-icons/go";

const MainLayout = ({
  children
}: { children: React.ReactNode; }) => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 hover:text-black" />,
    },

    {
      name: "Projects",
      link: "#projects",
      icon: (
        <GoProject className="h-4 w-4 text-neutral-500 hover:text-black" />
      ),
    },
    {
      name: "Technologies",
      link: "#technologies",
      icon: <Settings2Icon className="h-4 w-4 text-neutral-500 hover:text-black" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 hover:text-black" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <LuContact className="h-4 w-4 text-neutral-500 hover:text-black" />
      ),
    },
  ];
  return (

    <div className="dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="h-[100vh] absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <main className="h-full mt-10 w-[90%] m-auto">
        <div className=" relative w-full">

          <FloatingNav navItems={navItems} />

        </div>
       
        {children}
        <Contact />
      </main>
    </div>



  )
}

export default MainLayout;