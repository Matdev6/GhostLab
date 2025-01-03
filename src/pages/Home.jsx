import { motion } from "framer-motion";
import videoplayback from "../assets/videoplayback.mp4";
import Catalogo from "./Catalogo";
import NaoExclusivo from "./Naoexclusivo";
import Social from "./Social";

const Home = () => {
    return (
        <>
        <section className="overflow-hidden">
            <video
                src={videoplayback}
                autoPlay
                muted
                loop
                className="h-screen w-screen  top-20 object-cover"
                aria-hidden="true"
            />
            <div className="absolute top-1/4 left-20 flex w-1/x flex-col lg:w-2/6">
                <h1 className="text-roxo-claro text-4xl lg:text-5xl font-bold p-4 ">
                    Ghost<span className="text-white">Lab Produção</span> 
                </h1>
                <p className="text-gray-50 text-2xl lg:text-3xl font-semibold ml-4  text-left w-3/4">Compre seu Beat com produção profissional com o melhor custo beneficio do mercado!</p>
                <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95}}
                target="_blank"
                href="https://web.whatsapp.com/"
                className="text-white flex justify-center items-center p-4 bg-roxo-claro hover:bg-roxo-escuro transition-all w-48 h-10 rounded-lg mt-4 ml-4 font-bold">Contato</motion.a>
            </div>
        </section>
        <Catalogo />
        <NaoExclusivo />
        <Social />
        </>
    );
}

export default Home