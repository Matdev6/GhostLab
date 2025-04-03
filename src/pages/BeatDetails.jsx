import { useParams } from 'react-router-dom';
import { beats } from '../components/beatsData'; // Certifique-se de que o caminho está correto
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import pause from "../assets/pausa.png";
import play from "../assets/play.png";
import avancar from "../assets/avancar.png";
import voltar from "../assets/voltar.png";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const BeatDetails = () => {
  const { name } = useParams(); // Captura o parâmetro "name" da URL
  const beat = beats.find((b) => b.name === name); // Encontra o beat correspondente pelo nome

  const audioRef = useRef(null); // Referência para o elemento de áudio
  const progressRef = useRef(null); // Referência para a barra de progresso
  const [isPlaying, setIsPlaying] = useState(false); // Estado do botão play/pause
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual da música
  const [duration, setDuration] = useState(0); // Duração total da música
  const [volume, setVolume] = useState(1); // Estado para controlar o volume (1 = 100%)
  const [showVolume, setShowVolume] = useState(false)

  if (!beat) {
    return <h1 className="text-white text-center mt-10">Beat não encontrado</h1>;
  }

  // Alternar entre play e pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Retroceder 10 segundos
  const rewind = () => {
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    setCurrentTime(audioRef.current.currentTime);
  };

  // Avançar 10 segundos
  const forward = () => {
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      duration
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  // Atualizar progresso do tempo
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Configurar duração total
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Saltar para parte clicada na barra de progresso
  const handleProgressClick = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const newTime = (offsetX / progressWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Ajustar volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Formatar tempo (minutos:segundos)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toglleShowVolume = () => {
    setShowVolume(!showVolume)
  }

  return (
    <div className="text-white p-4 bg-neutral-950 h-screen w-screen flex flex-col items-center justify-center">

      <div>
        <img src={beat.img} alt={beat.name} className="border border-neutral-800 md:w-80 mx-auto my-4 mt-20 rounded-xl shadow-xl" />
      </div>

      {/* Music Player */}
      <div className="w-full max-w-md p-4 rounded-lg">
        <p className="text-lg font-medium">{beat.name}</p>
        <div
          ref={progressRef}
          className="w-full h-2 bg-gray-700 rounded cursor-pointer relative mt-8"
          onClick={handleProgressClick}
        >

          <div
            className="h-2 bg-neutral-50  absolute"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className='flex justify-between'>
          <div className="text-sm mt-2 text-start text-neutral-400">
            {formatTime(currentTime)}
          </div>
          <div className="text-sm mt-2 text-start text-neutral-400">
            {formatTime(duration - currentTime)}
          </div>
        </div>


        <audio
          ref={audioRef}
          src={beat.audio} // Certifique-se de que o objeto "beat" contém a propriedade "audio"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>
        <div className="flex justify-around items-center my-4">
          <SkipBack onClick={rewind} className='w-8 h-8 fill-white cursor-pointer' />
          <button onClick={togglePlay}>
            {isPlaying ? <Pause className='h-12 w-12 rounded-full border p-3 bg-white text-neutral-950 fill-black ' /> : <Play className='h-12 w-12 rounded-full  p-3 bg-white text-neutral-950 fill-black' />}
          </button>
          <SkipForward onClick={forward} className='w-8 h-8 fill-white cursor-pointer' />
        </div>



        {/* Controle de Volume */}
        {/* <div className="mt-4 flex">
          <Volume2 className={` w-6 h-6 ${showVolume ? "" : "flex "}`} onClick={toglleShowVolume} />

          {showVolume && (<input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-1/12 accent-white"
          />)}

          
        </div> */}
      </div>

      <div className="flex sm:flex-row gap-4 mt-6">
        <Link
          to="/home"
          className="px-4 py-2 bg-roxo-claro hover:bg-roxo-escuro text-white rounded text-center font-bold"
        >
          Voltar
        </Link>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          className="px-4 py-2 bg-roxo-claro hover:bg-roxo-escuro text-white rounded text-center font-bold"
          rel="noreferrer"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default BeatDetails;
