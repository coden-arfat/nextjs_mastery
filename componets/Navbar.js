import React from 'react'
import Link from 'next/dist/client/link'
function Navbar() {
  return (
    <>
    <div className='navbar'>

      <ol className='navbar_list'>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href='/About'>
            About
          </Link>
          </li>
      </ol>
    </div>
    </>
  )
}

export default Navbar