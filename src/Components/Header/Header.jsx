import React from 'react'
import Banner from './Banner'
import Category from './Category'
import TownFood from './TownFood'
import Behind from './Behind'

const Header = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <TownFood/>
      <Behind/>
    </div>
  )
}

export default Header
