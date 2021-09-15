import React from "react" 
import {Helmet} from "react-helmet"
import '../styles/components/Header.scss'



const Header = () => {
return(
  <>
  <Helmet htmlAttributes>
    <html lang="en" />
    <title>Know Me</title>
    <meta name="description" content="Basic example" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,300;1,400&display=swap" rel="stylesheet" />
  </Helmet>
  <header>
    <div>
      <h2>Know Me</h2>
      </div>
  </header>
  </>
)
}


export default Header
