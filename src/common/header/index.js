import React from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.png"

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.headerlxmain}>
            <Link href={"/"} className={style.headerlogo}>
              <Image src={Logo} alt="Logo" />
            </Link>

            <div className={style.headerlinksflx}>              
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Our Work</Link>
              <Link href={"/"}>About</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
