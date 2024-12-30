import SocialCard from '../components/SocialCard';
import instagram from '../assets/instagram.png';
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import { useRef } from "react";

const Social = () => {
    const scrollRef = useRef(null)

    return (
        <section ref={scrollRef} className="lg:altura-tela w-screen bg-black h-full">
            <div className="flex flex-col  ">
                <h1 className="text-white flex m-10 text-3xl font-bold md:m-52">Nossas redes sociais</h1>
                <div className="flex ml-12 w-screen flex-col gap-4 lg:gap-10 md:ml-52 lg:flex-row justify-cen">
                    <SocialCard 
                        link="https://www.instagram.com/ghostlab_gang/"
                        logo={instagram}
                        texto="Clique aqui para acessar nosso instagram e ficar por dentro das novidades!" />
                    <SocialCard 
                        link="https://open.spotify.com/intl-pt/artist/4DuWHxZyzuP9ZCuIsHscce"
                        logo={spotify}
                        texto="Clique aqui para acessar nosso spotify e acompamnhar meus lançamentos" />
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31" 
                        logo={youtube}
                        texto="Clique aqui para cessar nosso Youtube e veja nossos clipes "
                    />
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31" 
                        logo={youtube}
                        texto="Whatsapp "
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default Social