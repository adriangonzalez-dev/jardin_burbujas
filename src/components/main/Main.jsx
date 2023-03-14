import banner from '../../assets/images/fucsia.png'

export const Main = () => {
  return (
    <main>
        <div className="bg-parallax bg-fixed bg-center bg-cover h-screen"></div>
        <div className='w-full h-fit relative flex items-center justify-center'>
            <div className='w-72 mx-auto absolute -top-36'>
                <img src={banner} alt="" />
                <p className='absolute top-32 left-14 text-primary-300 text-xl'>INSCRIPCIONES ABIERTAS</p>
            </div>
            <div className='mt-24 p-2 text-center'>
                <p>Definimos el Jardín de Infantes como el medio eficaz para el desarrollo pleno e integral de la persona niño/a. Es un espacio donde confluyen modos de relación, formas de expresión de sentimientos, recreación y resignificación de contenidos, signos, señales y símbolos de la cultura en la que estamos inmersos. Es un espacio privilegiado para el desarrollo de la capacidad artística creadora.</p>
            </div>
        </div>
    </main>
  )
}
