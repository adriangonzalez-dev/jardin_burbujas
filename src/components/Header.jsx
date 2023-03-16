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
          {/* ${menu ? 'flex':'hidden'} */}
          {
          menu && <motion.nav 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.2 }}
          
          className={`
          flex
          container
          absolute top-16
          flex-col gap-5 bg-primary-300
          md:flex md:flex-row md:static md:gap-1 md:justify-end`}>
            <a href="" className='link-menu'>INICIO</a>
            <a href="" className='link-menu'>PROPUESTA</a>
            <a href="" className='link-menu'>INSCRIPCIONES</a>
            <a href="" className='link-menu'>CONTACTO</a>
          </motion.nav>
          }
        </AnimatePresence>
    </header>
  )
}
