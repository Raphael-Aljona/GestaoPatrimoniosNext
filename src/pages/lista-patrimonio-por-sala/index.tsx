import styles from "./lista_patrimonios_por_sala.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faUser,
    faBars,
    faSliders,
    faCircleInfo,
    faArrowRightArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/src/components/header/header";
import CardPatrimonioPorSala from "@/src/components/card-patrimonio-por-sala/card-patrimonio-por-sala";
import ListaPatrimonioPorSala from "@/src/components/lista-patrimonio-por-sala/lista-patrimonio-por-sala";

const ListaPatrimoniosPorSala = () => {
    return (
        <>
            <Header>
            </Header>
            <main className={styles.page_content}>
                <ListaPatrimonioPorSala />
            </main>
        </>
    );
};

export default ListaPatrimoniosPorSala;