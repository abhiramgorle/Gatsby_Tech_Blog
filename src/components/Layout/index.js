import React from 'react'
import {ThemeProvider} from 'styled-components'
//styles
import {GlobalStyles, lightTheme, darkTheme}  from '../../styles/GlobalStyles'
import { useStaticQuery, graphql } from "gatsby"
//hooks
import {useMetadataQuery} from "../../hooks/useMetaDataQuery"
//components
import Header from '../Header'
import Menu from '../Menu'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site{
        siteMetadata{
          author
          description
          title
        }
      }
    }
`)
console.log(data)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
