import React from "react";

function Header(props){
    return (
        <header className = 'Header'>
            <div className = 'Header__ContenedorLogo'>
              <img 
              className='Header__ContenedorLogo__Logo'
              src={require(`../Img/LuxuryLogo${props.dimension}.png`)} 
              alt='Logo' />
            </div>
          <div className='Header__ContenedorLogoMenu'>
            <img 
            className='Header__ContenedorLogoMenu__LogoMenu'
            src= {require(`../Img/LogoMenu${props.dimension}.png`)}
            alt='Logo del Menu' />
          </div>
      </header>
    )
}

export default Header;