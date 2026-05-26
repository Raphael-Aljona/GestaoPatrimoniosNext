import styles from "./lista-patrimonio-por-sala.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import CardPatrimonioPorSala from "@/src/components/card-patrimonio-por-sala/card-patrimonio-por-sala";


const ListaPatrimonioPorSala = () => {
    return (
        <>

            <section
                className={`${styles.page_header} ${styles.layout_guide}`}
                aria-labelledby="titulo_patrimonios"
            >
                <h1 id="titulo_patrimonios">
                    Patrimônios: Sala 09/10
                </h1>

                <form
                    className={styles.search_area}
                    role="search"
                >
                    <label
                        htmlFor="pesquisa_ambiente"
                        className={styles.sr_only}
                    >
                        Pesquisar patrimônios
                    </label>

                    <input
                        type="search"
                        id="pesquisa_ambiente"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o ambiente"
                    />

                    <button
                        type="button"
                        className={styles.filter_button}
                        aria-label="Filtrar patrimônios"
                    >
                        <FontAwesomeIcon icon={faSliders}/>
                    </button>
                </form>
            </section>

            <section
                className={`${styles.table_section} ${styles.layout_guide}`}
                aria-label="Lista de patrimônios"
            >
                <table className={styles.environment_table}>
                    <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>
                        <th>Tipo</th>
                        <th>Data transferência</th>
                        <th>Detalhes</th>
                        <th>Transferir</th>
                    </tr>
                    </thead>
                    <CardPatrimonioPorSala></CardPatrimonioPorSala>
                </table>
            </section>

            <nav
                className={styles.pagination}
                aria-label="Paginação"
            >
                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Página anterior"
                >
                    ‹
                </button>

                <a
                    href="#"
                    className={`${styles.pagination_link} ${styles.current}`}
                    aria-current="page"
                >
                    1
                </a>

                <a
                    href="#"
                    className={styles.pagination_link}
                >
                    2
                </a>

                <a
                    href="#"
                    className={styles.pagination_link}
                >
                    3
                </a>

                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Próxima página"
                >
                    ›
                </button>
            </nav>

        </>
    )
}

export default ListaPatrimonioPorSala