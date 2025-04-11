import { useParams, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import axios from "axios";

const BeatDetails = () => {
  const { name } = useParams();
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [beat, setBeat] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await axios.get("https://ghostlabbackend.onrender.com/beats/");
        const beats = response.data;
        const beatFound = beats.find((b) => b.name === decodeURIComponent(name));
        setBeat(beatFound);
      } catch (error) {
        console.error("Erro ao buscar beats:", error);
      }
    };

    fetchBeats();
  }, [name]);

  if (!beat) {
    return <h1 className="text-white text-center mt-10">Beat não encontrado</h1>;
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    setCurrentTime(audioRef.current.currentTime);
  };

  const forward = () => {
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const newTime = (offsetX / progressWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-white p-4 bg-gradient-to-t to-neutral-950 from-neutral-800 h-screen w-screen flex flex-col items-center justify-center gap-8">
      <div>
        <img
          src={beat.image_path}
          alt={beat.name}
          className="border border-neutral-800 md:w-80 w-64 mx-auto rounded-xl shadow-xl"
        />
      </div>

      <div className="w-full max-w-md p-4 rounded-lg bg-neutral-800">
        <p className="text-lg font-medium">{beat.name}</p>

        <div
          ref={progressRef}
          className="w-full h-2 bg-gray-700 rounded cursor-pointer relative mt-8"
          onClick={handleProgressClick}
        >
          <div
            className="h-2 bg-neutral-50 absolute hover:bg-roxo-claro"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between">
          <span className="text-sm mt-2 text-neutral-400">{formatTime(currentTime)}</span>
          <span className="text-sm mt-2 text-neutral-400">{formatTime(duration - currentTime)}</span>
        </div>

        <audio
          ref={audioRef}
          src={beat.audio_path}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>

        <div className="flex justify-around items-center my-4">
          <SkipBack onClick={rewind} className="w-8 h-8 fill-white cursor-pointer" />
          <button onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="h-12 w-12 rounded-full border p-3 bg-white text-neutral-950 fill-black" />
            ) : (
              <Play className="h-12 w-12 rounded-full p-3 bg-white text-neutral-950 fill-black" />
            )}
          </button>
          <SkipForward onClick={forward} className="w-8 h-8 fill-white cursor-pointer" />
        </div>

        {/* Volume */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full accent-white mt-4"
        />
      </div>

      <div className="flex sm:flex-row gap-4 mt-2">
        <Link
          to="/"
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
