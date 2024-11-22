import axios from "axios";

const Api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/"  
})

export const getPost = async () => {
    try {
        const response = await Api.get("/posts");
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
};

export const DeletePost = async (id)=>{
    try {
        const resp = await Api.delete(`/posts/${id}`)
        return resp;
    } catch (error) {
        console.log(error.message)
    }
}