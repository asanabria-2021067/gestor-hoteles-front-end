import axios from "axios";
import Swal from "sweetalert2";
export const apiLogin = async (correo, password) => {
    try {
        const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/auth/login';
        const response = await axios.post(URL, {
            correo,
            password
        });
        const token = response.data.token;
        (token) ? localStorage.setItem("token", token) : null;
        return token;

    } catch ({response: {data: {message}}}) {
        
        Swal.fire({
            icon : "error",
            title: "Error en el login",
            text: message
        })
    }
}
export const apiGoogle = async () => {
    try {
        const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/social/google/callback';
        const response = await axios.get(URL)
        console.log(response);
        const token = response.token;
        (token) ? localStorage.setItem("token", token) : null;
        return token;

    } catch (error) {
        
        Swal.fire({
            icon : "error",
            title: "Error en el login",
            text: message
        })
    }
};

export const postUsuarioLoginGoogle = async(nombre, correo, img) => {
    try {
        const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/social/googleLogin';
        const response = await axios.post(URL , {
            nombre: nombre, 
            correo: correo, 
            img: img})
        console.log(response);
        const token = response.data.token;
        console.log(token);
        (token) ? localStorage.setItem("token", token) : null;
        return true;

    } catch (error) {
        
        Swal.fire({
            icon : "error",
            title: "Error en el login",
            text: error
        })
    }
}

