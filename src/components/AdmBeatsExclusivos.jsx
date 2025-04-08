import { useState } from "react"
import Modal from "../components/Modal"
import beats from "./beatsData"

export default function AdmBeatsExclusivos() {
    const [open, setOpen] = useState(false)
    return (
        <div className="sm:w-3/5 sm:h-[80vh] w-4/5 h-[70vh] m-4 sm:mr-2 bg-neutral-50 rounded-lg shadow-lg p-4 sm:mx-8 flex flex-col justify-between">
            <h1 className="text-center text-xl">Beats Exclusivos</h1>
            <div className=" flex flex-col items-center gap-4">
                <button onClick={() => setOpen(true)} className="bg-roxo-claro w-1/2 p-1 rounded-xl hover:bg-roxo-escuro text-neutral-50 font-bold transition-colors">Adicionar Beat</button>
                <Modal open={open} onClose={() => setOpen(false)} >
                    <div>
                        <h1 className="text-xl font-medium">Adicionar Beat</h1>
                        {console.log(beats)}
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder="Nome do beat" className="p-2 border rounded-lg mt-4" />
                            <input type="file" placeholder="" />
                            <input type="file" />
                            <input type="submit" className="bg-roxo-claro p-1 rounded-lg text-neutral-50 font-semibold mt-2" />
                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}