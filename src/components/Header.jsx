import logo from "../assets/logo.png"

const Header = () => {

    return (

        <section className="overflow-x-hidden" id="catalogo">
            <header className="w-screen h-20 bg-black text-white flex justify-center left-0 fixed top-0  items-center gap-3 z-50 ">
                <img src={logo} alt="logo" className="w-20" />
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center hover:text-roxo-es transition-all" href="#">Home</a>
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#catalogo">Catalogo</a>
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">ghostlab beats</a>
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">sample packs</a>
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">orçamentos</a>
                <a className="h-8 w-36 bg-roxo-claro shadow-md rounded-xl uppercase text-sm font-normal flex justify-center items-center" href="#">black friday</a>
            </header>
        </section>

    )

}

export default Header