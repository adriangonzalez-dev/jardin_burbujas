import banner from '../../assets/images/fucsia.png';
import {image1,image2,image3,image4,image5,image6,image7} from '../../assets/images/images'

export const Main = () => {
  return (
    <main>
        <div className="bg-parallax bg-fixed bg-center bg-cover h-screen"></div>
        <div className='w-full h-fit relative flex items-center justify-center'>
            <div className='w-72 mx-auto absolute -top-36'>
                <img src={banner} alt=""/>
                <p className='absolute top-32 left-14 text-primary-300 text-xl'>INSCRIPCIONES ABIERTAS</p>
            </div>
            <div className='mt-24 p-2 text-center text-primary-100'>
                <p>Definimos el Jardín de Infantes como el medio eficaz para el desarrollo pleno e integral de la persona niño/a. Es un espacio donde confluyen modos de relación, formas de expresión de sentimientos, recreación y resignificación de contenidos, signos, señales y símbolos de la cultura en la que estamos inmersos. Es un espacio privilegiado para el desarrollo de la capacidad artística creadora.</p>
            </div>
        </div>
        <section>
            <article className='w-full flex flex-col md:flex-row'>
                <img src={image1} alt="" className='w-full md:w-1/2'/>
                <div className='flex flex-col items-center justify-center p-2 text-center text-primary-300 bg-primary-400 w-full md:w-1/2'>
                    <h2 className='font-semibold text-3xl'>EL JARDÍN</h2>
                    <p>Definimos el Jardín de Infantes como el medio eficaz para el desarrollo pleno e integral de la persona niño/a. Es un espacio donde confluyen modos de relación, formas de expresión de sentimientos, recreación y resignificación de contenidos, signos, señales y símbolos de la cultura en la que estamos inmersos. Es un espacio privilegiado para el desarrollo de la capacidad artística creadora.</p>
                </div>
            </article>
            <article className='w-full flex flex-col md:flex-row-reverse'>
                <img src={image2} alt="" className='w-full md:w-1/2'/>
                <div className='flex flex-col items-center justify-center w-full md:w-1/2 p-2 text-center text-primary-300 bg-primary-300'>
                    <h2 className='text-primary-400 font-semibold text-3xl'>JORNADA EDUCATIVA</h2>
                    <p className='text-primary-100'>El horario de las actividades curriculares obligatorias del Jardín es de 8:30 a 12:30hs. La institución ofrece además servicios de comedor y talleres hasta las 15:30 hs. Favoreciendo así a las familias con las exigencias laborales.
                    Para las áreas curriculares las actividades se desprenden del Diseño Curricular vigente considerando al niño-alumno como un sujeto de derechos a una educación integral.
                    Dichas áreas son: Formación personal y social; Matemática; Prácticas del Lenguaje; Educación Física; el Ambiente Natural y Social; Lenguaje de las artes y los medios y Juego.
                    En el turno tarde los pequeños de sala de 3 años descansan una hora y comienzan a las 14:30hs. con Talleres. Los de 4 y 5 años comienzan los talleres a las 13:30hs. hasta las 15:30hs.. Meriendan y esperan la llegada de las familias.
                    Durante los talleres las actividades de Plástica, Inglés, Cuentos, Teatro, Juego y Movimiento despiertan en los niños variadas oportunidades de aprendizaje.
                    Siendo la Estética y la educación artística central en nuestro proyecto educativo el Jardín es un Atelier permanente y cotidiano en nuestras instituciones.</p>
                </div>
            </article>
            <article className='w-full flex flex-col md:flex-row'>
                <img src={image7} alt="" className='w-full md:w-1/2'/>
                <div className='flex flex-col items-center justify-center w-full md:w-1/2 p-2 text-center text-primary-300 bg-primary-400'>
                    <h2 className='font-semibold text-3xl'>TALLERES</h2>
                    <p>Entendemos al taller como un modo de organizar propuestas con características comunes a otras actividades, pero con algunas que son propias. Ésta modalidad es abierta, flexible y se sustenta en la participación activa, el constante intercambio, la construcción conjunta del conocimiento en un marco de respeto, de interacción y cooperación.
                    El taller lleva implícita una actitud democrática, en donde se prioriza el trabajo grupal con momentos de trabajo personal, con un ida y vuelta entre la teoría y la práctica, entre la reflexión y la acción. Se busca que los niños/as desde sus posibilidades de desarrollo se acerquen a niveles cada vez más elevados de conceptualización.</p>
                </div>
            </article>
        </section>
    </main>
  )
}
