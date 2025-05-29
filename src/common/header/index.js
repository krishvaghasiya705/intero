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
              <Link href={"/travel"}>Travel</Link>
              <Link href={"/philosophy"}>Our Philosophy</Link>
              <Link href={"/dietplan"}>Diet Plan</Link>
              <Link href={"/believe"}>Believe</Link>
              <Link href={"/studio"}>Yoga Studio</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
