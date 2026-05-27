import {permanentRedirect} from "next/navigation";

export async function main() {
    return {
        redirect: {
            destination: '/login',
            permanentRedirect: false
        }
    }
}

export default function Home() {
    return null
}
