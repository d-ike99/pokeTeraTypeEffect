import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return src
}

const HeaderLog = () => {
  return (
    <Link href={"/poke"}>
      <Image loader={myLoader} src="/Header/title.png" alt="/Header/title.png" width="300" height="100"></Image>
    </Link>
  )
}

export default HeaderLog