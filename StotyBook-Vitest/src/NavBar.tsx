import React from 'react'

type NavBarProps = {
  logo:string,
  placeholder:string
}

const NavBar = (Props: NavBarProps) => {
  return (
    <nav>
      <div>
        <h1>{Props.logo}</h1>
      </div>

      <div>
        <ol>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
        </ol>
      </div>

      <div>
        <input type="text" name="" id="" placeholder={Props.placeholder}/>
      </div>


    </nav>
  )
}

export default NavBar

