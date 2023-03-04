import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useFavoritos from '../hooks/useFavoritos'

export default function ModalPersonajes({activarModal, setActivarModal, personaje, personajes, setPersonajes}) {

    const { id, name, status, species, gender, origin, location, image } = personaje

    const { favoritos, agregarFavorito } = useFavoritos()

    const quitarFavorito = id => {
        agregarFavorito(id)
        if(personajes) {
            const personajesActualizados = personajes.filter(personaje => personaje.id !== id)
            setPersonajes(personajesActualizados)
            setActivarModal(false)
        }
    }

    return (
        <Transition.Root show={activarModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setActivarModal(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                        />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">


                            <div className="block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => setActivarModal(false)}
                                >
                                <span className="sr-only">Cerrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            <div className="flex flex-col items-center">
                                <h1 className='text-center text-green-600 text-2xl font-bold mb-5'>{name}</h1>
                                <img className='w-60 mb-5' src={image} alt={`Imagen ${name}`} />
                                <h3 className='text-center text-green-600 text-lg font-bold mb-4'>Information:</h3>
                                <div className=''>
                                    <p className='text-left'>- Status: <span className='text-green-600 font-bold'>{status}</span></p>
                                    <p className='text-left'>- Species: <span className='text-green-600 font-bold'>{species}</span></p>
                                    <p className='text-left'>- Gender: <span className='text-green-600 font-bold'>{gender}</span></p>
                                    <p className='text-left'>- Origin: <span className='text-green-600 font-bold'>{origin?.name}</span></p>
                                    <p className='text-left'>- Location: <span className='text-green-600 font-bold'>{location?.name}</span></p>
                                </div>
                                <button
                                    className={`${favoritos.includes(id) ? 'bg-red-500 hover:bg-red-400' : 'bg-green-700 hover:bg-green-500'} p-2 uppercase text-white rounded-lg mt-5`}
                                    type='button'
                                    onClick={() => quitarFavorito(id)}
                                >{favoritos.includes(id) ? 'Quitar Favorito' : 'Agregar Favorito'}</button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}