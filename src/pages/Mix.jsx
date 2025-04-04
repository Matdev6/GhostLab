import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

export default function Mix() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-screen sm:h-[calc(91vh)] bg-gradient-to-r to-[#8849E6] from-[#472B94]">
            <div className="w-full flex flex-col gap-12">
                <div className="text-center flex justify-center items-center mt-16 ">
                    <h1 className="text-[#D1D1D1] font-bold text-4xl ">SERVIÇOS</h1>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-12 w-full  mb-14 sm:h-1/3 ">
                    <motion.img
                        initial={{ opacity: 0, x: isDesktop ? -500 : 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        src={card1}
                        alt=""
                        className="w-[80%] sm:h-full rounded-md shadow-xl sm:w-1/5"
                    />
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        src={card2}
                        alt=""
                        className="w-[80%] sm:h-full rounded-md shadow-xl sm:w-1/5"
                    />
                    <motion.img
                        initial={{ opacity: 0, x: isDesktop ? 500 : 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        src={card3}
                        alt=""
                        className="w-[80%] sm:h-full rounded-md shadow-xl sm:w-1/5"
                    />
                </div>
            </div>
        </div>
    );
}
