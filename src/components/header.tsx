import Image from "next/image";

import LogoImg from "/public/logo.svg";
import Link from "next/link";
import SearchIcon from "/public/icon-search.svg";
import UserIcon from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
  const activedStyle = "bg-green-actived text-opacity-100 rounded-full";

  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                  index === 0 ? activedStyle : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icon Search" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={UserIcon} alt="Icon User" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
