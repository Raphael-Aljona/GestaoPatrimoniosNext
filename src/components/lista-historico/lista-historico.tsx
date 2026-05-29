import CardHistorico from "@/src/components/card-historico/card-historico";
import styles from "./lista-historico.module.css"
import {getLogPatrimonioId} from "@/src/pages/api/logPatrimonioService";
import {erro} from "@/src/utils/toast";
import {useEffect, useState} from "react";

type LogPatrimonio = {
    logPatrimonioID: string
    dataTransferencia: string
    patrimonioID: string
    denominacaoPatrimonio: string
    tipoAlteracao: string
    statusPatrimonio: string,
    usuario: string,
    localizacao: string
}

type ListaHistoricoProps = {
    id: string
}

const ListaHistorico = ({id}:ListaHistoricoProps) => {

    const [logPatrimonio, setLogPatrimonio] = useState<LogPatrimonio[]>()

    async function getLogPatrimonioPorId() {
        try {
            const dados = await getLogPatrimonioId(String(id))

            setLogPatrimonio(dados)
        } catch (err: any) {
            erro(err.message)
        }
    }

    useEffect(() => {
        if(!id) return;

        getLogPatrimonioPorId()
    }, [])

    console.log(`log patrimonio: ${logPatrimonio}`)

    return (
      <>
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
              {logPatrimonio?.map(value => (
                  <CardHistorico
                      key={value.logPatrimonioID}
                      dataTransferencia={value.dataTransferencia}
                      denominacaoPatrimonio={value.denominacaoPatrimonio}
                      tipoAlteracao={value.tipoAlteracao}
                      statusPatrimonio={value.statusPatrimonio}
                      usuario={value.usuario}
                      localizacao={value.localizacao}
                      logPatrimonioID={value.logPatrimonioID}
                      patrimonioID={value.patrimonioID}
                  ></CardHistorico>
              ))}
          </table>
      </>
    );
}

export default ListaHistorico;