import {jwtDecode} from "jwt-decode";
import secureLocalStorage from "react-secure-storage";

type Token = {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
    "NIF": string
}


export async function decodeToken() {
    const token= secureLocalStorage.getItem("token");

    if (token) {
        console.log(jwtDecode<Token>(token))
        return jwtDecode<Token>(token);
    } else {
        console.log("ljfdlçkajdfklçasjdflçkasjdfa")
        return null;
    }
}