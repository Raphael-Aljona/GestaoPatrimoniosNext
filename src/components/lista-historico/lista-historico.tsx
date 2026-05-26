import CardHistorico from "@/src/components/card-historico/card-historico";
import styles from "./lista-historico.module.css"

const ListaHistorico = () => {
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
              <CardHistorico></CardHistorico>
          </table>
      </>
    );
}

export default ListaHistorico;