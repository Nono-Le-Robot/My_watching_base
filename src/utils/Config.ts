const apiUrl:string = "https://my-sharing-base.sanren.fr/backend"
// const apiUrl:string = "http://localhost:5000/backend"


export const registerUrl: string = `${apiUrl}/api/auth/register`
export const LoginUrl: string = `${apiUrl}/api/auth/login`
export const getAllFiles: string = `${apiUrl}/get-main-videos`
export const getUserFiles: string = `${apiUrl}/my-files`
export const postDataVideo: string = `${apiUrl}/post-data-video`





export default {
    registerUrl,
    LoginUrl,
    getAllFiles,
    getUserFiles,
    postDataVideo
}