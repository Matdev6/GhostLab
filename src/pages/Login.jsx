import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; 
import { loginWithGoogle } from "../services/auth";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
import eye from "../assets/eye.png"

const Login = () => {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Navegação e formulários
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função para enviar os dados de login ao backend '
  const sendMessage = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:2589/api/login/", {
        name: data.name,
        password: data.password,
      });

      // Lida com a resposta do backend
      if (response.data.success) {
        // Marca o usuário como autenticado
        setIsAuthenticated(true);
        setErrorMessage(''); // Limpa qualquer mensagem de erro
      } else {
        // Exibe a mensagem de erro no frontend teste
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
      setErrorMessage("Ocorreu um erro ao tentar realizar o login");
    }
  };

  // Função para login com o Google
  const handleLogin = async () => {
    await loginWithGoogle(navigate);
  };

  // Efeito para redirecionamento
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redireciona para a página de sucesso após a autenticação
    }
  }, [isAuthenticated, navigate]);

  // Renderização
  return (
    <div className="flex bg-zinc-200 h-screen w-screen overflow-hidden">
      <div className="h-5/6 w-4/5 flex items-center justify-center m-auto">
        {/* Div lateral esquerda */}
        <motion.div 
          className="h-full w-1/2 bg-black flex"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5  }}>
            
          <img src={logo} alt="logo" className="w-2/3 h-2/3 m-auto" />
        </motion.div>

        {/* Div principal de login */}
        <motion.div className="h-full w-1/2 bg-white"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}>
          <div className="flex flex-col mx-40 my-20">
            <h1 className="font-bold text-5xl">Login</h1>
            <p className="text-sm text-zinc-400 my-8">Seja bem-vindo de volta!</p>

            {/* Campo Nome */}
            <p className="text-zinc-400 mb-4">Nome de usuário</p>
            <input
              type="text"
              placeholder="Nome"
              className="border p-4 rounded-2xl mb-6"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-600 -top-5 relative ml-2">O nome é obrigatório</p>
            )}

            {/* Campo Senha */}
            <p className="text-zinc-400 mb-4">Senha</p>
            <div className="relative w-full mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="border w-full p-4 rounded-xl pr-12"
                {...register("password", { required: true, minLength: 5 })}
              />
              <img
                src={eye}
                alt="Mostrar senha"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer "
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {errors?.password?.type === "required" && (
              <p className="text-red-600 relative -top-5 ml-2 mb-6">A senha é obrigatória</p>
            )}

            {/* Mensagem de erro (se houver) */}
            {errorMessage && (
              <p className="text-red-600 mb-4">{errorMessage}</p>
            )}

            {/* Botão de Login */}
            <button
              className="w-full p-4 border rounded-2xl bg-fundo-secundario text-white font-bold"
              onClick={handleSubmit(sendMessage)} // Submete os dados do formulário
            >
              Logar
            </button>

            {/* Botão de Login com Google */}
            <button
              className="mt-3 p-4 w-full border rounded-2xl flex justify-center gap-4"
              onClick={handleLogin} // Exclusivo para o Google
            >
              Logar com <img src={google} className="w-6" alt="Google" />
            </button>

            {/* Link para registro */}
            <a
              href=""
              className="ml-2 mt-3 text-sm text-zinc-400"
            >
              Não tem uma conta? Clique aqui para registrar
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
