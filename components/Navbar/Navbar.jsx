import Image from "next/image";
import Link from "next/link";
import eventLogo from "/public/logo.png"

const Navbar = () => {
    return (
        <nav>
        <div className="container flex justify-between items-center py-4">
          <div className="nav-brand">
            <Link href="/">
              <Image src={eventLogo} alt="Eventry" width={90} className="rounded-full"  />
            </Link>
          </div>
    
          <ul className="flex gap-4 text-[#9C9C9C]">
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;