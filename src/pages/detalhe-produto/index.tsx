import styles from "./detalhe-patrimonio.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faChevronDown,
    faUser,
    faBars,
    faArrowLeft,
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

const DetalhePatrimonio = () => {
    return (
        <>
            <header className={styles.topbar}>
                <nav
                    className={`${styles.navbar} ${styles.layout_guide}`}
                    aria-label="Menu principal"
                >
                    <a
                        href="#"
                        className={styles.logo_link}
                        aria-label="Página inicial"
                    >
                        <img
                            src="/imgs/Logo Senai.png"
                            alt="Logo SENAI"
                            className={styles.logo}
                        />
                    </a>

                    <ul className={styles.menu_list}>
                        <li>
                            <a
                                href="#"
                                className={styles.menu_link}
                            >
                                Ambientes

                                <FontAwesomeIcon icon={faChevronDown} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className={styles.menu_link}
                            >
                                Patrimônios
                            </a>
                        </li>
                    </ul>

                    <section
                        className={styles.user_area}
                        aria-label="Informações do usuário"
                    >
                        <button
                            className={styles.user_icon}
                            aria-label="Abrir perfil do usuário"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </button>

                        <div className={styles.user_info}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>

                        <button
                            className={styles.arrow_button}
                            aria-label="Abrir opções da conta"
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </section>

                    <button
                        className={styles.hamburguer}
                        aria-label="Abrir opções de menu"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </nav>
            </header>

            <main className={styles.page_content}>
                <section
                    className={`${styles.page_detalhes} ${styles.layout_guide}`}
                    aria-labelledby="titulo_patrimonio"
                >
                    <a
                        href="#"
                        className={styles.back_link}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Voltar
                    </a>

                    <h1 id="titulo_patrimonio">
                        Patrimônio: 1236808
                    </h1>

                    <article className={styles.patrimonio_card}>
                        <div className={styles.patrimonio_content}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>
                                    NOTEBOOK ALTO DESEMPENHO P/ GAMER
                                </dd>
                            </dl>

                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>

                            <dl>
                                <dt>Data transferência</dt>
                                <dd>
                                    <time dateTime="2026-02-09">
                                        09/02/2026
                                    </time>
                                </dd>
                            </dl>

                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>

                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>

                <section
                    className={`${styles.table_section} ${styles.layout_guide}`}
                    aria-label="Lista de histórico do patrimônio"
                >
                    <h2>Histórico</h2>

                    <table className={styles.history_table}>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Tipo de movimentação</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Responsável</th>
                            <th>Justificativa</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td data-label="Data">
                                11/02/2026
                            </td>

                            <td data-label="Tipo de movimentação">
                                    <span className={styles.status_badge}>
                                        Transferência
                                    </span>
                            </td>

                            <td data-label="Origem">
                                Sala 07/08
                            </td>

                            <td data-label="Destino">
                                Sala 09/10
                            </td>

                            <td data-label="Responsável">
                                Gustavo Lima
                            </td>

                            <td data-label="Justificativa">
                                <a
                                    href="#"
                                    aria-label="Ver justificativa da transferência"
                                >
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
};

export default DetalhePatrimonio;