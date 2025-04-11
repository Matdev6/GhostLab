import SocialCard from '../components/SocialCard';
import instagram from '../assets/instagram.png';
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp.png'
import { useRef } from "react";
import svg from "../assets/social.svg"

const Social = () => {
    const scrollRef = useRef(null)

    return (
        <section ref={scrollRef} className=" w-screen bg-gradient-to-r to-[#8849E6] from-[#472B94] h-full sm:h-[77vh]">
            <div className="flex flex-col  ">
                <h1 className="text-white flex m-10 sm:m-20  text-3xl text-center  font-bold  justify-center">Nossas redes sociais</h1>
                <div className="flex ml-12 sm:ml-0 w-screen flex-col gap-4 lg:gap-10 justify-center lg:flex-row  pb-6">
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31"
                        logo={whatsapp}
                        text="Agende sua produção e tire todas as suas dúvidas pelo WhatsApp. "
                        title="Fale com a gente!"
                    />
                    <SocialCard
                        link="https://www.instagram.com/ghostlab_gang/"
                        logo={instagram}
                        text="Siga-nos para acompanhar as últimas novidades, bastidores e conteúdos exclusivos."
                        title="Fique por dentro!"
                        />
                    <SocialCard
                        link="https://open.spotify.com/intl-pt/artist/4DuWHxZyzuP9ZCuIsHscce"
                        logo={spotify}
                        text="Não perca nossos lançamentos e playlists exclusivas no Spotify."
                        title="Ouça agora!"
                        />
                    <SocialCard
                        link="https://www.youtube.com/@Zero.og31"
                        logo={youtube}
                        text="Confira nossos lançamentos e vídeos inéditos no YouTube."
                        title="Assista nossos clipes!"
                    />
                </div>
            </div>
        </section>
    )
}

export default Social