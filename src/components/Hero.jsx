import { motion } from "framer-motion";
import videoplayback from "../assets/videoplayback.mp4";

const Hero = () => {
    return (
        <section className="overflow-hidden">
            <video
                src={videoplayback}
                autoPlay
                muted
                loop
                className="h-screen w-screen  top-20 object-cover"
                aria-hidden="true"
            />
            <div className="absolute top-1/4 left-20 flex flex-col w-96 ">
                <h1 className="text-roxo-claro text-4xl font-bold p-4 ">
                    Ghost<span className="text-white">Lab Produção</span> 
                </h1>
                <p className="text-gray-50 text-2xl font-semibold ml-4  text-left">Compre seu Beat com produção profissional com o melhor custo beneficio do mercado</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95}}
                className="text-white flex justify-center items-center p-4 bg-roxo-claro hover:bg-roxo-escuro transition-all w-48 h-10 rounded-lg mt-4 ml-4 font-bold">Contato</motion.button>
            </div>
        </section>
    );
};

export default Hero;
