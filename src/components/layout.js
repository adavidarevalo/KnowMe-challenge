

import * as React from "react"
import Header from "./header"
import "./layout.css"
import styled from '@emotion/styled'

const Container = styled.main`
background: #c6d9fb;
min-height: 90vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <Container>{children}</Container>
    </>
  )
}



export default Layout
