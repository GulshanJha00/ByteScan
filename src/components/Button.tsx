import React from 'react'
import Link from 'next/link'
interface Button{
    link : string;
    title: string
}
const Button = (props: Button) => {
  return (
    <div>
      <Link href={`/${props.link}`}>
          <button className="hover:bg-[#63baaa] text-[#fceaff] hover:text-black rounded-md p-4 text-lg font-semibold transition-all duration-300 ease-in-out  ">{props.title}</button>
        </Link>
    </div>
  )
}

export default Button
