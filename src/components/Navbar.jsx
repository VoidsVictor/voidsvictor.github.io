import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col py-6 gap-4 justify-center items-center">
      <div className="flex items-center justify-between w-full px-10 gap-6">
        <Link to="/" className="text-6xl font-semibold">
          Sourjya Sarkar
        </Link>
        <a href="https://cal.com/sourjyasarkar/30min" className="text-xl font-black hover:bg-white hover:text-black border-2 border-white py-2 px-4">
          Work with Me
        </a>
      </div>
      <div className="border-t-2 border-white w-full" />
      <div className="flex justify-between w-full items-center px-10 font-medium gap-10 text-xl">
        <Link to="/" className="hover:underline hover:underline-offset-8">Home</Link>
        <Link to="/experiences" className="hover:underline hover:underline-offset-8">Leadership & Experience</Link>
        <Link to="/publications" className="hover:underline hover:underline-offset-8">Publications & Patents</Link>
        <Link to="/projects" className="hover:underline hover:underline-offset-8">Projects</Link>
        <Link to="/education" className="hover:underline hover:underline-offset-8">Education & Credentials</Link>
        <Link to="/about" className="hover:underline hover:underline-offset-8">About</Link>
      </div>
      <div className="border-t-2 border-white w-full" />
    </div>
  );
}

export default Navbar;
