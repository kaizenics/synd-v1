import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "~/components/ui/toggle";
import { Badge } from "~/components/ui/badge";

export const Navbar = () => {
  return (
    <nav className="border-b border-zinc-700">
      <div className="flex justify-between">
        <h1 className="font-montserrat font-semibold text-xl mx-8 mt-7 mb-3 cursor-pointer">
          Synd AI{" "}
          <span>
            <Badge variant="outline" className=" dark:border-white border-black mb-2">
              GPT-3.5
            </Badge>
          </span>
        </h1>
        <div className="flex my-5 mx-7">
          <ModeToggle />
          <FaGithub className="w-8 h-8 mt-1 ml-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
