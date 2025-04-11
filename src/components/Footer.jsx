export default function Footer(){

    const date = new Date()
    const year = date.getFullYear()

    return(
        <div className="bg-neutral-950 h-32 w-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="text-neutral-300">© {year} <span className="text-roxo-claro">Ghost</span>Lab — Todos os direitos reservados.</p>
                <p className="text-neutral-300">Desenvolvido por <a href="https://github.com/Matdev6" target="_blank" rel="noreferrer" className="underline hover:text-white transition">Mateus Bernardo</a></p>
            </div>
        </div>
    )
}