import { useState } from "react"
import logo from "../assets/logo.png"



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <section className="overflow-x-hidden" id="catalogo">
            <header className="w-screen h-20 bg-black text-white flex justify-around lg:justify-center left-0 fixed top-0  items-center gap-3 z-50 ">
                <img src={logo} alt="logo" className="w-20" />
                <div className="hidden lg:flex gap-3">
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center hover:text-roxo-es transition-all" href="#">Home</a>
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-xs font-normal flex justify-center items-center" href="#catalogo">Catalogo exclusivo</a>
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">Catalogo </a>
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">Social</a>
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">orçamentos</a>
                    <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">black friday</a>
                </div>
                <div className="flex lg:hidden">
                    <button className="cursor-pointer hover:bg-slate-950" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            width="48px"
                            height="48px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M4 18L20 18"
                                    stroke="#AD26E3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M4 12L20 12"
                                    stroke="#AD26E3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M4 6L20 6"
                                    stroke="#AD26E3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                    </button>
                    <div className={`absolute lg:hidden top-20 left-0 w-full h-screen bg-black  flex-col items-center gap-6 font-semibold text-lg transform transition-transform  ${menuOpen ? "flex" : 'hidden'}`}>
                        <a href="#" className=" w-full text-center py-6">Home</a>
                        <a href="#" className=" w-full text-center py-6">Catalogo Exclusivo</a>
                        <a href="#" className=" w-full text-center py-6">Catalogo Não exclusivo</a>
                        <a href="#" className=" w-full text-center py-6">Social</a>
                        <a href="#" className=" w-full text-center py-6">Footer</a>
                    </div>
                </div>
            </header>
        </section>

    )

}

export default Header