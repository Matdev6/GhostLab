import { motion } from "framer-motion";

const SocialCard = ({link, logo, text, title}) => {
    return (
        <div>
            <motion.a
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -10 }}
                href={link}
                target="_blank"
                className=" w-3/4 md:w-2/4 mb-10 h-max lg:w-80 lg:h-72  bg-[#2C1A6C] rounded-2xl p-4 flex flex-col items-center cursor-pointer transition-colors transform duration-300 hover:bg-fundo-secundario" style={{ boxShadow: ' 9px 9px 15px -3px #2C1A6C' }}>
                <img src={logo} alt="instagram logo" className="w-10 h-10  relative  rounded-xl hover:" />
                <h1 className="text-white relative  font-bold text-2xl my-4 text-center">{title}</h1>
                <p className="text-xl font-semibold text-[#D1D1D1] text-center mt-2 mb-2 sm:mb-0">{text}</p>
            </motion.a>
        </div>
    )
}

export default SocialCard