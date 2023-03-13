import React from 'react'

export const Footer = () => {
  return (
    <div className='container mx-auto w-full p-2
    bg-primary-100
    flex flex-col items-center justify-center gap-2 text-primary-300'>
        <div className='w-full flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-xl'>DATOS DE CONTACTO</h4>
            <p><i className="fa-solid fa-location-dot"></i> Av. de mayo 554</p>
            <p><i className="fa-solid fa-phone"></i> 1165233919</p>
            <p><i className="fa-brands fa-whatsapp"></i> 1165233199</p>
        </div>
        <div>
            <h4>NUESTRAS REDES</h4>
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
        </div>
    </div>
  )
}
