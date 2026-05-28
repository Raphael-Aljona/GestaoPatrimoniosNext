import {api} from "@/src/pages/api/api";


export async function getLocal(){
    try{
        const response = await api.get('Localizacao')

        console.log(response)
        return response.data
    }   catch(err){
        throw new Error(err.message);
    }
}