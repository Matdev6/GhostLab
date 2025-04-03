import { motion } from "framer-motion";
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"

export default function Mix() {
    return (
        <div className="w-screen altura-tela bg-gradient-to-r to-[#8849E6] from-[#472B94] border-neutral-600">
            <div className="w-full h-full flex flex-col gap-12">
                <div className="text-center flex justify-center items-center mt-20">
                    <h1 className="text-white font-bold text-4xl">SERVIÇOS</h1>
                </div>
                <div className="flex items-center justify-center my-auto w-full h-2/3 gap-12">
                    <motion.img 
                    initial={{ opacity: 0, x: -400 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1 }}
                    src={card1} alt="" className="h-full rounded-md shadow-xl" />
                    <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5 }}
                    src={card2} alt="" className="h-full rounded-md shadow-xl" />
                    <motion.img 
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1 }}
                    src={card3} alt="" className="h-full rounded-md shadow-xl" />
                </div>

            </div>


        </div>
    );
}
