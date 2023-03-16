import React from 'react'

export const Footer = () => {
  return (
    <footer className='container mx-auto w-full p-2
    bg-primary-100
    flex flex-col items-center justify-center gap-2 text-primary-300
    md:flex-row'>
        <div className='w-full flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-xl'>DATOS DE CONTACTO</h4>
            <p className='footer-link'><i className="fa-solid fa-location-dot"></i> <b>Av. de mayo 554</b></p>
            <p className='footer-link'><i className="fa-solid fa-phone"></i> <b>1165233919</b></p>
            <p className='footer-link'><i className="fa-brands fa-whatsapp"></i> <b>1165233199</b></p>
        </div>
        <div className='container mx-auto w-full p-2
        bg-primary-100
        flex flex-col items-center justify-center gap-2 text-primary-300'>
            <h4 className='font-semibold text-xl'>NUESTRAS REDES</h4>
            <div className='w-full flex items-center justify-center gap-4'>
                <a href="" className='footer-icon'><i className="fa-brands fa-facebook text-media-facebook"></i></a>
                <a href="" className='footer-icon'><i className="fa-brands fa-instagram text-xl"></i></a>
                <a href="" className='footer-icon'><i className="fa-brands fa-twitter text-media-twitter"></i></a>
            </div>
        </div>
        <a href='https://adriangonzalez.tech' target='_blank'>Creado por adriangonzalez.tech</a>
    </footer>
  )
}
