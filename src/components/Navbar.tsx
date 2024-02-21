import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "~/components/ui/toggle";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="border-b dark:border-zinc-800 border-gray-300 ">
      <div className="flex justify-between">
        <h1 className="font-montserrat font-semibold text-xl mx-8 mt-7 mb-3 cursor-pointer">
          Synd AI{" "}
          <span>
            <Badge variant="outline" className=" dark:border-white border-black mb-2">
              GPT-3.5
            </Badge>
          </span>
        </h1>
        <div className="inline-flex my-5 mx-7 items-center">
          <ModeToggle />
          <button className="h-10 px-4 py-2 bg-transparent">
            <a href="https://github.com/kaizenics/synd-ai" target="_blank" rel="noreferrer">
            <FaGithub className=" h-[1.2rem] w-[1.2rem]" />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};
