import React from 'react'
import Link from 'next/link'
interface Button{
    link : string;
    title: string
}
const Button = (props: Button) => {
  return (
    <div>
      <Link href={`/props.link`}>
          <button className="hover:bg-blue-600 text-white hover:text-black rounded-md p-4 text-lg font-semibold">{props.title}</button>
        </Link>
    </div>
  )
}

export default Button
