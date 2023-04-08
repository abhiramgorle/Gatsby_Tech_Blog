import React from 'react'
import {Link} from 'gatsby'
//styles
import {Nav} from './menu.styles'

const Menu = ({items}) => {
  return (
    <Nav>
      {items.map(item => (
    
        <li key = {item.id}><Link to={item.link} activeClassName='active'></Link>
            {item.name}</li>
    
      ))}
    </Nav>
  )
}

export default Menu
