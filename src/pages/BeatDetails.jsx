import { useParams } from 'react-router-dom';
import { beats } from '../components/beatsData'; // Certifique-se de que o caminho está correto
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import pause from "../assets/pausa.png";
import play from "../assets/play.png";
import avancar from "../assets/avancar.png";
import voltar from "../assets/voltar.png";

const BeatDetails = () => {
  const { name } = useParams(); // Captura o parâmetro "name" da URL
  const beat = beats.find((b) => b.name === name); // Encontra o beat correspondente pelo nome

  const audioRef = useRef(null); // Referência para o elemento de áudio
  const progressRef = useRef(null); // Referência para a barra de progresso
  const [isPlaying, setIsPlaying] = useState(false); // Estado do botão play/pause
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual da música
  const [duration, setDuration] = useState(0); // Duração total da música
  const [volume, setVolume] = useState(1); // Estado para controlar o volume (1 = 100%)

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

  return (
    <div className="text-white p-4 bg-black h-screen w-screen flex flex-col items-center justify-center">

      <img src={beat.img} alt={beat.name} className="w-64 md:w-96 mx-auto my-4" />
      <p className="text-lg my-2">{beat.name}</p>

      {/* Music Player */}
      <div className="w-full max-w-md p-4 rounded-lg">
        <audio
          ref={audioRef}
          src={beat.audio} // Certifique-se de que o objeto "beat" contém a propriedade "audio"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>
        <div className="flex justify-around items-center my-4">
          <button onClick={rewind}>
            <img src={voltar} alt="voltar-10s" className="w-8" />
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? <img src={pause} alt="Pausa" className="w-8" /> : <img src={play} alt="Play" className="w-8" />}
          </button>
          <button onClick={forward}>
            <img src={avancar} alt="avancar-10s" className="w-8" />
          </button>
        </div>
        <div
          ref={progressRef}
          className="w-full h-2 bg-gray-700 rounded cursor-pointer relative mt-8"
          onClick={handleProgressClick}
        >
          <div
            className="h-2 bg-roxo-claro  absolute"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="text-sm mt-2 text-center">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Controle de Volume */}
        <div className="mt-4">
          <label htmlFor="volume-control" className="block text-sm font-semibold mb-2">
            Volume
          </label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-roxo-claro"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
