import { useForm } from "react-hook-form"
import { loginWithGoogle } from "../services/auth"
import google from "../assets/google.png"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = async () => {
        await loginWithGoogle(navigate);  // Passando navigate como argumento para o serviço
      };

    const onSubimit = async (data) => {
        try {
            const user = await login(data.password, data.name)
            console.log("usario logado com sucesso", user)
            alert("login realizado com sucesso!" + user)
        } catch (error) {
            console.error("Error no login", error.message)
            alert("Erro no login " + error.message)
        }
    }


    return (
        <div className="flex bg-zinc-200 h-screen w-screen">
            <div className="h-5/6 w-4/5 items-center justify-center  flex m-auto">
                <div className="h-full w-1/2 bg-fundo-secundario">
                    <h1 className="text-white"></h1>
                </div>
                <div className=" h-full w-1/2 bg-white">
                    <div className="flex flex-col mx-40 my-20">
                        <h1 className="font-bold text-5xl ">Login</h1>
                        <p className="text-sm text-zinc-400 my-8">Seja bem vindo de volta!</p>
                        <p className="text-zinc-400 mb-4">Nome de usuario</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            className="border p-4 rounded-2xl mb-6"
                            {...register('name', { required: true, minLength: 3 })} />
                            {errors?.name?.type == 'required' && <p className="text-red-600 -top-5 relative ml-2">O    nome é obrigatorio</p>}
                        <p className="text-zinc-400 mb-4">Senha</p>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Senha" 
                            className="border p-4 rounded-xl mb-6" 
                            {...register('password', { required: true, minLength: 6 })} />
                            {errors?.password?.type == 'required' && <p className="text-red-600 relative -top-5- ml-2 mb-6">A senha é obrigatoria</p>}
                        <button 
                            className="w-full p-4 border rounded-2xl bg-fundo-secundario text-white font-bold" onClick={() => handleSubmit(onSubimit)()}>Logar</button>
                        <button 
                            className="mt-3 p-4 w-full border rounded-2xl flex justify-center gap-4" 
                            onClick={handleLogin}>Logar com  <img src={google} className="w-6" /> </button>
                        <a 
                            href="" 
                            className="ml-2 mt-3 text-sm text-zinc-400">Não tem uma conta? Clique aqui para registar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login