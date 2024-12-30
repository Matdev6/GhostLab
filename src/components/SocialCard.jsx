import { motion } from "framer-motion";

const SocialCard = ({link, logo, texto}) => {
    return (
        <div>
            <motion.a
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                href={link}
                target="_blank"
                className=" w-3/4 md:w-2/4 mb-10 h-56 lg:w-80 lg:h-80 shadow-lg border border-fundo-secundario rounded-2xl p-4 flex flex-col items-center ">
                <img src={logo} alt="instagram logo" className="w-10 h-10  relative -top-8 bg-black rounded-xl" />
                <h1 className="text-xl font-bold text-white text-center">{texto}</h1>
            </motion.a>
        </div>
    )
}

export default SocialCard