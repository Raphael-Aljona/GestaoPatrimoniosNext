import {api} from "@/src/pages/api/api";


export async function getLocal(){
    try{
        const response = await api.get('Localizacao')

        return response.data
    }   catch(err:any){
        throw new Error(err.message);
    }
}