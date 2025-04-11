import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AdmBeats() {
    const [open, setOpen] = useState(false);
    const [beats, setBeats] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const fetchBeats = async () => {
        try {
            const response = await axios.get("https://ghostlabbackend.onrender.com/beats/");
            const naoExclusivos = response.data.filter(beat => !beat.exclusive);
            setBeats(naoExclusivos);
        } catch (error) {
            console.error("Erro ao buscar beats:", error);
        }
    };

    useEffect(() => {
        fetchBeats();
    }, []);

    const sendForm = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }
        if (data.audio && data.audio[0]) {
            formData.append("audio", data.audio[0]);
        }
        formData.append("exclusive", data.exclusive ? "true" : "false");

        try {
            const response = await axios.post("https://ghostlabbackend.onrender.com/beats/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Beat cadastrado com sucesso:", response.data);
            reset();
            setOpen(false);
            fetchBeats(); // Atualiza a lista
        } catch (error) {
            console.error("Erro ao cadastrar beat:", error);
        }
    };

    const deletarBeat = async (id) => {
        try {
            await axios.delete(`https://ghostlabbackend.onrender.com/beats/${id}`);
            fetchBeats();
        } catch (error) {
            console.error("Erro ao deletar beat:", error);
        }
    };

    return (
        <div className="sm:w-3/5 sm:h-[80vh] w-4/5 h-[80vh] m-4 sm:ml-2 bg-neutral-50 rounded-lg shadow-lg p-4 sm:mx-8 flex flex-col justify-between">
            <h1 className="text-center text-xl mb-4">Beats Não Exclusivos</h1>

            <div className="w-full h-full overflow-y-auto">
                {beats.map((beat) => (
                    <div key={beat.id} className="flex justify-between items-center border p-2 rounded-lg my-2 shadow-md">
                        <div className="flex items-center sm:gap-4 mr-2 flex-col sm:flex-row">
                            <img src={beat.image_path} className="w-12 h-12 rounded-lg border" alt={beat.name} />
                            <p className="font-semibold sm:text-lg text-sm w-max">{beat.name}</p>
                        </div>

                        <div className="flex gap-2 flex-col sm:flex-row">
                            <button className="bg-yellow-500 text-white sm:px-3 px-2 py-1 rounded hover:bg-yellow-600">Editar</button>
                            <button
                                onClick={() => deletarBeat(beat.id)}
                                className="bg-red-600 text-white sm:px-3 px-2 py-1 rounded hover:bg-red-700"
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-4">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-roxo-claro w-1/2 p-1 rounded-xl hover:bg-roxo-escuro text-neutral-50 font-bold transition-colors"
                >
                    Adicionar Beat
                </button>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <div>
                        <h1 className="text-xl font-medium">Adicionar Beat</h1>
                        <form onSubmit={handleSubmit(sendForm)} className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Nome do beat"
                                className="p-2 border rounded-lg mt-4"
                                {...register("name", {
                                    required: "O nome do beat é obrigatório.",
                                })}
                            />

                            <input type="file" accept="image/*" {...register("image")} />
                            <input type="file" accept="audio/*" {...register("audio")} />

                            <label className="flex items-center gap-2 mt-2">
                                <span>É exclusivo?</span>
                                <input type="checkbox" {...register("exclusive")} className="w-4 h-4" />
                            </label>

                            <button
                                type="submit"
                                className="bg-roxo-claro p-1 rounded-lg text-neutral-50 font-semibold mt-2 hover:bg-roxo-escuro transition-colors"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
