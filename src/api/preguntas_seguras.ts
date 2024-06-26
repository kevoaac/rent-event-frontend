import {authApi, tokenApi} from "@/lib/axios.ts";

export const obtenerPreguntasSeguras = async () => {
    const response = await tokenApi.get(`/security/preguntasseguras/get`);
    return response.data;
};
export const updatePreguntasSegurasClient = async (
    correo: string,
    pregunta1: string,
    respuesta1: string,
    pregunta2: string,
    respuesta2: string,
    pregunta3: string,
    respuesta3: string
) =>
    await authApi.put(
        `/security/preguntasseguras/actualizar`,
        JSON.stringify({
            correo: correo,
            pregunta1: pregunta1,
            respuesta1: respuesta1,
            pregunta2: pregunta2,
            respuesta2: respuesta2,
            pregunta3: pregunta3,
            respuesta3: respuesta3
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            // withCredentials: true,
        }
    );
export const getPreguntaSeguraCliente = async (
    correo: string,
) =>
    await authApi.put(
        `/security/preguntasseguras/get`,
        JSON.stringify({
            correo: correo,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            // withCredentials: true,
        }
    );

export const validarPreguntaSeguraClient = async (
    correo: string,
    pregunta: string,
    respuesta: string,
) =>
    await authApi.put(
        `/security/preguntasseguras/validar`,
        JSON.stringify({
            correo: correo,
            pregunta: pregunta,
            respuesta: respuesta
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            // withCredentials: true,
        }
    );
