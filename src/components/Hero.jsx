import { motion } from "motion/react";
import videoplayback from "../assets/videoplayback.mp4";

const Hero = () => {
    return (
        <div className="overflow-hidden">
            <video
                src={videoplayback}
                autoPlay
                muted
                loop
                className="h-screen w-screen absolute top-20 object-cover"
                aria-hidden="true"
            />
            <div className="absolute top-1/4 left-20 flex flex-col w-96 ">
                <h1 className="text-roxo-claro text-4xl font-bold p-4 rounded">
                    Ghost<span className="text-white">Lab Produção</span> 
                </h1>
                <p className="text-gray-50 text-2xl font-semibold ml-4  text-left">Compre seu Beat com produção profissional com o melhor custo beneficio do mercado</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95}}
                className="text-white flex justify-center items-center p-4 bg-roxo-claro hover:bg-roxo-escuro transition-all w-48 h-10 rounded-lg mt-4 ml-4 font-bold">Contato</motion.button>
            </div>
        </div>
    );
};

export default Hero;
