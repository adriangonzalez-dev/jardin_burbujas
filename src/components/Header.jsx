import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {

  const [menu, setMenu] = useState(false);


  return (
    <header className=' container relative h-16 shadow flex justify-between items-center'>
        <div className='w-14 h-14 relative left-2'>
          <img src={logo} className='w-full' alt="" />
        </div>
        <button onClick={()=>setMenu(!menu)}
        className='relative right-2 p-1 outline-primary-200 md:hidden'>
          <i id='menu' className={`fa-solid fa-${menu ? 'xmark': 'bars'} text-3xl text-primary-200`}></i>
        </button>
        <AnimatePresence>
          <nav
          className={`
          ${menu ? 'flex':'hidden'}
          container
          absolute top-16
          flex-col gap-5 bg-primary-300
          md:flex md:flex-row md:static md:gap-1 md:justify-end`}>
            <a href="#init" className='link-menu' onClick={()=>setMenu(false)}>INICIO</a>
            <a href="#prop" className='link-menu' onClick={()=>setMenu(false)}>PROPUESTA</a>
            <a href="#form" className='link-menu' onClick={()=>setMenu(false)}>INSCRIPCIONES</a>
            <a href="#form" className='link-menu' onClick={()=>setMenu(false)}>CONTACTO</a>
          </nav>
        </AnimatePresence>
    </header>
  )
}
