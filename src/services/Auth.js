// src/services/auth.js
import { auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Armazenar usuário e token na sessão
    sessionStorage.setItem("@AuthFirebase:token", user.accessToken);
    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
    console.log("Usuário logado:", user);
    // Redirecionar para outra rota após o login
    navigate("/home")
    // Roteamento para a página desejada
  } catch (error) {
    console.error("Erro no login com o Google:", error.message);
  }
};

