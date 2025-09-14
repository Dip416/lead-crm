import { ChevronDown, LogIn } from "lucide-react"; // icon for login
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="container-wide flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="images/logo.png" alt="LeadCRM" className="w-52 h-16" />
        </div>

        {/* Navigation & CTA + Login*/}
        <div className="flex items-center gap-14">
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
            <a
              href="#product"
              className="flex items-center gap-1 hover:text-black"
            >
              Product <ChevronDown />
            </a>
            <a href="#pricing" className="hover:text-black">
              Pricing
            </a>
            <a
              href="#resources"
              className="flex items-center gap-1 hover:text-black"
            >
              Resources <ChevronDown />
            </a>
            <a
              href="#company"
              className="flex items-center gap-1 hover:text-black"
            >
              Company <ChevronDown />
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="lg" className="text-white">
              Get Your Free Account
            </Button>
            <a
              href="#login"
              className="flex text-primary items-center border h-13 px-6 py-3 border-primary rounded-md hover:bg-primary/10 gap-2.5 font-semibold"
            >
              <LogIn size={16} /> Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
