import { motion } from "framer-motion";

const SocialCard = ({link, logo, text, title}) => {
    return (
        <div>
            <motion.a
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                href={link}
                target="_blank"
                className=" w-3/4 md:w-2/4 mb-10 h-56 lg:w-80 lg:h-72  border border-fundo-secundario bg-neutral-950 rounded-2xl p-4 flex flex-col items-center cursor-pointer" style={{ boxShadow: ' 9px 9px 15px -3px #AD26E3' }}>
                <img src={logo} alt="instagram logo" className="w-10 h-10  relative -top-9 rounded-xl" />
                <h1 className="text-white relative -top-6 font-semibold text-xl">{title}</h1>
                <p className="text-xl font-bold text-white text-center mt-2">{text}</p>
            </motion.a>
        </div>
    )
}

export default SocialCard