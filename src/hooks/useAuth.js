import { useContext } from "react";
import AuthContext from "../context/authContext";

function useAuth() {
    const authContext = useContext(AuthContext) //pobieram wartosc z kontekstu
  const auth =authContext.isAuthenticated; //i teraz mozemy zwracac auth na podstawie authContext
  //czyli pobieram wartosc z kontekstu
  const setAuth = (value) => {
        if(value){
            authContext.login()
        }else
        {
            authContext.logout();
        }
  }

    return [auth,setAuth];
}


export default useAuth;
//nazwa jest bardzo wazna,jeśli jest use to react wie że to jest hook,
//natomiast nie narzucam nam wiecej jakis specjalnych wytycznych