import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md px-8 py-4 flex justify-between z-50">
      <h1 className="text-xl font-bold">Prabhakar</h1>

      <div className="space-x-6 text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/projects" className="hover:text-white">Projects</Link>
        <Link to="/experience" className="hover:text-white">Experience</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/resume" className="hover:text-white">Resume</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
