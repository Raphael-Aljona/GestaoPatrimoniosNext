import {api} from "@/src/pages/api/api";


export async function getPatrimonio(){
    try{
        const response = await api.get("Patrimonio");

        console.log(response);
        return response.data;
    }catch(err:any){
        throw new Error(err.message);
    }
}