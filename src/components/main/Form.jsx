import React from 'react'
import {useForm} from 'react-hook-form'

export const Form = () => {

    const {register, formState:{errors},handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className='w-full flex flex-col p-2 text-primary-100 items-center justify-center'>
        <h2 className='text-xl'>ESCRIBINOS!</h2>
        <form 
        className='w-full flex flex-col gap-2 items-center justify-center'
        onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
                <label htmlFor="name">Nombre</label>
                <input 
                type="text" 
                name='name' 
                id='name'
                className='input-style'
                {...register('name',{
                    required:{
                        value:true,
                        message:'El nombre es requerido'
                    }
                })}
                />
                {
                    errors.name 
                    && 
                    <span className='warning-message'>{errors.name.message}</span>
                }
                
            </div>
            <div className='input-container'>
                <label htmlFor="phone">Télefono</label>
                <input 
                type="text" 
                name='phone' 
                id='phone'
                className='input-style'
                {...register('phone',{
                    required: {
                        value: true,
                        message: 'El télefono es requerido'
                    },
                    pattern: {
                        value: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
                        message:'El télefono no es válido'
                    }
                })}
                />
                {
                    errors.phone && <span className='warning-message'>{errors.phone.message}</span>
                }
            </div>
            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input type="text" 
                name='email' 
                id='email'
                className='input-style'
                {...register('email',{
                    required: {
                        value: true,
                        message: 'El email es requerido'
                    },
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message:'El email no es válido'
                    }
                })}
                />
                {errors.email && <span className='warning-message'>{errors.email.message}</span>}
            </div>
            <div className='input-container'>
                <label htmlFor="message">Mensaje</label>
                <textarea name='message' id='message' className='input-style' {...register('message')}></textarea>
            </div>
            <button className='btn-submit'>ENVIAR</button>
        </form>
    </div>
  )
}
