import styles from "./lista_locais.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faChevronDown,
    faUser,
    faBars,
    faSliders,
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/src/components/header/header";
import ListaAmbiente from "@/src/components/lista-ambiente/lista-ambiente";

const ListaLocais = () => {
    return (
        <>
            <Header/>
            <main className={styles.page_content}>
                <ListaAmbiente/>
            </main>
        </>
    );
};

export default ListaLocais;