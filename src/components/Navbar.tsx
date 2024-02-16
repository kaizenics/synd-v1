import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="border-b border-zinc-700">
      <div className="flex justify-between">
        <h1 className="font-montserrat font-semibold text-xl mx-8 my-5 cursor-pointer">Synd AI 3.5</h1>
        <FaGithub className="w-7 h-7 mx-8 my-5 cursor-pointer"/>
      </div>
    </nav>
  );
}   