import insta from "../assets/icons8-instagram.svg"

const Social = () => {
    return(
        <section className="altura-tela bg-green-50 flex">
            <h1 className="text-white text-3xl font-bold mx-auto">Nossas redes sociais</h1>
            <a href=""><img src={insta} alt="instagram" className="text-green" /></a>
        </section>
    )
}

export default Social