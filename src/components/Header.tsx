export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full h-16 flex items-center px-6 bg-transparent z-50">
        <nav className="w-full">
          <ul className="hidden md:flex justify-center md:justify-evenly items-center gap-8 sm:justify-between">
            <li><a href="#projects" className="no-underline text-white font-poppins md:text-[26px] hover-text-glow">Projetos</a></li>
            <li><a href="#about"    className="no-underline text-white font-poppins md:text-[26px] hover-text-glow">Sobre mim</a></li>
            <li><a href="#contact"  className="no-underline text-white font-poppins md:text-[26px] hover-text-glow">Contato</a></li>
          </ul>
            <ul className="flex md:hidden flex-col absolute left-0 top-16 bg-gray-900 w-full">
          </ul>
        </nav>
      </header>
    )
  }
  