import SocialCard from '../components/SocialCard';
import instagram from '../assets/instagram.png';
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp.png'
import { useRef } from "react";

const Social = () => {
    const scrollRef = useRef(null)

    return (
        <section ref={scrollRef} className="lg:altura-tela w-screen bg-neutral-900 h-full">
            <div className="flex flex-col  ">
                <h1 className="text-white flex m-10  text-3xl text-center   font-bold md:m-52 lg:hidden">Nossas redes sociais</h1>
                <h1 className="text-white ml-28 mt-10 mb-20    text-3xl font-bold  hidden lg:flex ">Nossas redes sociais</h1>
                <div className="flex ml-12 w-screen flex-col gap-4 lg:gap-10 md:ml-52 lg:flex-row lg:my-auto pb-6">
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31"
                        logo={whatsapp}
                        text="Clique aqui e seja direcionado para nosso Whatsapp "
                        title="Whatsapp"
                    />
                    <SocialCard
                        link="https://www.instagram.com/ghostlab_gang/"
                        logo={instagram}
                        text="Clique aqui para acessar nosso instagram e ficar por dentro das novidades!"
                        title="Instagram"
                        />
                    <SocialCard
                        link="https://open.spotify.com/intl-pt/artist/4DuWHxZyzuP9ZCuIsHscce"
                        logo={spotify}
                        text="Clique aqui para acessar nosso spotify e acompamnhar meus lançamentos"
                        title="Spotify"
                        />
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31"
                        logo={youtube}
                        text="Clique aqui para cessar nosso Youtube e veja nossos clipes "
                        title="Youtube"
                    />
                </div>
            </div>
        </section>
    )
}

export default Social