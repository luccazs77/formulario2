import React from 'react'



const Header = () => {
  return (
    <div>

      <div className='header'>
       <h1>Inform</h1>
       <div className='butt'>
         <button type="button" className='but'>Página Inicial</button>
         <button type="button"className='but'>Formulário</button>
       </div>
      </div>
      <h1 className='tex-central'>Cadastre usuários de <br /> maneira fácil</h1>
      <p className='paragrafo'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> 
          alteration in some form, by injected humour, or randomised words which don't look even slightly <br />
         believable. If you are going to use a passage</p>
       
    </div>
  )
}

export default Header