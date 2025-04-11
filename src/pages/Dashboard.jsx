import { useState } from "react"
import logo from "../assets/logo.png"
import Modal from "../components/Modal"
import AdmBeatsExclusivos from "../components/admBeatsExclusivos"
import AdmBeats from "../components/AdmBeats"
import { Link } from "react-router-dom"

export default function Dashboard() {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-screen sm:h-screen bg-neutral-300 flex  items-center flex-col sm:flex-col">
            <nav className="w-full shadow h-20 bg-neutral-50 flex justify-around items-center">
                <img src={logo} className="w-16 h-16 bg-neutral-950 p-1 rounded-full" alt="logo" />
                <h1 className="text-2xl font-bold border-b-4 border-roxo-claro">Dashboard</h1>
                <Link to={"/"} className="border px-3 py-1 rounded-lg bg-roxo bg-roxo-claro text-white font-semibold">Inicio</Link>
            </nav>
            <div className="w-full border h-full flex flex-col sm:flex-row items-center">
                <AdmBeatsExclusivos />
                <AdmBeats />
            </div>

        </div>
    )
}

