import styles from "./detalhe-patrimonio.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/src/components/header/header";
import ListaHistorico from "@/src/components/lista-historico/lista-historico";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getPatrimonio, getPatrimonioPorId} from "@/src/pages/api/patrimonioService";
import {erro} from "@/src/utils/toast";

type Patrimonio = {
    denominacao: string;
    imagem: string;
    localizacaoID: string;
    numeroPatrimonio: string;
    patrimonioID: string;
    statusPatrimonioID: string;
    valor: number;
}

const DetalhePatrimonio = () => {

    const [patrimonio, setPatrimonio] = useState<Patrimonio>()

    const params = useParams();
    const id = params?.id;

    async function getPatrimonioId(){
        try{
            const dados = await getPatrimonioPorId(String(id))

            setPatrimonio(dados)
        }catch (err:any){
            erro(err.message)
        }
    }

    useEffect(() => {
        if(!id) return;

        getPatrimonioId();
    }, [id]);

    console.log(patrimonio);

    return (
        <>
            <Header>

            </Header>
            <main className={styles.page_content}>
                <section
                    className={`${styles.page_detalhes} ${styles.layout_guide}`}
                    aria-labelledby="titulo_patrimonio"
                >
                    <a
                        href="#"
                        className={styles.back_link}
                    >
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        Voltar
                    </a>

                    <h1 id="titulo_patrimonio">
                        Patrimônio: {patrimonio?.numeroPatrimonio}
                    </h1>

                    <article className={styles.patrimonio_card}>
                        <div className={styles.patrimonio_content}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>
                                    {patrimonio?.denominacao}
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
                    <ListaHistorico/>
                </section>
            </main>
        </>
    );
};

export default DetalhePatrimonio;