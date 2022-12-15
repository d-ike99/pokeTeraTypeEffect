import React from 'react'
import { NavbarStyle } from '../../styles/components/Navbar/Navbarstyle'
import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <>
      <NavbarStyle>
        <Link href={"/poke"}>
          テラスタイプ相性
        </Link>
      </NavbarStyle>
      <div className="layout">{children}</div>
    </>
  )
}

export default Navbar