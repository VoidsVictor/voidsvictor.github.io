const Navbar = () => {
  return (
    <div className="w-full flex flex-col py-6 gap-4 justify-center items-center">
      <div className="flex items-center justify-between w-full px-10 gap-6">
        <div className="text-6xl font-semibold">
          Sourjya Sarkar
        </div>
        <div className="text-xl font-black border-2 border-white py-2 px-4">
          Work with Me
        </div>
      </div>
      <div className="border-t-2 border-white w-full" />
      <div className="flex justify-between w-full items-center px-10 font-medium gap-10 text-xl">
        <div>Home</div>
        <div>Leadership & Experience</div>
        <div>Publications & Patents</div>
        <div>Projects</div>
        <div>Education & Credentials</div>
        <div>About</div>
      </div>
      <div className="border-t-2 border-white w-full" />
    </div>
  );
}

export default Navbar;
