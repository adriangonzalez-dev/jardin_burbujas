import { useState } from 'react';
import logo from '../assets/images/logo.png';

export const Header = () => {

  const [menu, setMenu] = useState(false);


  return (
    <header className='container relative h-16 shadow flex justify-between items-center'>
        <div className='w-14 h-14 relative left-2'>
          <img src={logo} className='w-full' alt="" />
        </div>
        <button onClick={()=>setMenu(!menu)}
        className='relative right-2 p-1 outline-primary-200'>
          <i id='menu' className={`fa-solid fa-${menu ? 'bars': 'xmark'} text-3xl text-primary-200`}></i>
        </button>
        <nav className={`${menu ? 'hidden':''}
        container
        absolute top-16
        flex flex-col gap-5 bg-primary-300`}>
          <a href="" className='link-menu'>INICIO</a>
          <a href="" className='link-menu'>PROPUESTA</a>
          <a href="" className='link-menu'>INSCRIPCIONES</a>
          <a href="" className='link-menu'>CONTACTO</a>
        </nav>
    </header>
  )
}
