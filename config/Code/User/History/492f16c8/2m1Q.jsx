import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircle, faSquareFull } from '@fortawesome/free-solid-svg-icons'

class Content extends Component {
    render() {
        return (
            <div>
                <div className="sticky top-0 h-screen ">
                    <nav className=' bg-Crust p-4'>
                        <div className='container mx-auto flex justify-between items-center'>
                            <div>logo</div>
                            <div className='hidden lg:flex space-x-4'>
                                <div  className=' bg-Yellow text-Mantle text-xl font-semibold hover:underline transform hover:scale-110 transition duration-300 ease-in-out'>
                                    <svg viewBox="0 0 1300 3179" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path d="M0 2725L1200 19v2706H0zm1200 0V19h100v2706h-100z" /></svg>
                                    <a href="">Inicio</a>
                                    <svg viewBox="0 0 1300 3179" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path d="M100 2725V19h1200L100 2725zm0 0H0V19h100v2706z" /></svg>
                                </div>
                                <a href="" className=' bg-Peach text-Mantle text-xl font-semibold hover:underline transform hover:scale-110 transition duration-300 ease-in-out'>Nosotros</a>
                                <a href="" className=' bg-Red text-Mantle text-xl font-semibold hover:underline transform hover:scale-110 transition duration-300 ease-in-out'>Catalogo</a>
                                <a href="" className=' bg-Mauve text-Mantle text-xl font-semibold hover:underline transform hover:scale-110 transition duration-300 ease-in-out'>Contacto</a>
                            </div>
                            <div className='lg:hidden'>
                                <button className='text-white'>
                                    &#9776;
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className='flex w-full justify-around'>
                        <div></div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-green-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-red-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-green-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-red-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-green-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-red-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
                <div className="sticky top-0 h-screen shadow-lg bg-green-500">
                    {/* <div className="w-full h-[4%] bg-gradient-to-t from-green-500 to-red-500"></div> */}
                    <div className="w-full h-screen flex justify-center items-center font-medium text-5xl hover:font-bold">Hola</div>
                </div>
            </div>
        );
    }
}





export default Content;
