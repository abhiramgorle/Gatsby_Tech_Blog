import React,{useState} from 'react'
import {Link} from 'gatsby'
//components
import Menu from '../Menu'
import Hamburger from '../Hamburger'
import MobileMenu from '../MobileMenu'
//styles
import { Wrapper,Logo } from './Header.styles'
//hooks
import { useConfigQuery } from '../../hooks/useConfigQuery'
const Header = ({siteTitle = ``}) => {
    const siteConfig = useConfigQuery()
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper>
      
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt = {siteTitle} />
      </Link>
      <Menu items = {siteConfig.menu} />
      
      <div>
        theme button
      </div>
    </Wrapper>
  )
}

export default Header
