import logo from "../assets/logo.png"
import burguer from "../assets/burguer.svg"

const Header = () => {

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
                    <button className="cursor-pointer hover:bg-slate-950">
                        <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" /> <path d="M4 12L20 12" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" /> <path d="M4 6L20 6" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" /> </g>
                        </svg>
                    </button>
                </div>
            </header>
        </section>

    )

}

export default Header