import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBkFjL906DBSL-0alS9TtX6hI949kqUs6Q",

  authDomain: "projeto-liver.firebaseapp.com",

  projectId: "projeto-liver",

  storageBucket: "projeto-liver.firebasestorage.app",

  messagingSenderId: "382212072987",

  appId: "1:382212072987:web:bfacc023aeda57590cbabe"

};

// 1. Inicializa o Firebase primeiro
const app = initializeApp(firebaseConfig);

// 2. Inicializa e exporta os serviços de Autenticação
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 3. Funções utilitárias de login (agora elas reconhecem o 'auth' criado acima)
export const loginComEmailSenha = async (email, senha) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, senha);
    return result.user;
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      throw new Error("E-mail ou senha incorretos.");
    }
    throw new Error(error.message);
  }
};

export const loginComGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Usuário:", result.user);
    return result.user;
  } catch (error) {
    console.error("Erro ao logar com Google:", error.message);
  }
};

export const cadastrarComEmailSenha = async (email, senha) => {
     try {
       const result = await createUserWithEmailAndPassword(auth, email, senha);
       return result.user;
     } catch (error) {
       // Tratando erros comuns de cadastro
       if (error.code === 'auth/email-already-in-use') {
         throw new Error("Este e-mail já está sendo usado por outra conta.");
       }
       if (error.code === 'auth/weak-password') {
         throw new Error("A senha deve ter pelo menos 6 caracteres.");
       }
       throw new Error(error.message);
     }
   };

export const deslogar = () => signOut(auth);